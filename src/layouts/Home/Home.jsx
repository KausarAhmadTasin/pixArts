import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Typewriter from "typewriter-effect";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="relative mx-auto">
      <AwesomeSlider
        className="absolute top-0 right-0"
        animation="cubeAnimation"
      >
        <div>
          <img
            className="max-h-fit blur-0 brightness-50"
            src="https://i.ibb.co/74FZDgJ/frankie-cordoba-Dva-OIjkr-QTI-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-h-fit blur-0 brightness-50"
            src="https://i.ibb.co/Lgb5KRt/laura-adai-ZPOl-FNo-U32-Q-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-h-fit brightness-50"
            src="https://i.ibb.co/n1dWt2J/kelly-sikkema-o2-TRWThve-I-unsplash.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="max-h-fit blur-0 brightness-50"
            src="https://i.ibb.co/Yp3YQj1/debby-hudson-Mz-Sq-FPLo8-CE-unsplash.jpg"
            alt=""
          />
        </div>
      </AwesomeSlider>
      <div className="absolute top-40 z-10 left-36 w-3/4 container">
        <div className="text-white leading-tight w-2/3 text-5xl font-bold h-44">
          <Typewriter
            options={{
              strings: [
                "Unlock the Magic of Creativity: Share and Buy Art That Inspires!",
              ],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: 70,
            }}
          />
        </div>
        <p className="text-xl text-gray-200 w-4/5 my-6">
          Each artwork you own becomes a source of inspiration, a reminder of
          the limitless potential within each of us. So, explore the diverse
          world of art, discover pieces that resonate with you, and let your
          surroundings reflect the creativity and inspiration that art brings.
        </p>

        <button className="text-gray-100 heartbeat hover:-translate-y-1 duration-500 flex items-center justify-center text-xl">
          Explore <IoIosArrowRoundForward className="text-3xl mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Home;
