import React from "react";
import {isTablet,isMobile} from 'react-device-detect';
const prefix = "/spcontent/bespoke/mq-digital-v1/assets/q1_2023_full_issue_final.pdf";

const MyComponent = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      pushEvent(event);
    }
  }

  const pushEvent = (event) => {
    if (window.appEventData) {
      window.appEventData.push({
        "event": "Navigation Link Clicked",
        "linkInfo": {
          "regions": "download",
          "text": event.currentTarget.dataset.layerText,
          "action": "keypress",
          "category": "Download accessible PDF",
          "region": "Prepoulated Search field"
        }
      });
    }
  }
    if(isMobile|| isTablet) {
        return (
          <div>
          <div aria-hidden="false">
          <p className="visually-hidden">
          Screen reader users: <br/>This <a href={prefix} target="_blank" aria-label="accessible PDF here" className="visually-hidden" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Download accessible PDF here" onKeyDown={handleKeyDown}>accessible PDF</a> contains alt text for illustrations, charts and graphs. Its table of contents contains links to all articles.
  In order to most efficiently navigate this document, we recommend the following:
            <ol>
              <li>Download and save the file to your computer.</li> 
  
              <li>If you’d like to see the list of all articles in this issue, jump by heading until you hear “Table of contents.”</li>
  
              <li>Once you’ve explored the list and found an article you’d like to read, select its link by tabbing to it and pressing Enter.</li>
  
              <li>To return to the table of contents, go to the list of headings, and begin typing “table of contents.” Press enter when you hear the heading with this title spoken.</li>
            </ol>
            If you have questions or encounter any difficulty with this PDF, you can reach us at: <a href="mailto:McKinsey_Website_Accessibility@mckinsey.com" target="_blank" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="McKinsey_Website_Accessibility@mckinsey.com">McKinsey_Website_Accessibility@mckinsey.com</a>.
            </p>
          </div>
      <div aria-hidden="true">
        <a href="https://digitalquarterly.mckinsey.com/?v=1.1" target="_blank" aria-hidden="true"  data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Tablet, mobile, and screen reader users click here">
            Tablet, mobile, and screen reader users click here
        </a>
        <div aria-hidden="false">
          <a href={prefix} target="_blank" aria-label="Download accessible PDF here" className="visually-hidden" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Download accessible PDF here" onKeyDown={handleKeyDown}>Download accessible PDF here</a> 
        </div>
      </div>
    </div>
        )
      }
      else{  
        return (
          <div>
          <div aria-hidden="false">
          <p className="visually-hidden">
          Screen reader users: <br/>This <a href={prefix} target="_blank" aria-label="accessible PDF here" className="visually-hidden" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Download accessible PDF here" onKeyDown={handleKeyDown}>accessible PDF</a> contains alt text for illustrations, charts and graphs. Its table of contents contains links to all articles.
  In order to most efficiently navigate this document, we recommend the following:
            <ol>
              <li>Download and save the file to your computer.</li> 
  
              <li>If you’d like to see the list of all articles in this issue, jump by heading until you hear “Table of contents.”</li>
  
              <li>Once you’ve explored the list and found an article you’d like to read, select its link by tabbing to it and pressing Enter.</li>
  
              <li>To return to the table of contents, go to the list of headings, and begin typing “table of contents.” Press enter when you hear the heading with this title spoken.</li>
            </ol>
            If you have questions or encounter any difficulty with this PDF, you can reach us at: <a href="mailto:McKinsey_Website_Accessibility@mckinsey.com" target="_self" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="McKinsey_Website_Accessibility@mckinsey.com">McKinsey_Website_Accessibility@mckinsey.com</a>.
            </p>
          </div>
      <div aria-hidden="true">
        <a href="https://digitalquarterly.mckinsey.com/?v=1.1" target="_self" aria-hidden="true"  data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Tablet, mobile, and screen reader users click here">
            Tablet, mobile, and screen reader users click here
        </a>
        <div aria-hidden="false">
          <a href={prefix} target="_self" aria-label="Download accessible PDF here" className="visually-hidden" data-layer-event-prefix="Navigation Link" data-layer-action="click" data-layer-text="Download accessible PDF here" onKeyDown={handleKeyDown}>Download accessible PDF here</a> 
        </div>
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
            {/* <iframe src="https://www.paperturn-view.com/?pid=Mjg288829&v=5.1&bgcolor=%23DDDDDD&embed=script&shadow=&flipSound=&hardCover=" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" className="paperTurn-iframe"></iframe> */}
            {/* Full edition for after users sign in */ }
           
               <iframe src="https://www.paperturn-view.com/?pid=Mjk296702&v=1.1&bgcolor=%23DDDDDD&embed=iframe&shadow=&flipSound=&hardCover=" width="100%" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" className="paperTurn-iframe"></iframe>

            
            {/* <iframe sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"  src="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly-vol-59-no-1?pid=Mjg288829&v=5.1"></iframe> */}

            {/* <iframe sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"  src="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly?pid=Mjk296702&v=1.1"></iframe> */}
           </div>
          </div>
        </div>
    </section>
  );
}
