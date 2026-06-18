import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const X_USERNAME = "KingCeasorUni";
const X_API_BASE = "https://api.x.com/2";
const POST_LIMIT = 4;
const REVALIDATE_SECONDS = 600;

type XUser = {
  id: string;
  name: string;
  username: string;
};

type XPost = {
  id: string;
  text: string;
  created_at?: string;
  note_tweet?: {
    text?: string;
  };
  public_metrics?: {
    like_count?: number;
    reply_count?: number;
    repost_count?: number;
  };
  entities?: {
    urls?: Array<{
      url: string;
      expanded_url?: string;
      display_url?: string;
    }>;
  };
};

type XUserResponse = {
  data?: XUser;
};

type XPostsResponse = {
  data?: XPost[];
};

type FeedState =
  | { status: "ready"; posts: XPost[]; user: XUser }
  | { status: "empty"; user: XUser }
  | { status: "unconfigured" }
  | { status: "error" };

async function fetchXJson<T>(url: string, bearerToken: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
    next: {
      revalidate: REVALIDATE_SECONDS,
    },
  });

  if (!response.ok) {
    throw new Error(`X API request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getLatestXPosts(): Promise<FeedState> {
  const bearerToken = process.env.X_BEARER_TOKEN ?? process.env.TWITTER_BEARER_TOKEN;

  if (!bearerToken) {
    return { status: "unconfigured" };
  }

  try {
    const userParams = new URLSearchParams({
      "user.fields": "username,name",
    });
    const userResponse = await fetchXJson<XUserResponse>(
      `${X_API_BASE}/users/by/username/${X_USERNAME}?${userParams.toString()}`,
      bearerToken,
    );

    if (!userResponse.data) {
      return { status: "error" };
    }

    const postParams = new URLSearchParams({
      max_results: "5",
      exclude: "retweets,replies",
      "tweet.fields": "created_at,entities,note_tweet,public_metrics",
    });
    const postsResponse = await fetchXJson<XPostsResponse>(
      `${X_API_BASE}/users/${userResponse.data.id}/tweets?${postParams.toString()}`,
      bearerToken,
    );
    const posts = postsResponse.data?.slice(0, POST_LIMIT) ?? [];

    if (posts.length === 0) {
      return { status: "empty", user: userResponse.data };
    }

    return { status: "ready", posts, user: userResponse.data };
  } catch (error) {
    console.error("Unable to load X posts", error);
    return { status: "error" };
  }
}

function getPostText(post: XPost) {
  let text = post.note_tweet?.text ?? post.text;

  for (const url of post.entities?.urls ?? []) {
    text = text.replace(url.url, url.expanded_url ?? url.display_url ?? url.url);
  }

  return text;
}

function formatDate(value?: string) {
  if (!value) {
    return "Recent update";
  }

  return new Intl.DateTimeFormat("en-UG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

function formatCount(value = 0) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function FeedMessage({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-xl bg-[#F7F9FC] px-6 py-10 text-center">
      <div className="mx-auto max-w-md">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-slate-950 text-white">
          <FaXTwitter className="size-5" />
        </div>
        <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  );
}

export default async function SocialFeed() {
  const feed = await getLatestXPosts();

  return (
    <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Social Media</p>
            <h2 className="text-2xl font-black text-slate-900">Latest On X</h2>
            <p className="mt-1 text-sm text-slate-500">Live updates from King Ceasor University on X.</p>
          </div>
          <div className="inline-flex size-9 items-center justify-center rounded-full bg-[#0B6232] text-white" aria-hidden="true">
            <FaXTwitter className="size-4" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          {feed.status === "ready" && (
            <div className="divide-y divide-slate-100 overflow-hidden rounded-xl">
              {feed.posts.map((post) => (
                <article key={post.id} className="bg-white px-4 py-5 sm:px-6">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                      <FaXTwitter className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p className="font-black text-slate-950">{feed.user.name}</p>
                        <p className="text-sm font-semibold text-slate-400">@{feed.user.username}</p>
                        <span className="text-slate-300">/</span>
                        <time className="text-sm font-semibold text-slate-400" dateTime={post.created_at}>
                          {formatDate(post.created_at)}
                        </time>
                      </div>
                      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700 sm:text-base">{getPostText(post)}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-5 text-xs font-bold text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <MessageCircle className="size-4" /> {formatCount(post.public_metrics?.reply_count)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Repeat2 className="size-4" /> {formatCount(post.public_metrics?.repost_count)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Heart className="size-4" /> {formatCount(post.public_metrics?.like_count)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {feed.status === "empty" && (
            <FeedMessage title="No recent X posts found" text="New King Ceasor University posts will appear here when they are available." />
          )}

          {feed.status === "unconfigured" && (
            <FeedMessage
              title="Latest X posts are being connected"
              text="King Ceasor University updates will appear here once the live feed is connected."
            />
          )}

          {feed.status === "error" && (
            <FeedMessage
              title="Latest X posts could not load"
              text="The feed could not be reached right now. Please try again shortly."
            />
          )}
        </div>
      </div>
    </section>
  );
}
