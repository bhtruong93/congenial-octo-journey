import React from 'react';

const white = (event) => {
  console.log($(event.target).attr('color', 'white'));
}

export default() => {
  return(
    <div className="col-md-12" style={{position: 'absolute', top: 0}}>
      <a className="btns btn-lg" href="/images/Bryan Truong.pdf" onClick={white} download style={{textDecoration: "none", float: 'right'}}>Download Resume</a>
    </div>
  )
};
