import React from "react";
import { BeatLoader } from "react-spinners";
import "./LoadingSpinner.css"; // Create a separate CSS file
import BalanceTwoToneIcon from '@mui/icons-material/BalanceTwoTone';
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="icon">
              <RotatingIcon />
               <BalanceTwoToneIcon className="custom-large-icon" style={{ color: 'blue' }} />
        <div className="loading-text">Loading</div>
      </div>
      <div className="spinner">
        <BeatLoader color="#1976D2" loading={true} size={15} />
      </div>
    </div>
  );
};

const RotatingIcon = () => {
  return (
    <div className="rotating-icon">
      <div className="balance-icon">
        <i className="fas fa-balance-scale"></i>
      </div>
    </div>
  );
};

export default LoadingSpinner;
