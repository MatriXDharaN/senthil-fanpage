import { useEffect } from "react";

const FacebookEmbed = ({ pageUrl }) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [pageUrl]);

  return (
    <div
      className="fb-page"
      data-href={pageUrl}
      data-tabs="timeline"
      data-width="500"
      data-height="1000"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    />
  );
};

export default FacebookEmbed;
