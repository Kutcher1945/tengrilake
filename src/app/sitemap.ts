import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.tengrilake.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ru`,
          kk: `${BASE_URL}/kk`,
          en: `${BASE_URL}/en`,
        },
      },
    },
  ];
}
