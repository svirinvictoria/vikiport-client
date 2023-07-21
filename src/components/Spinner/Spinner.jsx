import { SpinnerDiamond } from "spinners-react";

const Spinner = () => {
  return (
    <div className="spinnerBox">
        <SpinnerDiamond
            size={50}
            thickness={98}
            speed={100}
            color="rgba(57, 125, 172, 0.98)"
            secondaryColor="rgba(57, 132, 172, 0.22)"
        />
    </div>
  );
};
export default Spinner;
