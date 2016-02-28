import React from 'react';
import Project from './project';

const info = {
  snowbubble: {
  description:['Complete training platform and Visualization tool for Professional Angular 1.x development', `Project topped Echo.js with current plans to expand platform to include advanced Angular topics and
  additional frameworks such as Angular 2`, `Full stack engineer to integrate Angular data pattern with FE training platform`, `First training platform to fully visualize Angular data flow using Canvas API`],
  tech:['Angular', 'Angular Material','Node/Express', 'Codemirror', 'Heroku', 'MongoDB', 'D3', 'IntroJS']
  }
}



export default() => {
  return (
    <div className="section" data-anchor="secondPage">
      <Project title="SnowBubble" gif="./snowbubble.gif" anchor="slide1" desc={info.snowbubble.description} tech={info.snowbubble.tech}/>


    </div>
  )
};

// <Project title="InstaGIF" gif="./instagif.gif" anchor="slide2" />
// <Project title="Life Analytics" gif="./lifeanalytics.gif" anchor="slide3" />
