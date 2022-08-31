import React, { useEffect, useState } from 'react';
import { initialPost } from '../components/Posts/initialPost';
import { IPost } from '../components/Posts/IPost';
import PostCards from '../components/Posts/PostCards';
import { useSearch } from '../hooks/useSearch';
import axios from 'axios';
import Search from '../components/Search';
const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState('');

  const deletePost = async (id: number) => {
    const isDelete = window.confirm('Do you really want to delete post?');
    if (isDelete) {
      const deletedPost = await axios.delete(
        `https://my-json-server.typicode.com/NikitaMironov111/Data/posts/${id}`
      );
      if (deletedPost.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    }
  };

  const getPost = async () => {
    try {
      const posts = await axios.get(
        'https://my-json-server.typicode.com/NikitaMironov111/Data/posts'
      );
      setPosts(posts.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  const searchedPosts = useSearch(posts, 'title', search);
  return (
    <>
      <Search setSearch={setSearch}></Search>
      <PostCards posts={searchedPosts} deletePost={deletePost}></PostCards>
    </>
  );
};

export default Posts;
