import { Dispatch, SetStateAction } from "react";

type TCounter = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

const UseState = ({ counter, setCounter }: TCounter) => {
  const asyncIncrement = () => {
    setTimeout(() => {
      setCounter((prvState) => prvState + 1);
    }, 2000);
  };
  return (
    <div>
      <h1 className="text-center mt-20 text-4xl mb-4">Counter Component</h1>

      {/* .................... */}
      <div className="w-4/12 mx-auto bg-red-400 text-center">
        <div className="pt-4 text-2xl">{counter}</div>
        <button
          onClick={() => setCounter((preState) => preState + 1)}
          className="m-3 px-4 py-2 bg-gray-700  text-red-400 rounded-md uppercase hover:bg-gray-600 duration-300 hover:text-red-500"
        >
          increment
        </button>
        <button
          onClick={() => setCounter((preState) => preState - 1)}
          className="m-3 px-4 py-2 bg-gray-700  text-green-400 rounded-md uppercase hover:bg-gray-600 duration-300 hover:text-green-500"
        >
          decrement
        </button>
        <button
          onClick={asyncIncrement}
          className=" px-4 py-2 bg-gray-900  text-white rounded-md uppercase hover:bg-gray-800 duration-300 "
        >
          AsyncIncrement
        </button>
      </div>
    </div>
  );
};

export default UseState;
