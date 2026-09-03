export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getServiceBySlug(services, slug) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(services, currentService, limit = 3) {
  return services
    .filter((s) => s.category === currentService.category && s.id !== currentService.id)
    .slice(0, limit);
}

export function getCategoryCount(services) {
  const counts = {};
  services.forEach((s) => {
    counts[s.category] = (counts[s.category] || 0) + 1;
  });
  return counts;
}

export default { slugify, formatDate, getServiceBySlug, getRelatedServices };
