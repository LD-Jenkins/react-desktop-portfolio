import React, { useEffect, useState } from 'react';
import './index.css';

function TaskbarItem({ title, id, left, width, fontWeight, minimizeWindow, hidden }) {

  const outsetStyle = {
    left: left,
    width: width,
    fontWeight: fontWeight,
    borderLeft: '2px outset rgb(207, 201, 201)',
    borderTop: '2.5px outset rgb(207, 201, 201)',
    borderRight: '1px outset black',
    borderBottom: '1px outset black',
  }
  const insetStyle = {
    left: left,
    width: width,
    fontWeight: fontWeight,
    backgroundColor: 'rgb(220, 220, 220)',
    borderRight: '2px inset rgb(207, 201, 201)',
    borderBottom: '2.5px inset rgb(207, 201, 201)',
    borderLeft: '1px inset black',
    borderTop: '1px inset black',
  }

  const [style, setStyle] = useState('insetStyle');

  useEffect(() => {
    if (hidden) {
      setStyle('outsetStyle')
    } else {
      setStyle('insetStyle')
    }
  }, [hidden])

  return (
    <button 
      className='taskbar-item'
      style={style === 'insetStyle' ? insetStyle : outsetStyle}
      onClick={() => minimizeWindow(id)}  
    >
      {title}
    </button>
  )
}

export default TaskbarItem;