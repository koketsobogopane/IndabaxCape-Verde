import React from 'react';
import HeroSection from '../molecules/HeroSection';
import SecondaryCard from '../molecules/SecondaryCard'; // Your blog post card component
import { CalendarEvent } from 'react-bootstrap-icons'; // For date icon if needed

// Placeholder image for Blog hero
import BlogHeroImage from '../../assets/Images/heroImage1.jpg'; // Path to a relevant background image for the blog page
import Navbar from '../molecules/Navbar';
import FooterSection from '../Organisms/FooterSection';
import { blogPosts } from '../../data/data';
import { getImageURL } from '../../utils/image-utils';

const BlogPage = () => {
  // Dummy blog post data for demonstration

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section for Blog Page */}
      <Navbar />
      <HeroSection
        image={BlogHeroImage} // Use a relevant background image
        title="Our Latest Insights & News"
        descriptiveText="Stay updated with the latest in AI research, community highlights, and IndabaX Cabo Verde announcements."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {blogPosts.map((post) => (
              <SecondaryCard
                key={post.id} // Using unique ID for key
                imageUrl={getImageURL(post.imageUrl, 'blogImages')}
                title={post.title}
                excerpt={post.excerpt} // Pass excerpt
                date={post.date} // Pass date
                link={post.link} // Pass link to full post
                // You might want to pass category as well for styling or filtering
                category={post.category}
              />
            ))}
          </div>

          {/* <div className="mt-16 text-center">
                        <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                            <a href="#" aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-purple-50 text-sm font-medium text-purple-600 hover:bg-purple-100">1</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                        </nav>
                    </div>  */}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default BlogPage;
