export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  type: 'destination' | 'story';
  author?: string;
  id?: string;
  focusKeyword?: string;
  metaTitle?: string;
}

/**
 * DATABASE ARTIKEL - KOSONG
 * Artikel sekarang sepenuhnya dikelola melalui Firestore di Dashboard Admin.
 * Gunakan fitur AI Generator untuk membuat konten 100% SEO Health.
 */
export const articles: Article[] = [];
