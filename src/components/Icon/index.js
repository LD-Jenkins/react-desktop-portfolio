import React, { useEffect, useState, forwardRef } from 'react';
import './index.css';
import profmecropped from '../../assets/profmecropped.png';

function Icon({ id, initialLeft, initialTop, onClick }) {
  
  return (
    <div  
      className='icon'
      style={{ top: initialTop, left: initialLeft}}
      onClick={onClick}
      id={id}
      >
      <div className='icon-img' />
      <div className='icon-text'>
        About Me
      </div>
    </div>
  )

}

export default Icon;

// const Icon = forwardRef(({ initialTop, initialLeft, updatedTop, updatedLeft }, ref) =>{

//   // const [top, setTop] = useState(initialTop);
//   // const [left, setLeft] = useState(initialLeft);
//   console.log(initialTop);
//   console.log(updatedTop);

//   // useEffect(() => {
//   //   setTop(updatedTop);
//   //   setLeft(updatedLeft);
//   // }, [updatedTop, updatedLeft])
//   return (
//     <div  
//       className='icon'
//       style={{ top: updatedTop, left: updatedLeft}}
//       ref={ref}
//       >
//       <div className='icon-img' />
//       <div className='icon-text'>
//         About Me
//       </div>
//     </div>
//   )
// })

// export default Icon;

