interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

const PADDING = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ children, className = "", padding = "md" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-brand-100 bg-white shadow-sm ${PADDING[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
