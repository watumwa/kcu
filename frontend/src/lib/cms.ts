import type { HeroSlide, NavItem } from "@/data/site";

const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000").replace(/\/$/, "");

type Paginated<T> = { results: T[] };

export type CmsHeroSlide = HeroSlide & { id?: number };
export type CmsQuickLink = { id?: number; title: string; text: string; href: string; icon?: string; order?: number };
export type CmsSchool = {
  id: number;
  name: string;
  slug: string;
  image_src: string;
  description: string;
  courses: Array<{
    id: number;
    name: string;
    slug: string;
    level: string;
    duration: string;
    duration_custom: string;
    description?: string;
    entry_requirements?: string;
    career_prospects?: string;
  }>;
};
export type CmsCollaboration = { id: number; name: string; logo_src: string; description: string };
export type CmsNewsItem = {
  id: number;
  category: string;
  title: string;
  date: string;
  href: string;
  text: string;
  image: string;
  featured: boolean;
};

export type CmsPage<T = Record<string, unknown>> = {
  id: number;
  title: string;
  slug: string;
  meta_description: string;
  content: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_src: string;
  layout_data: T;
};

async function cmsGet<T>(path: string): Promise<T | null> {
  try {
    // CMS edits should be visible on the next page load. Caching here used to
    // keep old admin values visible for several minutes.
    const response = await fetch(`${API_BASE}/api/v1/${path}`, { cache: "no-store" });
    if (!response.ok) {
      console.error(`CMS request failed: ${path} (${response.status})`);
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error(`CMS request failed: ${path}`, error);
    return null;
  }
}

function rows<T>(value: Paginated<T> | T[] | null): T[] | null {
  if (!value) return null;
  return Array.isArray(value) ? value : value.results;
}

export async function getNavigation(): Promise<NavItem[] | null> {
  const data = await cmsGet<Array<{
    label: string; href: string; description: string; disable_link: boolean;
    children: Array<{ label: string; href: string; children: Array<{ label: string; href: string }> }>;
  }>>("navigation/");
  return data?.map((item) => ({ ...item, disableLink: item.disable_link })) ?? null;
}

export async function getHeroSlides(): Promise<CmsHeroSlide[] | null> {
  const data = rows(await cmsGet<Paginated<Record<string, unknown>> | Record<string, unknown>[]>("hero-slides/"));
  return data?.map((item) => ({
    id: item.id as number,
    badge: item.badge as string,
    school: item.school as string,
    title: item.title as string,
    subtitle: item.subtitle as string,
    cta: item.cta as string,
    link: item.cta_href as string,
    image: item.image_src as string,
    imagePosition: item.image_position as string,
    programmes: item.programmes as string[],
  })) ?? null;
}

export async function getQuickLinks() {
  return rows(await cmsGet<Paginated<CmsQuickLink> | CmsQuickLink[]>("quick-links/"));
}

export async function getSchools() {
  return rows(await cmsGet<Paginated<CmsSchool> | CmsSchool[]>("schools/"));
}

export async function getCollaborations() {
  return rows(await cmsGet<Paginated<CmsCollaboration> | CmsCollaboration[]>("collaborations/"));
}

export async function getCmsPage<T = Record<string, unknown>>(route: string) {
  return cmsGet<CmsPage<T>>(`cms-pages/${route}/`);
}

export async function getSiteContent<T = Record<string, unknown>>(key: string) {
  const value = await cmsGet<{ key: string; title: string; data: T }>(`site-content/${key}/`);
  return value?.data ?? null;
}

export async function getNews(): Promise<CmsNewsItem[] | null> {
  const data = rows(await cmsGet<Paginated<Record<string, unknown>> | Record<string, unknown>[]>("news/"));
  return data?.map((item) => ({
    id: item.id as number,
    category: item.category as string,
    title: item.title as string,
    date: new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })
      .format(new Date(`${item.date as string}T00:00:00Z`)),
    href: (item.href as string) || `/news/${item.slug as string}`,
    text: item.text as string,
    image: item.image_src as string,
    featured: item.featured as boolean,
  })) ?? null;
}
