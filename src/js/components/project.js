import React from 'react';
import Title from './title';
import Description from './description';
import Stacks from './stacks';

export default(props) => {
  return(
    <div className="col-md-12 slide" data-anchor={props.anchor}>

      <div className="col-md-12" >
        <div className="col-md-3" ></div>
        <div className="col-md-6" >
          <Title title={props.title} />
        </div>
        <div className="col-md-3" ></div>
      </div>


      <div className="col-md-12 text-center">
        <img src={props.gif} />
      </div>

      <div className="col-md-12 text-center">
        <div className="col-md-3" ></div>
        <Description desc={props.desc} />
        <Stacks tech={props.tech} />
        <div className="col-md-3" ></div>
      </div>

    </div>

  );
};
