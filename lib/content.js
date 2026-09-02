/**
 * DATA ACCESS LAYER
 * -----------------
 * Components must import content ONLY from this file, never from `data/`
 * directly. To move to a CMS/backend later, reimplement these functions with
 * `fetch()` calls to your API — component code stays unchanged.
 */
import { posts } from "@/data/blogs";
import { events } from "@/data/events";
import { achievements } from "@/data/achievements";
import { galleryItems } from "@/data/gallery";
import { priorities } from "@/data/vision";
import { manifesto } from "@/data/manifesto";
import { candidate } from "@/data/candidate";
import { stats } from "@/data/stats";
import { constituency } from "@/data/constituency";
import { campaign } from "@/data/campaign";

const byNewest = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);

/* ---------------- Blog / News ---------------- */
export function getAllPosts() {
  return [...posts].sort(byNewest);
}

export function getFeaturedPost() {
  return getAllPosts().find((p) => p.featured) || getAllPosts()[0];
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getPostSlugs() {
  return posts.map((p) => p.slug);
}

export function getCategories() {
  const counts = new Map();
  for (const p of posts) counts.set(p.category, (counts.get(p.category) || 0) + 1);
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

export function getRelatedPosts(slug, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 2 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function getAdjacentPosts(slug) {
  const all = getAllPosts();
  const i = all.findIndex((p) => p.slug === slug);
  return {
    previous: i > 0 ? all[i - 1] : null,
    next: i >= 0 && i < all.length - 1 ? all[i + 1] : null,
  };
}

export function searchPosts(query, { category } = {}) {
  const q = (query || "").toLowerCase().trim();
  return getAllPosts().filter((p) => {
    const matchesCategory = !category || category === "All" || p.category === category;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });
}

export function paginate(items, page = 1, perPage = 6) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: current,
    totalPages,
    total: items.length,
  };
}

/* ---------------- Events ---------------- */
export function getUpcomingEvents(limit) {
  const now = new Date();
  const list = [...events]
    .filter((e) => new Date(e.date) >= now || e.status === "upcoming")
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return limit ? list.slice(0, limit) : list;
}

export function getPastEvents(limit) {
  const now = new Date();
  const list = [...events]
    .filter((e) => new Date(e.date) < now && e.status !== "upcoming")
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return limit ? list.slice(0, limit) : list;
}

/* ---------------- Static collections ---------------- */
export const getAchievements = () => achievements;
export const getGallery = () => galleryItems;
export const getPriorities = () => priorities;
export const getManifesto = () => manifesto;
export const getCandidate = () => candidate;
export const getStats = () => stats;
export const getConstituency = () => constituency;
export const getCampaign = () => campaign;
