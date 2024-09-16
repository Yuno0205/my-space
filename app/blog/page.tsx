"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const TechBlogPage = () => {
  const [posts, setPosts] = useState<any>([]);
  const [visiblePosts, setVisiblePosts] = useState<number>(6);

  useEffect(() => {
    // Simulating fetching blog posts from an API
    const fetchPosts = async () => {
      // In a real application, this would be an API call
      const dummyPosts = [
        {
          id: 1,
          title: "The Future of Artificial Intelligence",
          author: "John Doe",
          date: "2023-05-15",
          excerpt:
            "Exploring the potential impact of AI on various industries...",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 2,
          title: "5G Technology: Revolutionizing Connectivity",
          author: "Jane Smith",
          date: "2023-05-10",
          excerpt: "Understanding the impact of 5G on our daily lives...",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 3,
          title: "Cybersecurity in the Digital Age",
          author: "Mike Johnson",
          date: "2023-05-05",
          excerpt:
            "Protecting your digital assets in an increasingly connected world...",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 4,
          title: "The Rise of Quantum Computing",
          author: "Emily Brown",
          date: "2023-04-30",
          excerpt:
            "Exploring the potential of quantum computers to solve complex problems...",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          id: 5,
          title: "Blockchain: Beyond Cryptocurrency",
          author: "Alex Lee",
          date: "2023-04-25",
          excerpt:
            "Discovering the diverse applications of blockchain technology...",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        },
        {
          id: 6,
          title: "The Internet of Things (IoT) Revolution",
          author: "Sarah Wilson",
          date: "2023-04-20",
          excerpt:
            "How IoT is transforming our homes, cities, and industries...",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          image:
            "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        },
      ];
      setPosts(dummyPosts);
    };

    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            TechInsight Blog
          </h1>
          <nav className="flex justify-between items-center">
            <ul className="flex space-x-6">
              <li>
                <button className="text-gray-600 hover:text-gray-800 flex items-center">
                  Categories <FaChevronDown className="ml-1" />
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <section className="w-full md:w-2/3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, visiblePosts).map((post: any) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  By {post.author} | {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Read more
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 md:ml-8 mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {posts.slice(0, 5).map((post: any) => (
                <li key={post.id}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">AI</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                Machine Learning
              </span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">5G</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                Cybersecurity
              </span>
              <span className="bg-gray-200 px-2 py-1 rounded text-sm">IoT</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </aside>
      </main>

      {/* Load More Button */}
      {visiblePosts < posts.length && (
        <div className="text-center pb-8">
          <button
            onClick={loadMorePosts}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Load More
          </button>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">About TechInsight</h4>
              <p className="text-gray-400">
                Stay updated with the latest trends and innovations in
                technology.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 TechInsight Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechBlogPage;
