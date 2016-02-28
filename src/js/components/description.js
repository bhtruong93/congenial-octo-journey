import React from 'react';


export default(props) => {
  var list = props.desc.map((item) => {
    return <li className="text-left">{item}</li>
  })
  return (
    <div className="col-md-3">
      <h2 className="headerColor">Description</h2>
      <ul>
        {list}
      </ul>
    </div>
  )
}
