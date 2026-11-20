import { PostData, PostProps } from '../../interfaces';
import PostCard from '../../components/common/PostCard';
import PostModal from '../../components/common/PostModal';
import { useState } from 'react';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    const nextId = Math.max(0, ...allPosts.map((p) => p.id)) + 1;
    setAllPosts([{ ...newPost, userId: Number(newPost.userId), id: nextId }, ...allPosts]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Post Content</h1>
        <button onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
      </div>
      {allPosts.length === 0 && <p className="mt-6 text-gray-600">No posts to show right now. Please try again later.</p>}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map(({ title, body, userId, id }) => (
          <PostCard title={title} body={body} userId={userId} id={id} key={id} />
        ))}
      </div>
      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  let posts: PostProps[] = [];
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) posts = await response.json();
  } catch (error) {
    console.error('Could not fetch posts:', error);
  }

  // Rebuild the page at most once an hour, so it recovers if the API was down
  return { props: { posts }, revalidate: 3600 };
}

export default Posts;
