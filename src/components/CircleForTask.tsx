import { CircularProgressbar } from 'react-circular-progressbar';



interface Props {
  value: number;
}

const CircleForTask = ({value} : Props) => {

  return (
    <>
      <CircularProgressbar
        className={` fill-white font-bold ${
          value === 100 ? "stroke-main100" : "stroke-main100/50"
        }  `}
        value={value}
        strokeWidth={15}
      />
    </>
  );
}

export default CircleForTask


