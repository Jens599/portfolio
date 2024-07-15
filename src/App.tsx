import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import BlinkingCursor from "./components/animation/BlinkingCursor";

const App = () => {
  return (
    <div className="mx-8">
      <div className="flex min-h-screen flex-col justify-center gap-20">
        <div className="text-9xl">
          <p>Hi,</p>
          I'm{" "}
          <span className="inline-block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-extrabold text-transparent">
            Jenish Shrestha <BlinkingCursor />
          </span>
        </div>
        <div className="space-y-8">
          <div>
            I'm a BCA student with a solid programming foundation, skilled in
            web development, graphic design, and database management.
          </div>
          <div className="flex items-end gap-6 text-5xl">
            <VscGithub />
            <FaFacebookF className="text-blue-600" />
            <FaInstagram className="text-pink-600" />
            <RiTwitterXFill />
            <FaLinkedin className="text-blue-400" />
            <BiLogoGmail className="text-red-600" />
          </div>
        </div>
      </div>
      <div className="mb-5 h-px rounded-full bg-white"></div>
      <div className="min-h-screen pt-10">
        <p className="text-8xl">Skills</p>
      </div>
    </div>
  );
};

export default App;
