
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/artikel/${article.slug}`} className="group block">
      <div className="space-y-6">
        <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{article.category}</span>
            <span className="h-px w-8 bg-gray-300"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{article.date}</span>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="pt-2 flex items-center font-bold uppercase tracking-widest text-[10px] text-black">
            Read More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
