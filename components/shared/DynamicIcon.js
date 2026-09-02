import * as icons from "lucide-react";

export default function DynamicIcon({ name, className = "h-5 w-5" }) {
  const Icon = icons[name] || icons.Circle;
  return <Icon className={className} aria-hidden />;
}
