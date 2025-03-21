import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage, T } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { blogPosts, BlogCategory } from '@/data/blog-posts';
import Seo from '@/components/shared/Seo';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
  hover: { 
    y: -5,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.2 } 
  }
};

const Blog: React.FC = () => {
  const { language, translateImmediate } = useLanguage();
  const [currentCategory, setCurrentCategory] = useState<BlogCategory | 'all'>('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [featuredPost, setFeaturedPost] = useState<typeof blogPosts[0] | null>(null);

  useEffect(() => {
    // Set featured post
    const featured = blogPosts.find(post => post.featured);
    setFeaturedPost(featured || null);
    
    // Filter posts based on category
    if (currentCategory === 'all') {
      setFilteredPosts(blogPosts.filter(post => !post.featured));
    } else {
      setFilteredPosts(
        blogPosts.filter(
          post => post.categories.includes(currentCategory) && !post.featured
        )
      );
    }
  }, [currentCategory]);

  const categories: { id: BlogCategory | 'all'; label: string }[] = [
    { id: 'all', label: translateImmediate('Alla') },
    { id: 'safety', label: translateImmediate('Säkerhet') },
    { id: 'maintenance', label: translateImmediate('Underhåll') },
    { id: 'rules', label: translateImmediate('Trafikregler') },
    { id: 'local', label: translateImmediate('Lokala tips') },
    { id: 'seasonal', label: translateImmediate('Säsong') },
    { id: 'eco', label: translateImmediate('Miljö') }
  ];

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

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  // Function to determine if an image should have priority loading
  const getPriority = (index: number) => index === 0;

  // Function to get translated category name
  const getCategoryName = (category: BlogCategory): string => {
    const categoryMap: Record<BlogCategory, string> = {
      safety: translateImmediate('Säkerhet'),
      maintenance: translateImmediate('Underhåll'),
      rules: translateImmediate('Trafikregler'),
      local: translateImmediate('Lokala tips'),
      seasonal: translateImmediate('Säsong'),
      eco: translateImmediate('Miljö')
    };
    
    return categoryMap[category] || category;
  };

  return (
    <>
      <Seo
        title={translateImmediate("Blogg")}
        description={translateImmediate("Lär dig mer om trafiksäkerhet, körtekniker och underhåll av fordon genom våra informativa blogginlägg.")}
      />

      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3"><T>Blogg</T></h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <T>Lär dig mer om trafiksäkerhet, körtekniker och underhåll av fordon genom våra informativa blogginlägg.</T>
            </p>
          </div>

          {/* Featured post (if available) */}
          {featuredPost && (
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6 inline-block pb-2 border-b-2 border-blue-500">
                <T>Utvalt inlägg</T>
              </h2>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover="hover"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="h-64 md:h-full w-full relative">
                      <Image 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        fill
                        priority
                        style={{objectFit: "cover"}}
                        className="transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {featuredPost.categories.map((category, idx) => (
                        <span 
                          key={idx} 
                          className={`${getCategoryColor(category)} px-2 py-1 rounded text-xs font-semibold`}
                        >
                          {getCategoryName(category)}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{formatDate(featuredPost.publishDate)}</span>
                      <Link 
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        <T>Läs mer</T>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Category filter */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 inline-block pb-2 border-b-2 border-blue-500">
              <T>Alla inlägg</T>
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCurrentCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    currentCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Blog posts grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      priority={getPriority(index)}
                      style={{objectFit: "cover"}}
                      className="transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZWFlYWVhIi8+PC9zdmc+"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category, idx) => (
                        <span 
                          key={idx} 
                          className={`${getCategoryColor(category)} px-2 py-1 rounded text-xs font-semibold`}
                        >
                          {getCategoryName(category)}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{formatDate(post.publishDate)}</span>
                      <span className="inline-flex items-center text-blue-600">
                        <T>Läs mer</T>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600"><T>Inga inlägg hittades</T></p>
              <button
                onClick={() => setCurrentCategory('all')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <T>Visa alla inlägg</T>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog; 