import { useEffect } from "react";

const XEmbed = ({ tweetUrl }) => {
  useEffect(() => {
    const loadX = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };

    if (window.twttr) {
      loadX();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadX;
      document.body.appendChild(script);
    }
  }, [tweetUrl]);

  return (
    <blockquote className="twitter-tweet">
      <a href={tweetUrl}>X</a>
    </blockquote>
  );
};

export default XEmbed;
