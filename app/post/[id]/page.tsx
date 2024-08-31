import { Container } from '@/components/shared/container'
import { Post } from '@/components/shared/Post'
import { postId } from '@/services/posts';

export default async function PostPage({ params: { id } }: { params: { id: number } }) {
    const post = await postId(id);
    return (
        <Container>
            <Post 
                name={post.name}
                text={post.text}
                imageUrl={post.imageUrl}
            />
        </Container>
    )
}