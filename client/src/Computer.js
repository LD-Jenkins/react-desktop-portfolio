import React, { useEffect, useState, cloneElement } from 'react';
import './Computer.css';
import Desktop from '../src/components/Desktop'
import TaskBar from '../src/components/TaskBar';
import Window from '../src/components/Window';

let windowCount = 0;

function Computer() {

  const [activeWindows, updateActiveWindows] = useState([]);
  
  const addActiveWindow = ({ id, key, title }) => {
    windowCount++
    updateActiveWindows(prev => {
      let tempActiveWindows = prev.map(window => window);
      tempActiveWindows.push(
        <Window
          id={id + ' ' + windowCount}
          key={id + ' ' + windowCount}
          removeActiveWindow={removeActiveWindow}
          minimizeWindow={minimizeWindow}
          title={title}
          hidden={false}
        />
      );
      return tempActiveWindows;
    });
  }

  const removeActiveWindow = (id) => {  
    updateActiveWindows(prev => {
      let tempActiveWindows = prev.filter(window => {
        return window.props.id !== id
      })
      return tempActiveWindows;
    });
  }

  const minimizeWindow = (id) => {
    updateActiveWindows(prev => {
      let tempActiveWindows = prev.map(window => window);
      let idx = tempActiveWindows.findIndex(window => window.props.id === id);
      let clonedWindow;
      if (!tempActiveWindows[idx].props.hidden) {
        clonedWindow = cloneElement(tempActiveWindows[idx], { hidden: true }, null);
      } else {
        clonedWindow = cloneElement(tempActiveWindows[idx], { hidden: false }, null);
      }
      tempActiveWindows[idx] = clonedWindow;
      return tempActiveWindows;
    });
  }

  return (
    <div className='computer'>
      <Desktop
        addActiveWindow={addActiveWindow}
      >
        {activeWindows.length > 0
          ? activeWindows.map(window => window)
          : null}
      </Desktop>
      <TaskBar
        activeWindows={activeWindows}
        minimizeWindow={minimizeWindow}
      />
    </div>
  )
}

export default Computer;
