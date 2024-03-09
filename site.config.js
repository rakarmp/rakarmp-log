const CONFIG = {
  // profile setting (required)
  profile: {
    name: "rakarmp",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "Not Fullstack Developer, but Backend Developer with Frontend Skills 🚀",
    email: "rakaabdirmp@gmail.com",
    linkedin: "raka-abdi-rmp-a0771a245",
    github: "rakarmp",
    instagram: "rakarmp",
  },
  projects: [
    {
      name: `rakarmp-log`,
      href: "https://github.com/rakarmp/rakarmp-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "rakarmp tech",
    description: "welcome to rakarmp tech!",
  },

  // CONFIG configration (required)
  link: "https://www.rakarmp.tech",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "rakarmp/rakarmp-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "54af81e7-4143-4511-9e28-b07a138476d3", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
