import { useEffect } from "react";

const InstagramEmbed = ({ permalink }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [permalink]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{ width: "100%" }}
    />
  );
};

export default InstagramEmbed;
