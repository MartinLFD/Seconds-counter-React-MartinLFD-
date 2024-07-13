import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Secondscounter from './components/Secondscount';



const root = ReactDOM.createRoot(document.getElementById('root'));

let seconds = 0;
setInterval(() => {
  let six = Math.floor( seconds / 100000);
  let five = Math.floor(seconds / 10000);
  let four = Math.floor(seconds /1000);
  let three = Math.floor(seconds / 100);
  let two = Math.floor(seconds / 10);
  let one = seconds;
  seconds++
  root.render(
<React.StrictMode>
<Secondscounter 
  positionSix={six}
  positionFive={five}
  positionFour={four}
  positionThree={three}
  positionTwo={two}
  positionOne={one}
    
/>
</React.StrictMode>



);
}, 1000)
console.log(Secondscounter());



