import { Container } from "@/components/shared/container";
import { PostCard } from "@/components/shared/post-card";
import { SkeletonCard } from "@/components/shared/skeleton";
import { posts } from "@/services/posts";
import { useState } from "react";

export default async function Home() {

  const allPosts = await posts();
  return (
   <Container>
      {allPosts?(allPosts.map((post: { id: number; name: string; text: string; imageUrl: string; })=>
      <PostCard 
        key={post.id}
        id={post.id} 
        name={post.name}
        text={post.text}
        imageUrl={post.imageUrl}
        />
      )): <SkeletonCard/>}
   </Container>
    
  );
}
