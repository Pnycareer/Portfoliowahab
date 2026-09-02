import StatCounter from "./StatCounter";

export default function Stat({ value, label, suffix, prefix, format, invert = false }) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className={`font-display text-4xl sm:text-5xl leading-none ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        <StatCounter value={value} suffix={suffix} prefix={prefix} format={format} />
      </span>
      <span
        className={`text-sm ${invert ? "text-white/70" : "text-muted"}`}
      >
        {label}
      </span>
    </div>
  );
}
