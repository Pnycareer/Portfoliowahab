export default function Card({ as: Tag = "div", hover = false, glass = true, className = "", children }) {
  return (
    <Tag
      className={`rounded-lg transition-all duration-300 ${
        glass ? "glass" : "border border-border bg-surface"
      } ${hover ? "hover:-translate-y-1 hover:shadow-card" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
