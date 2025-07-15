import type { MetadataRoute } from 'next';
import { recipesData } from '@/lib/data';
import { routing } from '@/i18n/routing'; // 假设您的多语言配置在这里

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quesadillacorner.site';
  
  // 从您的配置中获取所有支持的语言
  const locales = routing.locales;

  // 1. 为每个 locale 生成静态页面的 URL
  //    例如: /en, /ja, /en/recipes, /ja/recipes, etc.
  const staticPages = ['', '/recipes', '/guides/best-quesadilla-makers'];
  const staticUrls = locales.flatMap((locale) => {
    return staticPages.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    }));
  });

  // 2. 为每个 locale 生成动态食谱页面的 URL
  //    例如: /en/recipes/some-slug, /ja/recipes/some-slug, etc.
  const recipeUrls = locales.flatMap((locale) => {
    return recipesData.map((recipe) => ({
      url: `${baseUrl}/${locale}/recipes/${recipe.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  });

  // 3. 组合所有 URL
  return [...staticUrls, ...recipeUrls];
}