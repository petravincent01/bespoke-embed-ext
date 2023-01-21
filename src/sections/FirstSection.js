import React from "react";

export default function FirstSection({ children }) {
  return (
    <section className="quarterly">
      <div className="wrapper">
        <div className="content-grid">
          <div className="quarterly-container">
            {/* <iframe sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox" webkitallowfullscreen mozallowfullscreen allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"  src="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly?pid=Mjk296702&v=1.1"></iframe> */}
            <iframe src="https://www.paperturn-view.com/global-publishing-mck/mckinsey-quarterly?pid=Mjk296702&v=1.1" width="100%" height="408"  allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" className="paperTurn-iframe"></iframe>
           </div>
          </div>  
        </div>

    </section>
  );
}
