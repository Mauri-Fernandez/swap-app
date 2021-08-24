import Loader from "react-loader-spinner"; // npm install react-loader-spinner --save
import React from 'react';
import './Spinner.css'

const Spinner = () => {
    
    return (
        <div className="spinner">
            <Loader
              type="Oval"
              color="#000"
              height={50}
              width={50}
              timeout={2000} //3 secs
            />
        </div>
    )
}

export default Spinner;