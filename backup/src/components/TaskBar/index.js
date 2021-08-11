import React, { useState } from 'react';
import TaskbarItem from '../TaskbarItem';
import StartButton from '../StartButton';
import './index.css';

function TaskBar({ activeWindows, minimizeWindow }) {

  let offset = 0;
  let width = 100;

  return (
    <div className='taskbar-wrapper'>
      <div className='start-btn-wrapper'>
        <StartButton />
      </div>
      <div className='taskbar-item-wrapper'>
        {activeWindows.map(window => {
          const tempItem = (
          <TaskbarItem
            title={window.props.title}
            left={offset + 'px'}
            width={width + 'px'}
            fontWeight='normal'
            key={window.props.id}
            id={window.props.id}
            hidden={window.props.hidden}
            minimizeWindow={minimizeWindow}
          />
          )
          offset = offset + 8 + width;
          return tempItem;
        })
        
        }
      </div>
    </div>
  )
}

export default TaskBar;