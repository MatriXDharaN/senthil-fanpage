import React, { useEffect } from "react";

const FacebookEmbed = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/officialsenthilbalaji"
      data-tabs="timeline"
      data-width="500"
      data-height="600"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    />
  );
};

export default FacebookEmbed;
