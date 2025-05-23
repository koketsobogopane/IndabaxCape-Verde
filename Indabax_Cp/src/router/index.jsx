import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
// import DevPage from '../pages/DevPage';

import BlogsPage from '../pages/BlogsPage';
import RegisterPage from '../pages/RegisterPage';
import FAQPageTemplate from '../components/templates/FAQPageTemplate';
import SingleBlogPostPageTemplate from '../components/templates/SingleBlogPostPageTemplate';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPageTemplate />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/dev" element={<DevPage />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/blog/:postId" element={<SingleBlogPostPageTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;