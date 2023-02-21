import React from "react";
import {isMobile, isTablet} from 'react-device-detect';
const prefix = "/spcontent/bespoke/mq-digital-sample/assets/q1-2023-full-issue-sample.pdf";

const MyComponent = () => {
  if(isMobile|| isTablet) {
      return (
        <div>
        <div aria-hidden="true">
          <a href="https://digitalq.mckinsey.com/?v=5.1" target="_blank" aria-hidden="true"  data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Tablet, mobile, and screen reader users click here">
              Tablet, mobile, and screen reader users click here
          </a>
          <div aria-hidden="false">
            <a href={prefix} target="_blank" aria-label="Screen reader users click here" className="visually-hidden" aria-hidden="false" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Screen reader users click here">Screen reader users click here</a> 

            
          </div>
        </div>
      </div>
      )
    }
    else{  
      return (

        <div>
          <div aria-hidden="true">
              <a href="https://digitalq.mckinsey.com/?v=5.1" target="_self" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Tablet, mobile, and screen reader users click here">Tablet, mobile, and screen reader users click here</a>
          </div>
          <div aria-hidden="false">
              <a href={prefix} target="_self" aria-label="Screen reader users click here" className="visually-hidden" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Screen reader users click here">Screen reader users click here</a> 
            </div>
          </div>
       )
    }
};


export default function FirstSection({ children }) {
  return (
    <section className="quarterly">
      <div className="wrapper">
      <div className="mck-o-container--wrapped"><div className="paper-link mck-u-links-inline"><MyComponent></MyComponent></div></div>
        <div className="content-grid">
          <div className="quarterly-container">

            {/* default paper turn for sample */ }
            <iframe src="https://www.paperturn-view.com/?pid=Mjg288829&v=5.1&bgcolor=%23051c2c&embed=script&shadow=&flipSound=&hardCover=" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" className="paperTurn-iframe"></iframe>
            {/* Full edition for after users sign in */ }
           
               {/* <iframe src="https://www.paperturn-view.com/?pid=Mjk296702&v=1.1&bgcolor=%23051c2c&embed=iframe&shadow=&flipSound=&hardCover=" width="100%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" className="paperTurn-iframe"></iframe> */}

            
            {/* <iframe sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"  src="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly-vol-59-no-1?pid=Mjg288829&v=5.1"></iframe> */}

            {/* <iframe sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"  src="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly?pid=Mjk296702&v=1.1"></iframe> */}
           </div>
          </div>
        </div>
    </section>
  );
}
