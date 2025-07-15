import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://quesadillacorner.site';

  return {
    rules: {
      userAgent: '*', // 应用于所有爬虫
      allow: '/',     // 允许爬虫访问所有页面
    },
    sitemap: `${baseUrl}/sitemap.xml`, // 站点地图的位置是固定的
  };
}