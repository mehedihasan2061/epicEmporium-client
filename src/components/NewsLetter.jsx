import { MdOutlineEmail } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";

const NewsLetter = () => {
  const [text] = useTypewriter({
    words: [" NewsLetter"],
    loop: 0,
  });
  return (
    <div className="my-10 bg-lime-50 rounded-xl w-[90%] mx-auto">
      <div className=" w-[100%] mx-auto my-2">
        <span className="text-center text-5xl text-orange-600 flex justify-center">
          {" "}
          <MdOutlineEmail></MdOutlineEmail>
        </span>
      </div>
      <p className="text-center text-4xl font-bold">
        Send A <span className="text-orange-600">{text}</span>
      </p>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered border-r-0  rounded-r-none input-success w-full max-w-xs"
        />
        <button className="btn btn-outline my-6 rounded-l-none  btn-success">
          Success
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
