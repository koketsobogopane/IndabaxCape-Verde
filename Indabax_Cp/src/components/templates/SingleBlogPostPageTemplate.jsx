import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  PersonCircle,
  CalendarEvent,
  Tag,
} from 'react-bootstrap-icons';
import ButtonPrimary from '../atoms/ButtonPrimary'; // Reusable button

const SingleBlogPostPageTemplate = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for blog posts (in a real app, this would be an API call)
  const allBlogPosts = [
    {
      id: 'ai-ethics-africa',
      imageUrl:
        'https://via.placeholder.com/1200x600/94a3b8/ffffff?text=AI+Ethics+in+Africa',
      title: 'Navigating Ethical AI in Africa: A Local Perspective',
      author: 'Dr. Sofia Mendes',
      date: 'May 15, 2025',
      category: 'AI Ethics',
      content: `
                <p class="mb-6">The rapid advancement of Artificial Intelligence (AI) presents both unprecedented opportunities and complex ethical dilemmas globally. In Africa, these discussions take on a unique dimension, deeply intertwined with socio-economic realities, diverse cultural values, and historical contexts. As IndabaX Cabo Verde, we believe it's crucial to foster conversations around ethical AI that are locally relevant and forward-looking.</p>

                <h3 class="text-2xl font-semibold text-gray-900 mb-4">The African Context for AI Ethics</h3>
                <p class="mb-6">Unlike many Western perspectives that might focus heavily on individual privacy or algorithmic bias in homogenous populations, Africa faces distinct challenges. These include data scarcity, infrastructure disparities, the risk of exacerbating existing inequalities, and the potential for AI to be misused in governance without sufficient oversight. Ethical AI development in Africa must consider:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li><strong>Data Sovereignty and Privacy:</strong> Ensuring that data collected on African citizens remains within local control and is protected according to international standards, while also acknowledging varying cultural norms around privacy.</li>
                    <li><strong>Bias and Fairness:</strong> Developing AI models that are trained on diverse datasets representative of Africa's myriad languages, cultures, and demographics to avoid algorithmic bias that could disproportionately affect marginalized groups.</li>
                    <li><strong>Accessibility and Inclusivity:</strong> Designing AI solutions that are accessible across different literacy levels, technological access points, and for people with disabilities.</li>
                    <li><strong>Accountability and Governance:</strong> Establishing robust legal and ethical frameworks for AI development and deployment, ensuring accountability for AI's impact and preventing its use for harmful purposes.</li>
                    <li><strong>Environmental Impact:</strong> Considering the energy consumption of large AI models and promoting sustainable AI practices.</li>
                </ul>

                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Building Local Capacity for Ethical AI</h3>
                <p class="mb-6">A critical aspect of navigating these ethical landscapes is empowering local expertise. IndabaX Cabo Verde is committed to:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li>Educating the next generation of AI developers and researchers on ethical principles and responsible AI practices.</li>
                    <li>Facilitating interdisciplinary dialogues involving technologists, policymakers, ethicists, and civil society leaders.</li>
                    <li>Promoting research that directly addresses ethical considerations within African AI applications.</li>
                </ul>

                <p class="mb-6">By grounding our discussions in the realities of Cabo Verde and the wider African continent, we can contribute to a future where AI serves as a powerful tool for equitable and sustainable development. We invite you to join the conversation and contribute to shaping a responsible AI ecosystem in Africa.</p>
                <p class="mb-6"><em>For more insights, join our next IndabaX session or explore our research papers.</em></p>
            `,
    },
    {
      id: 'african-nlp',
      imageUrl:
        'https://via.placeholder.com/1200x600/a78bfa/ffffff?text=African+Language+NLP',
      title: 'Advancements in African Language NLP Research',
      author: 'Prof. Pedro Oliveira',
      date: 'May 10, 2025',
      category: 'Research',
      content: `
                <p class="mb-6">Natural Language Processing (NLP) has made remarkable strides globally, yet many of these advancements have historically focused on high-resource languages like English. Africa, a continent rich in linguistic diversity with over 2000 languages, presents both a significant challenge and a massive opportunity for NLP research.</p>

                <h3 class="text-2xl font-semibold text-gray-900 mb-4">The Need for Localized NLP</h3>
                <p class="mb-6">Effective communication and access to information are fundamental for development. For AI to truly benefit African communities, it must understand and interact with the languages spoken by its people. This goes beyond simple translation and delves into complex tasks like sentiment analysis, information extraction, and speech recognition tailored for local dialects and linguistic nuances.</p>

                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Recent Breakthroughs and Initiatives</h3>
                <p class="mb-6">The past few years have seen a surge in initiatives aimed at bridging the NLP gap for African languages. Projects like Masakhane, a grassroots organization of African researchers, have been instrumental in creating open-source datasets and models for numerous African languages. This collaborative effort is vital because:</p>
                <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li><strong>Data Scarcity:</strong> Many African languages lack the vast digitized text corpora available for high-resource languages. Community efforts are key to building these foundational datasets.</li>
                    <li><strong>Unique Linguistic Structures:</strong> African languages often have agglutinative or tonal characteristics that require specialized NLP approaches beyond standard models.</li>
                    <li><strong>Local Expertise:</strong> Researchers who are native speakers or deeply familiar with these languages are best positioned to develop accurate and culturally appropriate NLP tools.</li>
                </ul>
                <p class="mb-6">IndabaX Cabo Verde actively supports and showcases research in this area, recognizing its potential to unlock new applications in education, healthcare, and governance across the continent.</p>
            `,
    },
    {
      id: 'student-journey',
      imageUrl:
        'https://via.placeholder.com/1200x600/fb923c/ffffff?text=Student+Success+Story',
      title: 'Student Spotlight: My IndabaX Journey to Machine Learning',
      author: 'João Silva',
      date: 'May 01, 2025',
      category: 'Community',
      content: `
                <p class="mb-6">As a computer science student at the University of Cabo Verde, I always had a fascination with technology, but machine learning felt like a distant, complex field. That changed when I attended my first Deep Learning IndabaX Cabo Verde. It wasn't just an event; it was a turning point.</p>

                <h3 class="text-2xl font-semibold text-gray-900 mb-4">From Curiosity to Clarity</h3>
                <p class="mb-6">The tutorials were incredibly well-structured, starting from the basics of neural networks and building up to more advanced concepts. The instructors, many of whom were leading researchers, explained complex ideas with such clarity. But what truly stood out was the hands-on nature of the workshops. Working through code examples with direct feedback from mentors was invaluable.</p>

                <h3 class="text-2xl font-semibold text-gray-900 mb-4">The Power of Community</h3>
                <p class="mb-6">Beyond the technical knowledge, IndabaX connected me with a vibrant community. I met fellow students facing similar challenges, established researchers willing to share their insights, and even potential collaborators for future projects. The informal discussions during breaks were as enriching as the formal sessions. It felt like being part of something much larger than myself—a collective effort to build AI capacity in Africa.</p>

                <p class="mb-6">Thanks to IndabaX Cabo Verde, I now have a clearer path for my career in machine learning. I'm actively working on a project using AI for sustainable fisheries in Cabo Verde, inspired by a talk I attended at the event. I encourage any aspiring AI enthusiast to experience the magic of IndabaX. It's more than just learning; it's about belonging and building the future.</p>
            `,
    },
    // Add more posts if you have them, mirroring the structure
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Simulate fetching data (replace with actual API call in production)
    const foundPost = allBlogPosts.find((p) => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
    } else {
      setError('Blog post not found.');
    }
    setLoading(false);
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Loading blog post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-8">{error}</p>
        <Link to="/blog">
          <ButtonPrimary>Back to Blog</ButtonPrimary>
        </Link>
      </div>
    );
  }

  if (!post) {
    return null; // Should not happen if error handling is correct
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header Section with Image */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
          <Link
            to="/blog"
            className="inline-flex items-center text-white text-opacity-80 hover:text-white mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" /> Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-lg text-gray-200">
            <PersonCircle className="mr-2" />{' '}
            <span className="mr-4">{post.author}</span>
            <CalendarEvent className="mr-2" /> <span>{post.date}</span>
            {post.category && (
              <>
                <Tag className="ml-4 mr-2" /> <span>{post.category}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Blog Post Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-gray-800" // Tailwind Typography plugin for markdown styling
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Optional: Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-center">
            <span className="text-lg font-semibold text-gray-700 mr-4">
              Share this post:
            </span>
            {/* Replace with actual share links/buttons */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 text-3xl transition-colors"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-3xl transition-colors"
            >
              <i className="fab fa-twitter-square" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-3xl transition-colors"
            >
              <i className="fab fa-facebook-square" />
            </a>
            {/* Add more social icons as needed */}
          </div>

          {/* Optional: Navigation to other posts or back to blog */}
          <div className="mt-16 text-center">
            <Link to="/blog">
              <ButtonPrimary>Back to All Blog Posts</ButtonPrimary>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogPostPageTemplate;
