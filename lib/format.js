export function formatDate(input, opts = {}) {
  const date = input instanceof Date ? input : new Date(input);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...opts,
  }).format(date);
}

export function formatDateParts(input) {
  const date = input instanceof Date ? input : new Date(input);
  return {
    day: new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("en-GB", { month: "short" }).format(date),
    year: new Intl.DateTimeFormat("en-GB", { year: "numeric" }).format(date),
  };
}

export function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
