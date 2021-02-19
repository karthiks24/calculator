import React from "react";

const Display = ({ input, result }) => {
  return (
    <div className='display'>
      <div className='result'>{result}</div>
      <div className='input'>{input}</div>
    </div>
  );
};

export default Display;
