import React, { useState, useEffect, createRef, useCallback } from 'react';
import './index.css';
import Icon from '../Icon';
import Window from '../Window';

function Desktop() {

  const [wasClicked, setWasClicked] = useState(null);
  const [iconNode, setIconNode] = useState(null);
  const [activeWindow, setActiveWindow] = useState(null);
  const [windowToClose, setWindowToClose] = useState(null);
  const [iconNodeList, setIconNodeList] = useState([]);

  useEffect(() => {
    const nodeList = document.getElementById('desktop').childNodes;
    // console.log(nodeList)
    nodeList.forEach(node => {
      setIconNodeList([...iconNodeList, node])
    });
  }, [])

  // useEffect(() => {
  //   console.log(iconNodeList)
  // }, [iconNodeList])

  useEffect(() => {
    if (windowToClose !== null) {
      windowToClose.shouldClose = true;
    }
  }, [windowToClose])

  const shouldOpen = (target) => {
    if (target === iconNode) {
      iconNode.shouldRender = true;
      // console.log(iconNode)
      ifWindowShouldRender()
      // console.log(target)
      // console.log('opened')
    }
  }
  const registerClick = (e) => {
    // console.log('in click')
    // console.log(wasClicked)
    if (!wasClicked) {
      // console.log('click registered')
      setWasClicked(true);
      setTimeout(function () {
        setWasClicked(false)
      }, 2000)
      setIconNode(e.currentTarget)

    } else {
      shouldOpen(e.currentTarget)
    }
  }

  const ifWindowShouldRender = () => {
    if (iconNode && iconNode.shouldRender === true) {
      if (!activeWindow) {
        // console.log('did render window')
        const windowNode = (
          <Window
            setWindowToClose={setWindowToClose}
            shouldClose={false}
            id={iconNode.id}
          />
        )
        // console.log(windowNode)
        setActiveWindow(windowNode)
        return (windowNode)
      }
      // console.log('window did not render')
    }
  }

  return (
    <div className='background-img' id='desktop'>
      {activeWindow}
      <Icon
        initialTop={12}
        initialLeft={12}
        onClick={(e) => registerClick(e)}
        id='about'
        shouldRender={false}

      />
      <Icon
        initialTop={112}
        initialLeft={12}
        onClick={(e) => registerClick(e)}
        id='projects'
        shouldRender={false}
      />
    </div>
  )
}

export default Desktop;

{/* <Icon 
        initialTop={212}
        initialLeft={12}
        onClick={(e) => registerClick(e)}
        name='contacts'
        shouldRender={false}
      /> */}

// const [initialXPos, setInitialXPos] = useState(null);
// const [initialYPos, setInitialYPos] = useState(null);
// const [translateX, setTranslateX] = useState(null);
// const [translateY, setTranslateY] = useState(null);
// const [iconRef, setIconRef] = useState(null);
// const [iconIsClicked, setIconIsClicked] = useState(null);
// const aboutIconRef = createRef();


// // const onMouseMove = () => {
// //   document.onmousemove() =>
// // }

// useEffect(() => {
//   // document.onmousemove = null;
//   // do this for each icon
//   const { current } = aboutIconRef;
//   current.onmouseenter = (e) => {
//     console.log('entered');
//     // let removed = false;
//     current.onmousedown = (e) => {
//       console.log('mouse down');
//       setInitialXPos(e.clientX);
//       setInitialYPos(e.clientY);
//       setIconRef(current);
//       setIconIsClicked(true);
//     }
//     current.onmouseup = () => {

//       console.log('icon mouse up');
//       // removed = true;
//       // console.log(offsetX)
//       // console.log(offsetY)
//       setInitialXPos(null);
//       setInitialYPos(null);
//       setIconRef(null);
//       setIconIsClicked(false);
//       // document.onmousemove = null;
//     }

//     document.onmouseup = () => {
//       console.log('document mouse up')
//       setInitialXPos(null);
//       setInitialYPos(null);
//       setIconRef(null);
//       setIconIsClicked(false);
//     }

//   }
//   current.onmouseleave = () => {
//     // setIconRef(null);
//   }
// }, []);

// // useEffect(() => {
// //   if (iconRef !== null) {
// //     iconRef.onmousedown = (e) => {
// //       setInitialXPos(e.clientX);
// //       setInitialYPos(e.clientY);
// //       setIconIsClicked(true);
// //     }
// //     iconRef.onmouseup = () => {
// //       setIconIsClicked(false)
// //       console.log('here')
// //       // console.log(offsetX)
// //       // console.log(offsetY)
// //       // setInitialXPos(null);
// //       // setInitialYPos(null);
// //       document.onmousemove = null;
// //     }
// //   }
// // }, [iconRef]);  

// let status;

// useEffect(() => {
//   // console.log(initialXPos)
//   // console.log(initialYPos)
//   if (iconIsClicked === true) {

//     document.addEventListener('mousemove', handleIconMove, true);
//     console.log('listener added');
//   }
//   if (iconIsClicked === false) {

//     document.removeEventListener('mousemove', handleIconMove, true);
//     console.log('listener removed')
//     status = 'removing';
//   }
// }, [iconIsClicked])

// const handleIconMove = useCallback((e) => {
//   if (iconIsClicked) {
//     setTranslateX(e.clientX - initialXPos);
//     setTranslateY(e.clientY - initialYPos);
//     status = 'adding';
//     console.log('in icon move')
//   }
// })

{/* <div className='background-img'>
      <Icon 
        initialTop={12}
        initialLeft={12}
        updatedTop={translateY}
        updatedLeft={translateX}
        ref={aboutIconRef}
      />

    </div> */}