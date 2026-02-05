import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { ArrowRight, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const imageSrc = article.image && article.image.trim() !== '' 
    ? article.image 
    : 'https://picsum.photos/seed/wonosobo-placeholder/600/400';

  return (
    <Link href={`/artikel/${article.slug}`} className="group block">
      <div className="space-y-6">
        <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 border-2 border-black/5">
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{article.category}</span>
            <span className="h-px w-4 bg-gray-200"></span>
            <div className="flex items-center gap-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground">{article.date}</span>
              {article.author && (
                <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground/60">
                  <User size={10} />
                  <span>{article.author}</span>
                </div>
              )}
            </div>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed font-medium">
            {article.excerpt}
          </p>
          <div className="pt-2 flex items-center font-black uppercase tracking-widest text-[10px] text-black">
            Read Full Story <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform text-primary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
