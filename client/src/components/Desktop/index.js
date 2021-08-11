import React, { useState } from 'react';
import './index.css';
import Icon from '../Icon';
import profmecropped from './profmecropped.png';
import booksearch from './booksearch.png';
import goodfood from './goodfood.png';
import cat from './cat.png';
import readme from './readme.png';

function Desktop({ children, addActiveWindow }) {

  const [icons, updateIcons] = useState([
    <Icon
      initialTop={12}
      initialLeft={12}
      addActiveWindow={addActiveWindow}
      id='about'
      key='about'
      label='About Me'
      bImg={profmecropped}
    />,
    <Icon
      initialTop={122}
      initialLeft={12}
      addActiveWindow={addActiveWindow}
      id='project0'
      key='project0'
      label='Good Food'
      bImg={goodfood}
    />,
    <Icon
      initialTop={232}
      initialLeft={12}
      addActiveWindow={addActiveWindow}
      id='project1'
      key='project1'
      label='Google Book Search'
      bImg={booksearch}
    />,
    <Icon
      initialTop={342}
      initialLeft={12}
      addActiveWindow={addActiveWindow}
      id='project2'
      key='project2'
      label='All Your Tech Are Blog To Us'
      bImg={cat}
    />,
    <Icon
      initialTop={475}
      initialLeft={12}
      addActiveWindow={addActiveWindow}
      id='readme'
      key='readme'
      label='README'
      bImg={readme}
    />,
  ]);

  return (
    <div className='background-img' id='desktop'>
      {children}
      <div id='icon-wrapper'>
        {icons.map(icon => icon)}
      </div>
    </div>
  )
}

export default Desktop;