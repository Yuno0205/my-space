import Image from "next/image";

export default function BlogPost() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The Future of Web Development: Trends to Watch in 2024
        </h1>
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <span>Jane Doe</span>
          </div>
          <div className="flex items-center">
            {/* <CalendarIcon className="w-4 h-4 mr-1" /> */}
            <time dateTime="2023-12-01">December 1, 2023</time>
          </div>
          <div className="flex items-center">
            {/* <ClockIcon className="w-4 h-4 mr-1" /> */}
            <span>5 min read</span>
          </div>
        </div>
      </header>
      <div className="prose prose-lg prose-indigo mx-auto">
        <p>
          As we approach 2024, the landscape of web development continues to
          evolve at a rapid pace. New technologies, frameworks, and
          methodologies are emerging, reshaping how we build and interact with
          the web. In this post, we'll explore some of the most exciting trends
          that are set to dominate the world of web development in the coming
          year.
        </p>
        <h2>1. The Rise of AI-Assisted Development</h2>
        <p>
          Artificial Intelligence is no longer just a buzzword in web
          development. It's becoming an integral part of the development
          process. From AI-powered code completion to automated testing and
          debugging, developers are leveraging AI tools to increase productivity
          and reduce errors.
        </p>
        <h2>2. Web Assembly (Wasm) Goes Mainstream</h2>
        <p>
          Web Assembly is gaining traction as a powerful tool for bringing
          high-performance applications to the web. As more languages add
          support for Wasm, we can expect to see more complex, desktop-quality
          applications running directly in the browser.
        </p>
        <h2>3. The Continued Evolution of Jamstack</h2>
        <p>
          The Jamstack architecture continues to grow in popularity, offering
          improved performance, better security, and easier scaling. In 2024,
          we'll likely see more tools and services designed specifically for
          Jamstack development, making it even easier to build and deploy fast,
          modern websites.
        </p>
      </div>
    </article>
  );
}
