import React, { useEffect, useState } from 'react';
import './index.css';

function StartButton() {

  const outsetStyle = {
    borderLeft: '2px outset rgb(207, 201, 201)',
    borderTop: '2.5px outset rgb(207, 201, 201)',
    borderRight: '1px outset black',
    borderBottom: '1px outset black',
  }
  const insetStyle = {
    backgroundColor: 'rgb(220, 220, 220)',
    borderRight: '2px inset rgb(207, 201, 201)',
    borderBottom: '2.5px inset rgb(207, 201, 201)',
    borderLeft: '1px inset black',
    borderTop: '1px inset black',
  }

  const [style, setStyle] = useState('outsetStyle');

  const handleClick = () => {
    setStyle(prev => {
      if (prev === 'insetStyle') {
        return 'outsetStyle'
      } 
      return 'insetStyle'
    });
  }

  return (
    <button 
      className='start-btn'
      style={style === 'insetStyle' ? insetStyle : outsetStyle}
      onClick={() => handleClick()}  
    >
      Start
    </button>
  )
}

export default StartButton;


