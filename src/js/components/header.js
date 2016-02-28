import React from 'react';
import About from './about.js';
import Resume from './resume.js';

const styles = {
  whiteText70: {color: 'white', 'fontSize': '70px', 'fontWeight': 100},
  whiteText24: {color: 'white', 'fontSize': '24px'},
  backgroundImage: {backgroundImage:  'url('+'/images/header.jpg'+')'},
};

export default() => {
  return (
    <div className="section" id="firstPage" style={styles.backgroundImage} data-anchor="firstPage">
      <Resume />
      <h1 className="text-center" style={styles.whiteText70}>Bryan Truong</h1>
      <About />

    </div>
  )
};
