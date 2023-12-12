import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    
  return [
    {
      url: 'https://www.ghazal-lawfirm.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.ghazal-lawfirm.com/ar/home',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.ghazal-lawfirm.com/ar/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      },
      {
        url: 'https://www.ghazal-lawfirm.com/ar/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: 'https://www.ghazal-lawfirm.com/en/home',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.5,
      },
      
  ]
}