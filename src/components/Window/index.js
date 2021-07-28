import React, { useEffect, useState } from 'react';
import './index.css'

function Window({ setWindowToClose, id }) {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const closeWindow = (e) => {
    setWindowToClose(e.currentTarget)
    console.log(e.currentTarget.parentNode.parentNode)
  }

  useEffect(() => {
    if (id === 'about') {
      setTitle('About Me');
      setContent(`Hi, I'm Leighton Jenkins. In 2021 I began a full-stack web development bootcamp program with Southern
      Methodist University. Though I am still a beginner, what I lack in professional experience I make up for
      in passion and determination. I am part-way through a Computer Engineering degree with the University of
      North Texas where I plan to graduate in 2023-24 and have big plans for the future. With this portfolio I
      hope to show you what I can bring to the proverbial table.`)
    }
  
  }, [])
  


  return (
    <div
      className='window'
    >
      <div className='window-menu'>
        <div className="window-title">
          {title}
        </div>
        <button
          className='close-btn'
          onClick={(e) => closeWindow(e)}
        >
        </button>
      </div>
      <div className='window-border'>
        <div className='window-content'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Window;