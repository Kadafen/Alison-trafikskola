import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GetStaticProps, GetStaticPaths } from 'next';
import { blogPosts, BlogPost, BlogCategory, getRelatedPosts } from '@/data/blog-posts';
import ReactMarkdown from 'react-markdown';

interface BlogPostDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, relatedPosts }) => {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
    }
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('sv-SE', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  const getCategoryColor = (category: BlogCategory): string => {
    const colors: Record<BlogCategory, string> = {
      safety: 'bg-red-100 text-red-800',
      maintenance: 'bg-blue-100 text-blue-800',
      rules: 'bg-purple-100 text-purple-800',
      local: 'bg-green-100 text-green-800',
      seasonal: 'bg-yellow-100 text-yellow-800',
      eco: 'bg-teal-100 text-teal-800',
    };
    
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Head>
        <title>{post.title} | Alison Trafikskola</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Tillbaka till bloggen
          </Link>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, idx) => (
              <span 
                key={idx} 
                className={`${getCategoryColor(category)} px-2 py-1 rounded text-xs font-semibold`}
              >
                {category === 'safety' ? 'Säkerhet' : 
                 category === 'maintenance' ? 'Underhåll' : 
                 category === 'rules' ? 'Trafikregler' : 
                 category === 'local' ? 'Lokalt' :
                 category === 'seasonal' ? 'Säsong' : 
                 category === 'eco' ? 'Miljö' : category}
              </span>
            ))}
          </div>

          {/* Post title and metadata */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{formatDate(post.publishDate)}</span>
            <span>{post.author}</span>
          </div>

          {/* Featured image */}
          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              priority
              quality={80}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px)"
              style={{objectFit: "cover"}}
              className="transition-transform duration-500 hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+"
            />
          </div>

          {/* Post content */}
          <div className="prose prose-blue max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Share links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Dela denna artikel</h3>
            <div className="flex gap-3">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Relaterade artiklar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div 
                  key={relatedPost.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        fill
                        priority={index === 0}
                        quality={75}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 350px"
                        style={{objectFit: "cover"}}
                        className="transition-transform duration-300 hover:scale-105"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {relatedPost.categories.map((category, idx) => (
                          <span 
                            key={idx} 
                            className={`${getCategoryColor(category)} px-2 py-1 rounded text-xs font-semibold`}
                          >
                            {category === 'safety' ? 'Säkerhet' : 
                             category === 'maintenance' ? 'Underhåll' : 
                             category === 'rules' ? 'Trafikregler' : 
                             category === 'local' ? 'Lokalt' :
                             category === 'seasonal' ? 'Säsong' : 
                             category === 'eco' ? 'Miljö' : category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{formatDate(relatedPost.publishDate)}</span>
                        <span className="inline-flex items-center text-blue-600">
                          Läs mer
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map(post => ({
    params: { slug: post.slug }
  }));
  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }
  
  const relatedPosts = getRelatedPosts(post.id, 3);
  
  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export default BlogPostDetail; 