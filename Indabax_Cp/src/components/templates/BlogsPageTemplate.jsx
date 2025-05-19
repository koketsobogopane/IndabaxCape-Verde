import React from 'react'
import Navbar from '../molecules/Navbar'
import HeroSection from '../molecules/HeroSection'
import heroImage from '../../assets/Images/heroImage2.jpg'
import BlogSection from '../Organisms/BlogSection'
import ButtonPrimary from '../atoms/ButtonPrimary'
import FooterSection from '../Organisms/FooterSection'


function BlogsPage() {

  const dummyBlogs = {
  "blogs": [
    {
      "id": 1,
      "title": "The Future of AI in Africa",
      "author": "Dr. Aisha Keita",
      "date": "2024-07-28",
      "content": "Explore the transformative potential of Artificial Intelligence across the African continent and its impact on various sectors.",
      "imageUrl": "https://placehold.co/600x400/EEE/31343C",
      "categories": ["Technology", "AI", "Africa"]
    },
    {
      "id": 2,
      "title": "Deep Learning Indaba: A Community Perspective",
      "author": "David Makinde",
      "date": "2024-07-25",
      "content": "A look at the Deep Learning Indaba from the perspective of a long-time community member, highlighting its impact and growth.",
      "imageUrl": "https://placehold.co/600x400/EEE/31343C",
      "categories": ["Community", "AI", "Education"]
    },
    {
      "id": 3,
      "title": "How IndabaX is Shaping Local AI Development",
      "author": "Fatima Hassan",
      "date": "2024-07-22",
      "content": "An in-depth analysis of how the IndabaX program is fostering AI development and innovation at the local level across African nations.",
      "imageUrl": "https://placehold.co/600x400/EEE/31343C",
      "categories": ["IndabaX", "AI", "Local Development"]
    },
    {
      "id": 4,
      "title": "The Role of AI in Solving African Challenges",
      "author": "Jean-Pierre Ndiaye",
      "date": "2024-07-18",
      "content": "Examining the crucial role that Artificial Intelligence can play in addressing some of the unique challenges faced by African communities.",
      "imageUrl": "https://placehold.co/600x400/EEE/31343C",
       "categories": ["AI", "Social Impact", "Challenges"]
    },
    {
      "id": 5,
      "title": "Women in AI: Stories from the Indaba Community",
      "author": "Dr. Ngozi Chukwuemeka",
      "date": "2024-07-15",
      "content": "Celebrating the achievements and contributions of women who are making significant strides in the field of Artificial Intelligence within the Indaba community.",
      "imageUrl": "https://placehold.co/600x400/EEE/31343C",
      "categories": ["Women in AI", "Community", "Diversity"]
    },
    {
      "id": 6,
      "title": "Getting Started with Machine Learning: A Practical Guide",
      "author": "Kofi Mensah",
      "date": "2024-07-11",
      "content": "A beginner-friendly guide to help you take your first steps in the world of Machine Learning, with practical tips and resources.",
      "imageUrl": "https://placehold.co/600x400/EEE/31343C",
      "categories": ["Machine Learning", "Education", "Beginner"]
    }
  ]
}
  return (
    <>
    <Navbar/>
    <HeroSection 
        image= {heroImage}
        title= {'Blogs'}
        descriptiveText={"Some interesting talks on the hottest topics about AI in Africa coming straight from our own local community in Cape Verde"}
        
    />
    <BlogSection
        cards={dummyBlogs.blogs}
    />
    <ButtonPrimary className="mb-20" href={'#'}>
      Register to write
    </ButtonPrimary>
    <FooterSection/>
    </>
  )
}

export default BlogsPage