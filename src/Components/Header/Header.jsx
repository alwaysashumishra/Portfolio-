import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-header-box">
      <div
        style={{
          width: "100%",
          height: "670px",
          position: "relative",
          background: "rgb(10,10,10)",
        }}
      >
        <div className="h-600px flex flex-col justify-center items-center text-white text-center px-6 absolute center-header">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight relative z-10">
            I help founders turn ideas <br />
            into seamless{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
              digital experiences
            </span>
          </h1>

          <div className="flex items-center gap-3 mt-8 relative z-10">
            <p className="text-lg text-gray-300">Hello, I'm</p>
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFg5enjW6mtHA/profile-displayphoto-scale_400_400/B56Zl8wi9QJ4Ag-/0/1758734725503?e=1766620800&v=beta&t=44K80PzWhrZDUyGjLFgwEIHwJf5Hq2aX-87RkNBq2SU"
              alt="Ashutosh"
              className="w-10 h-10 rounded-full border border-purple-500"
            />
            <p className="text-lg text-gray-300">
              <span className="font-semibold text-white">
                Ashutosh Mishra
              </span>
              , a Front-end Developer
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 mt-10 relative z-10">
            <button className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-indigo-300 hover:from-purple-700 hover:to-indigo-700 text-gray-100 px-6 py-3 rounded-full font-medium shadow-lg transition">
              Let’s Connect <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="mailto:ashutoshmmishra15@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
              ashutoshmmishra15@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
