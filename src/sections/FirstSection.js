import React from "react";
import {isMobile, isTablet} from 'react-device-detect';

const MyComponent = () => {
  if(isMobile|| isTablet) {
      return (
        <a href="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly-vol-59-no-1?pid=Mjg288829&v=5.1" target="_blank">View full screen for navigation and accessibility options</a> 
      )
    }
    else{  
      return (
        <a href="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly-vol-59-no-1?pid=Mjg288829&v=5.1" target="_self">View full screen for navigation and accessibility options</a> 
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
