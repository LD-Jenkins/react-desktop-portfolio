import React, { useEffect, useState } from 'react';
import './index.css'
import ghMark24px from './ghMark24px.png';
import LILogo from './LILogo.png';
import Spinner from './Spinner.svg';

function Window({ id, title, removeActiveWindow, minimizeWindow, hidden }) {

  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [coords, setCoords] = useState({
    offX: 0,
    offY: 0,
    x: 300,
    y: 200,
  });

  useEffect(() => {
    initContent();
    const node = document.getElementById(id);
    node.onmousedown = function (e) {
      const offsetX = e.clientX - parseInt(node.style.left.replace('px', ''));
      const offsetY = e.clientY - parseInt(node.style.top.replace('px', ''));
      window.onmousemove = (e) => {
        setCoords({
          offX: offsetX,
          offY: offsetY,
          x: e.clientX,
          y: e.clientY,
        });
      }
    }
    window.onmouseup = () => {
      window.onmousemove = null;
    }
  }, []);

  useEffect(() => {
    if (hidden) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [hidden])


  const initContent = () => {
    switch (id.split(' ')[1]) {
      case 'readme':
        setContent(
          <div className='text-content'>
            <div>
              Welcome to my portfolio as a project version 1.0!
              <br /><br />
              I know, I know. I'm sure you're asking, "But Leighton, why go through the trouble of making such a neat, well-made, but incredibly over-the-top portfolio design when something
              simple, sleek, and modern would suffice?" I'm glad you asked. The short answer? I don't have a good reason. The long answer? II ddoonn''tt hhaavvee aa ggoooodd rreeaassoonn.
              Real talk, though, I like to challenge myself the most when the number of people who asked is exactly zero. Where's the fun in making things easy?
              <br/><br/>
              Enough about myself. Here's the current state of the project:<br/>
                Icons on the desktop can be double clicked to open a window with the corresponding window content.<br/>
                Icons and windows can be dragged and dropped.<br/>
                Multiple windows can be opened at the same time, even of the same content.<br/>
                Opening windows will display a taskbar button on the taskbar.<br/>
                Windows can be minimized using the button at the top right of the window (with the "_" symbol for you Mac users)
                  or by clicking the corresponding taskbar button, which can also be used to re-show a minimized window.<br/>
                Windows can also be closed by pressing the "X" in the top right corner of the window.
                <br/><br/>
              That about does it for functionality. Some of the icons will open an iframe which contains previous projects of mine or ones I have worked on with others.
              The "Good Food" app is not the best functioning app as it was part of a group project so not all of the work is mine. I have plans to re-visit the app and clean
              it up a bit in the future when I get the time to.
              <br/><br/>
              Okay, that's all. Feel free to hire me whenever.
              <br/><br/>
              Thanks for stopping by!
            </div>
          </div>
        )

        break;
      case 'about':
        setContent(
          <div className='text-content'>
            <div>
              Hi, I'm Leighton Jenkins. In 2021 I began a full-stack web development bootcamp program with Southern
              Methodist University. Though I am still a beginner, what I lack in professional experience I make up for
              in passion and determination. I am part-way through a Computer Engineering degree with the University of
              North Texas where I plan to graduate in 2023-24. With this portfolio I
              hope to show you what I can bring to the proverbial table.
            </div>
            <div className='social-btn-container'>
              <a className='social-link' target='_blank' rel="noreferrer" href='https://github.com/LD-Jenkins'><button className='social-btn'><div className='social-btn-logo' style={{ backgroundImage: `url(${ghMark24px})` }}></div>
                <div className='social-btn-text'>GitHub</div>
              </button></a>
              <a className='social-link' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/leighton-jenkins-a74ab563/'><button className='social-btn'><div className='social-btn-logo-large' style={{ backgroundImage: `url(${LILogo})` }}></div>
                <div className='social-btn-text'></div>
              </button></a>
            </div>
          </div>
        )
        break;
      case 'project0':
        setIsLoading(true);
        setContent(
          <iframe
            height='100%'
            width='100%'
            title={title}
            src="https://good-food-lj.herokuapp.com"
            onLoad={() => setIsLoading(false)}>
          </iframe>
        )
        break;
      case 'project1':
        setIsLoading(true);
        setContent(
          <iframe
            height='100%'
            width='100%'
            title={title}
            src="https://book-search-lj.herokuapp.com"
            onLoad={() => setIsLoading(false)}>
          </iframe>
        )
        break;
      case 'project2':
        setIsLoading(true);
        setContent(
          <iframe
            height='100%'
            width='100%'
            title={title}
            src="https://all-your-tech-are-blog-to-us.herokuapp.com/"
            onLoad={() => setIsLoading(false)}>
          </iframe>
        )
        break;
      default:
        break;
    }
  }

  return (
    <div
      className='window'
      style={{ top: coords.y - coords.offY, left: coords.x - coords.offX, zIndex: 1, visibility: isHidden ? 'hidden' : 'visible' }}
      id={id}
    >
      <div className='window-header'>
        <div className="window-title-bar">
          {title}
          <button
            className='title-btn minimize'
            onClick={(e) => minimizeWindow(id)}
          >
            <div className='title-btn-img'>
              _
            </div>
          </button>
          <button
            className='title-btn close'
            onClick={() => removeActiveWindow(id)}
          >
            <div className='title-btn-img'>
              X
            </div>
          </button>
        </div>

      </div>
      <div className='window-toolbar'>

      </div>
      <div className='window-content-wrapper'>
        <div className='window-content'>
          {isLoading
            ? <img className='spinner' src={Spinner} alt='loading spinner' />
            : null}
          {content}
        </div>
      </div>
      <div className='window-footer'>
        Done
      </div>
    </div>
  )
}

export default Window;