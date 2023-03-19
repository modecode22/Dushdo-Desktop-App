import { Dispatch, SetStateAction } from "react";
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
interface Props {
    max: number;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Counter = ({ count, setCount, max }: Props) => {
  const increment = () => {
    if (count >= max) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 1) {
      setCount(max);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="active:brightness-110 overflow-hidden w-28 h-10 rounded-xl border border-font/10 hover:border-font/50 flex justify-center items-center">
      <button
        type="button"
        className="duration-200 h-10 w-10 flex justify-center items-center transition-all hover:bg-gradient-to-br from-main100 to-main200 text-white font-bold "
        onClick={decrement}
      >
        <AiFillCaretDown />
      </button>
      <div className="  font-bold py-2 px-4 w-16 text-center">{count}</div>
      <button
        type="button"
        className="duration-200 h-10 w-10 flex justify-center items-center transition-all hover:bg-gradient-to-br from-main100 to-main200 text-white font-bold "
        onClick={increment}
      >
        <AiFillCaretUp />
      </button>
    </div>
  );
};

export default Counter;
