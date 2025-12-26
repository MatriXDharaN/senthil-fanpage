import { useEffect, useState } from "react";

const FacebookEmbed = ({ pageUrl }) => {
  const [width, setWidth] = useState(
    window.innerWidth <= 768 ? 350 : 500
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768 ? 300 : 500);
    };

    window.addEventListener("resize", handleResize);

    if (window.FB) {
      window.FB.XFBML.parse();
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [pageUrl]);

  return (
    <div
      className="fb-page"
      data-href={pageUrl}
      data-tabs="timeline"
      data-width={width}
      data-height="1000"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    />
  );
};

export default FacebookEmbed;
