import React from 'react';
import Header from './header.js';
import About from './about.js';
import Skills from './skills.js';
import Projects from './projects.js';

export default () => {
  return (
    <div id="fullpage">
      <Header />
      <Projects />
    </div>
  )
};

$(document).ready(() => {
  $('#fullpage').fullpage({
    sectionsColor: ['#262b37', 'whitesmoke','#F3EFE0', 'whitesmoke', '#F3EFE0'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    autoScrolling: false,
    fitToSection: false
  });
})
