"use client";

import { Container } from "@/components/shared/container";
import { PostCard } from "@/components/shared/post-card";
import { SkeletonCard } from "@/components/shared/skeleton";
import { posts } from "@/services/posts";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  name: string;
  text: string;
  imageUrl: string;
}

export default function Home() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      if (loading || !hasMore) return;
      setLoading(true);
      try {
        const newPosts = await posts(page, 5);
        if (newPosts.length < 5) {
          setHasMore(false); 
        }
        setAllPosts(prev => [...prev, ...newPosts]);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);


  return (
   <Container>
      {allPosts.map((post: { id: number; name: string; text: string; imageUrl: string; })=>
      <PostCard 
        key={post.id}
        id={post.id} 
        name={post.name}
        text={post.text}
        imageUrl={post.imageUrl}
        />
      ) }
      {loading && <SkeletonCard />}
   </Container>
    
  );
}
