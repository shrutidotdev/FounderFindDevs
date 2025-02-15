"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "The Future of Remote Work",
    excerpt: "Exploring the trends and challenges of distributed teams in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093",
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
  {
    title: "Building Inclusive Tech Teams",
    excerpt: "Strategies for creating diverse and inclusive workplace environments.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "Mar 12, 2024",
    readTime: "4 min read",
  },
  {
    title: "AI in Recruitment",
    excerpt: "How artificial intelligence is transforming the hiring process.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    date: "Mar 10, 2024",
    readTime: "6 min read",
  },
]

export default function Blog() {
  return (
    <div className="relative min-h-screen w-full pt-24 ">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" /> */}

     

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Latest Insights</h1>
          <p className="text-xl text-white/70">
            Discover the latest trends and insights in the world of tech and recruitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-white/60 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-white/70 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-white hover:text-white/80 transition-colors"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

     
    </div>
  )
}