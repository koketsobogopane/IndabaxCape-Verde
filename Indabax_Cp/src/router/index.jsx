import React from 'react';
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DevPage from '../pages/DevPage';
import NotFoundPage from '../pages/NotFoundPage';

import BlogsPage from '../pages/BlogsPage';
import RegisterPage from '../pages/RegisterPage';
import FAQPageTemplate from '../components/templates/FAQPageTemplate';
import SingleBlogPostPageTemplate from '../components/templates/SingleBlogPostPageTemplate';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import ScrollToTop from '../components/atoms/ScrollToTop';
import BackToTopButton from '../components/atoms/BackToTopButton';
import EventsTemplate from '../components/templates/EventsTemplate';

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPageTemplate />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dev" element={<EventsTemplate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/blog/:postId" element={<SingleBlogPostPageTemplate />} />
        <Route path="/event/:eventId" element={<EventsTemplate />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default AppRouter;
