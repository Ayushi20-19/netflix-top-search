import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Sdata';
import './App.css';

// function ncard(val, inde){
 
// }

ReactDOM.render(
 <>
   <h1 className="heading_style">
     List of top Netflix Series
   </h1>
   {Sdata.map((val) => {
   return(
    <Card
     key={val.id} 
     imgsrc={val.imgsrc}
     title={val.title}
     sname={val.sname}
     link={val.links}
   />
    );
   })};
 </>,
  document.getElementById('root')
);

