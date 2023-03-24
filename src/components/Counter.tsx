import { Dispatch, SetStateAction } from "react";
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
interface Props {
  //max number
  max: number;
  // the default number
  count: number;
  //add or rmv by number
  by?: number;
  //min number
  min?: number;
  // set number function
  setCount: Dispatch<SetStateAction<number>>;
}

const Counter = ({ count, setCount, max , by = 1 , min = 1 }: Props) => {
  
  
  
  const increment = () => {
    if (count >= max) {
      setCount(min);
    } else {
      setCount(count + by);
    }
  };

  const decrement = () => {
    if (count <= min) {
      setCount(max);
    } else {
      setCount(count - by);
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
