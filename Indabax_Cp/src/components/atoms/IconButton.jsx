import React from 'react';

function IconButton({ buttonIcon, buttonColor, textColor, handlerFunction }) {
  const customStyles = {
    backgroundColor: buttonColor ? buttonColor : 'red',
    color: textColor,
  };
  return (
    <button
      onClick={handlerFunction}
      className="hover:bg-sky-50 font-montserrat flex flex-row  justify-content-center items-center gap 12px px-2 py-1 rounded-lg text-white"
      style={customStyles}
      type="button"
    >
      {buttonIcon}
    </button>
  );
}

export default IconButton;
