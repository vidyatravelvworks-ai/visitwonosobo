
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/artikel/${article.slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col space-y-4">
          <div className="flex items-center gap-4 text-xs font-semibold text-primary uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {article.date}
            </span>
          </div>
          <h3 className="text-xl font-bold font-headline text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
          <div className="pt-4 border-t border-border flex items-center justify-between text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
            <span>Baca Selengkapnya</span>
            <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
