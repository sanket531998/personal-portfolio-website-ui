import sanketMain from "../../assets/sanketMain.JPG";
import "../../App.css";

export default function LandingPage() {
  return (
    <div className="md:flex md:flex-row md:items-center flex flex-col items-center flex-grow rise-animation md:mb-24">
      <img
        src={sanketMain}
        alt="Sanket"
        className="rounded-3xl shadow-lg w-72 border-4 border-white md:mr-12"
      ></img>
      <div className="md:mt-16 mt-4">
        <div
          className="md:text-7xl text-3xl text-gray-300 font-extrabold"
          style={{}}
        >
          Sanket N.
        </div>
        <div className="md:text-7xl text-3xl font-extrabold my-4 ">
          Full Stack Developer.
        </div>
      </div>
    </div>
  );
}
