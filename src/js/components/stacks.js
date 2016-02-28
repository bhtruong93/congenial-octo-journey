import React from 'react';

export default(props) => {
  var list = props.tech.map((item) => {
    return <li className="text-left">{item}</li>
  })
  return (
    <div className="col-md-3">
      <h2 className="headerColor">Technology</h2>
      {list}
    </div>
  )
}
