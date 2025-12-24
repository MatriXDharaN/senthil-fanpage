import { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/p/DSmndq6EekO/"
      data-instgrm-version="14"
      style={{ width: "100%" }}
    />
  );
};

export default InstagramEmbed;
