import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";
import { IoIosArrowRoundForward } from "react-icons/io";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="relative w-full h-screen mx-auto">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={2000}
        className="w-full h-full"
        animation="cubeAnimation"
      >
        <div className="w-full h-screen relative">
          <img
            className="absolute w-full h-full object-cover blur-0 brightness-50"
            src="https://i.ibb.co/74FZDgJ/frankie-cordoba-Dva-OIjkr-QTI-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-screen relative">
          <img
            className="absolute w-full h-full object-cover blur-0 brightness-50"
            src="https://i.ibb.co/Lgb5KRt/laura-adai-ZPOl-FNo-U32-Q-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-screen relative">
          <img
            className="absolute w-full h-full object-cover brightness-50"
            src="https://i.ibb.co/n1dWt2J/kelly-sikkema-o2-TRWThve-I-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-screen relative">
          <img
            className="absolute w-full h-full object-cover blur-0 brightness-50"
            src="https://i.ibb.co/Yp3YQj1/debby-hudson-Mz-Sq-FPLo8-CE-unsplash.jpg"
            alt=""
          />
        </div>
      </AutoplaySlider>
      <div className="absolute top-1/2 transform -translate-y-1/2 z-10 left-4 md:left-32 lg:left-36 w-full md:w-3/4 container md:px-0">
        <div className="text-white leading-tight text-3xl md:text-5xl font-bold h-28 md:h-44">
          <Typewriter
            options={{
              strings: [
                "Unlock the Magic of Creativity: Share and Buy Art That Inspires!",
                "Capturing Creativity, Inspiring Imagination.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 70,
            }}
          />
        </div>
        <p className=" text-lg md:text-xl text-gray-200 w-full md:w-4/5 my-6">
          Each artwork you own becomes a source of inspiration, a reminder of
          the limitless potential within each of us. So, explore the diverse
          world of art, discover pieces that resonate with you, and let your
          surroundings reflect the creativity and inspiration that art brings.
        </p>
        <Link to="/allArts">
          <button className="text-gray-100 heartbeat flex items-center justify-center text-xl">
            Explore <IoIosArrowRoundForward className="text-3xl mt-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlider;
