"use client";

import { useEffect, useState } from "react";

const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000").replace(/\/$/, "");

export function useSiteContent<T>(key: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);

  useEffect(() => {
    let active = true;
    fetch(`${API_BASE}/api/v1/site-content/${key}/`, { cache: "no-store" })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error(String(response.status))))
      .then((value) => { if (active && value?.data) setData(value.data as T); })
      .catch((error) => console.error(`CMS content failed: ${key}`, error));
    return () => { active = false; };
  }, [key]);

  return data;
}
