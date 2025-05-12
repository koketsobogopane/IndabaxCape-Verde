import React from 'react'

function ButtonPrimary({buttonName, buttonColor, textColor, handlerFunction}) {

    const customStyles = {
        backgroundColor: buttonColor ?  buttonColor : "red", 
        color: textColor,
    }
  return (
    <button onClick={handlerFunction} className='font-montserrat flex flex-row hover: bg-sky-50 justify-content-center items-center gap 12px px-4 py-1 border rounded-lg' style={customStyles} type='button'>
        {buttonName}
    </button>
  )
}

export default ButtonPrimary