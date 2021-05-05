import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';

// function ncard(val, inde){
 
// }

ReactDOM.render(
 <>
   <h1>
     List of top Netflix Series
   </h1>
   {Sdata.map((val) => {
   return(
    <Card imgsrc={val.imgsrc}
     title={val.title}
     sname={val.sname}
     link={val.links}
   />
    );
   })};
 </>,
  document.getElementById('root')
);

