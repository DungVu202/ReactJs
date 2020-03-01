import React from 'react';
import './App.css';
// import Baitap1 from "./component/baitap1";
// import Baitap2 from "./component/baitap2";
// import Baitap3 from "./component/baitap3";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-event";
import ExampleHandlingEvent from './handling-event/exampleHandlingEvent';
import State from './state';
import BaitapCar from "./baitap-car";
import ListKey from './list-key';
import ExampleList from './list-key/example-list';
import Props from './props';
import ExampleProps from './Example-props';
import LiftingStateUp from './lifting-state-up';
import LiftingStateUpCart from './lifting-state-up-cart';



function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      {/* <Baitap3 /> */}
      <RenderingElements />
      <hr/>
      <HandlingEvent />
      <hr/>
      <ExampleHandlingEvent/>
      <hr/>
      <State/>
      <hr/>
      <BaitapCar/>
      <hr/>
      <ListKey/>
      <hr/>
      <ExampleList/>
      <hr/>
      <Props/>
      <hr/>
      <ExampleProps/>
      <hr/>
      <LiftingStateUp/>
      <hr/>
      <LiftingStateUpCart/>
    </div>
  );
}

export default App;
