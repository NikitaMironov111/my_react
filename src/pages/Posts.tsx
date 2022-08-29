import React, { useState } from 'react';
import Search from '../components/Search';
import http from '../http';

const Posts = () => {
  const [search, setSearch] = useState('');
  //   const [posts, setPosts] = useState<IUser[]>([]);

  //   const getPosts = async () => {
  //     try {
  //       const users = await http.get('posts');
  //       setUsers(users.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  return (
    <div>
      <Search setSearch={setSearch} />
    </div>
  );
};

export default Posts;
