import React, { useEffect, useState } from 'react';
import './index.css';

function Icon({ id, initialLeft, initialTop, addActiveWindow, label, bImg }) {

  const [coords, setCoords] = useState({
    offX: 0,
    offY: 0,
    x: initialLeft,
    y: initialTop,
  });

  let nodeExt = {}

  useEffect(() => {
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
      if (!nodeExt.wasClicked) {
        nodeExt.wasClicked = true;
        nodeExt.node = e.currentTarget;
        setTimeout(function () {
          nodeExt.wasClicked = false;
        }, 2000);
      } else if (nodeExt.node === e.currentTarget) {
        nodeExt.wasClicked = false;
        addActiveWindow(
          {
            id: 'window ' + nodeExt.node.id,
            title: node.innerText,
          }
        )
      }
    }
    window.onmouseup = () => {
      nodeExt.isMoving = false;
      window.onmousemove = null;
    }
  });

  return (
    <div
      className='icon'
      style={{ top: coords.y - coords.offY, left: coords.x - coords.offX, zIndex: 0 }}
      id={id}
    >
      <div className='icon-img' style={{ backgroundImage: `url(${bImg})` }} />
      <div className='icon-text'>
        {label}
      </div>
    </div>
  )
}

export default Icon;