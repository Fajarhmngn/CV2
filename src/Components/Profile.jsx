import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pp from "../assets/p.png";
import Project1 from "../assets/p.png";

const Profile = () => {
  // Step 1: Set initial theme state and check localStorage for saved preference
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Step 2: Apply dark mode class to the HTML element based on the state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save to localStorage
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save to localStorage
    }
  }, [isDarkMode]);

  return (
    <div
      id="Home"
      className={`container mx-auto transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`} // Apply background color change based on dark mode
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6">
          {/* Left Section */}
          <div className="text-left" data-aos="fade-right">
            <p className="text-xl font-medium text-gray-900 dark:text-gray-100">Hello</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              My Name is
              <br />
              <span className="text-black dark:text-white">Fajar Hamonangan Rumahorbo</span>
            </h1>
            <p className="text-xl mt-4 font-medium text-gray-900 dark:text-gray-100">
              I’m a<span className="font-bold"> Student From SMK Prakarya Internasional</span>
            </p>
          </div>

          {/* Right Section */}
          <div className="" data-aos="fade-left">
            <div>
              <img
                src={pp}
                alt="Artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="" id="About" data-aos="fade-up">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
          About Me
        </h1>
        <h3 className="text-gray-900 dark:text-gray-100">
          My name is Fajar Hamonangan Rumahorbo, I studied things about coding at SMK Prakarya Internasional. I am quite proficient in using HTML, CSS, JavaScript, and PHP.
        </h3>
      </div>

      <br />

      <div id="Project">
        <div className="Project pt-32 items-center">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2" data-aos="zoom-in">
            Project
          </h1>
          <div className="project-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" border>
            <div className="box p-2 bg-white dark:bg-gray-800 shadow" data-aos="fade-up">
              <img src={Project1} alt="" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">Project Name 1</h3>
              <p className="text-gray-600 dark:text-gray-300">projek 1</p>
            </div>

            <div className="box p-2 bg-white dark:bg-gray-800 shadow" data-aos="fade-up" data-aos-delay="200">
              <img src={Project1} alt="" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">Project Name 2</h3>
              <p className="text-gray-600 dark:text-gray-300">projek 2</p>
            </div>

            <div className="box p-2 bg-white dark:bg-gray-800 shadow" data-aos="fade-up" data-aos-delay="400">
              <img src={Project1} alt="" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900 dark:text-white">Project Name 3</h3>
              <p className="text-gray-600 dark:text-gray-300">projek 3</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div id="Contact" data-aos="fade-up">
        <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
          Contact
        </h1>
        <div className="coloumn py-4 sm:text-center md:text-left">
          <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone: +62 851-7967-3178</h4>
          <h5>
            Email:{" "}
            <a
              href="mailto:fajarrrr317@gmail.com"
              className="text-blue-600 dark:text-blue-400"
            >
              fajarrrr317@gmail.com
            </a>
          </h5>
          <h5>
            Github:{" "}
            <a
              href="https://github.com/Fajarhmngn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400"
            >
              github.com/Fajarhmngn
            </a>
          </h5>
          <h5>
            Instagram:{" "}
            <a
              href="https://instagram.com/__jarrr__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400"
            >
              _Jarrr_
            </a>
          </h5>
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)} // Step 3: Toggle the theme
          className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
