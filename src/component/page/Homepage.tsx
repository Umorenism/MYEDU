import { useState } from "react";
import pic from "../../asset/mypic.png";
import { motion } from "framer-motion";

const Homepage = () => {
  const [load, setLoad] = useState(false);

  const handleLoad = () => {
    setLoad(true);
  };
  return (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-950 z-10 p-4">
        <h1 className="text-white text-xl font-bold text-end">skip</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 pb-16 flex flex-col items-center justify-center text-center">
        {/* Animated Image */}
        <motion.img
          src={pic}
          alt="Profile"
          className="h-[300px] w-[300px] object-cover mb-4"
          initial={{ opacity: 0, scale: 0.8 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animate to these values
          transition={{ duration: 0.5 }} // Animation duration
        />

        <h1 className="mt-4 font-bold text-white text-lg m-2">
          Choose the right online courses for your growth
        </h1>
        <p className="text-sm mx-4 text-orange-400">
          Let's explore the power of the internet to build an amazing world
          experience with our tech skills.
        </p>

        {/* Animated Next Button */}
        <motion.button
          onClick={handleLoad}
          className="mt-6 w-[80%] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          initial={{ y: 20, opacity: 0 }} // Initial state
          animate={{ y: 0, opacity: 1 }} // Animate to these values
          transition={{ duration: 0.5 }} // Animation duration
          whileHover={{ scale: 1.05 }} // Scale effect on hover
        >
          {load ? "loading" : " Next"}
        </motion.button>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-10 p-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            © 2024 My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
