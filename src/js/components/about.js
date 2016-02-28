import React from 'react';
// import Title from './title.js';
import Details from './details.js';
import AboutMe from './aboutme.js';
import Face from './face.js';

const styles = {
  whiteText70: {color: 'white', 'fontSize': '70px', 'fontWeight': 100},
  whiteText24: {color: 'white', 'fontSize': '24px'},
  backgroundImage: {backgroundImage:  'url('+'/images/header.jpg'+')'},
};

export default() => {
  return (
    <div>
      <div className="col-md-12">

        <div className="col-md-3"></div>
        <AboutMe />
        <Face />
        <Details />
        <div className="col-md-3"></div>

      </div>

      <div className="col-md-12 text-center" style={{padding: "25px"}}>
        <h4 className="text-center" style={styles.whiteText24}>Strength and growth come only through continuous effort and struggle. <span style={{fontStyle: 'italic'}}>-Napoleon Hill</span></h4>
      </div>

    </div>
    )
}
