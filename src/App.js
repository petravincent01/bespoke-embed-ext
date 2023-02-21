import { useEffect, useRef } from "react";
import FirstSection from "./sections/FirstSection";

function Quarterly() {

  return (
      <div className="mq-digital digital-sample">
        <FirstSection />
      </div>
  
  );
}

export default function App() {
  return (
    <div className="App">
      <Quarterly />
    </div>
  );
}
