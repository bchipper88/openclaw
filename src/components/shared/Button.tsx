import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const VARIANT_CLASSES = {
  primary: "shadow-sm",
  secondary: "shadow-sm",
  outline: "border-2",
};

const VARIANT_STYLES: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--text-secondary)",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "var(--text-secondary)",
    color: "#fff",
  },
  outline: {
    borderColor: "var(--border-hover)",
    color: "var(--text-secondary)",
    backgroundColor: "transparent",
  },
};

const SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${VARIANT_CLASSES[variant]} ${SIZES[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;
  const styles = VARIANT_STYLES[variant];

  if (href) {
    return (
      <Link href={href} className={classes} style={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
