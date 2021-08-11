import React, { useEffect } from 'react';

function WindowContent({ id }) {

  useEffect(() => {
    switch (id) {
      case 'about':
        setTitle('About Me');
        setContent(`Hi, I'm Leighton Jenkins. In 2021 I began a full-stack web development bootcamp program with Southern
        Methodist University. Though I am still a beginner, what I lack in professional experience I make up for
        in passion and determination. I am part-way through a Computer Engineering degree with the University of
        North Texas where I plan to graduate in 2023-24 and have big plans for the future. With this portfolio I
        hope to show you what I can bring to the proverbial table.`)
        break;
      case 'projects': 
        (
          <iframe id="inlineFrameExample"
            title="Inline Frame Example"
            width="300"
            height="200"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
          </iframe>
        )

      default:
        break;
    }
  })

  return (
    <div className='window-menu'>
      <div className="window-title">
        {title}
      </div>
      <button
        className='close-btn'
        onClick={(e) => closeWindow(e)}
      >
      </button>
      <div className='window-border'>
        <div className='window-content'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default WindowContent;