import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../pages/Users';
import Posts from '../pages/Posts';
import Main from '../pages/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="users" element={<Users></Users>}></Route>
      <Route path="posts" element={<Posts></Posts>}></Route>
      <Route path="*" element={<Main></Main>}></Route>
    </Routes>
  );
};

export default AppRoutes;
