import { InfinitySpin } from "react-loader-spinner";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <InfinitySpin width="150" color="#18d26b" ariaLabel="infinity-spin-loading"/>
    </div>
  );
};
