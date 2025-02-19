const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-orange-400 text-white py-16 px-6 rounded-lg text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Sign up and get to know our updates
        </h2>
        <p className="mb-6 text-lg">
          Get insider access to our education management system by subscribing
          to our newsletter. Stay informed about new features, services, and
          initiatives.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:w-80 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold">
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-sm">
          We care about your data in our{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
