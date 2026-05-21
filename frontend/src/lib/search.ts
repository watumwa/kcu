import { heroSlides, navItems, newsItems, quickLinks, schools } from "@/data/site";

export type SearchResult = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string;
};

const navResults: SearchResult[] = navItems.flatMap((item) => [
  {
    title: item.label,
    description: item.description,
    href: item.href,
    category: "Website",
    keywords: `${item.label} ${item.description}`,
  },
  ...item.children.flatMap((child) => [
    {
      title: child.label,
      description: `${child.label} under ${item.label}.`,
      href: child.href,
      category: item.label,
      keywords: `${item.label} ${child.label}`,
    },
    ...(child.children ?? []).map((grandchild) => ({
      title: grandchild.label,
      description: `${grandchild.label} under ${child.label}.`,
      href: grandchild.href,
      category: item.label,
      keywords: `${item.label} ${child.label} ${grandchild.label}`,
    })),
  ]),
]);

const heroResults: SearchResult[] = heroSlides.flatMap((slide) => [
  {
    title: slide.school,
    description: `${slide.title}. ${slide.subtitle}`,
    href: "/academics/courses",
    category: slide.badge,
    keywords: `${slide.badge} ${slide.school} ${slide.title} ${slide.subtitle} ${slide.programmes.join(" ")}`,
  },
  ...slide.programmes.map((programme) => ({
    title: programme,
    description: `${programme} at ${slide.school}.`,
    href: "/academics/courses",
    category: "Programme",
    keywords: `${slide.school} ${slide.title} ${programme}`,
  })),
]);

const quickLinkResults: SearchResult[] = quickLinks.map((link) => ({
  title: link.title,
  description: link.text,
  href: link.href,
  category: "Quick link",
  keywords: `${link.title} ${link.text}`,
}));

const schoolResults: SearchResult[] = schools.map((school) => ({
  title: school,
  description: "Academic school, faculty or institute at King Ceasor University.",
  href: "/academics/schools",
  category: "Academics",
  keywords: school,
}));

const newsResults: SearchResult[] = newsItems.map((item) => ({
  title: item.title,
  description: `${item.text} ${item.date}`,
  href: "/news",
  category: item.category,
  keywords: `${item.category} ${item.title} ${item.text} ${item.date}`,
}));

export const searchIndex: SearchResult[] = [
  ...navResults,
  ...heroResults,
  ...quickLinkResults,
  ...schoolResults,
  ...newsResults,
];

export function searchSite(query: string) {
  const terms = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (terms.length === 0) {
    return [];
  }

  return searchIndex
    .map((result) => {
      const haystack = `${result.title} ${result.description} ${result.category} ${result.keywords}`.toLowerCase();
      const score = terms.reduce((total, term) => {
        if (result.title.toLowerCase().includes(term)) return total + 5;
        if (result.category.toLowerCase().includes(term)) return total + 3;
        if (haystack.includes(term)) return total + 1;
        return total;
      }, 0);

      return { result, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.result.title.localeCompare(b.result.title))
    .map((item) => item.result);
}
