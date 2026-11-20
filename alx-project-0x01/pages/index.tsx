import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-136px)] items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Welcome to our Application!</h1>
        <p className="mt-4 text-xl text-white">
          We&apos;re glad you&apos;re here. Explore and enjoy your experience.
        </p>
        <Link
          href="/posts"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
