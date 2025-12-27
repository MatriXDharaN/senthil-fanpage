export const loadTwitter = () =>
  new Promise((resolve) => {
    if (window.twttr) return resolve();
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });

export const loadInstagram = () =>
  new Promise((resolve) => {
    if (window.instgrm) return resolve();
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });

export const loadFacebook = () =>
  new Promise((resolve) => {
    if (window.FB) return resolve();

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v18.0",
      });
      resolve();
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    document.body.appendChild(script);
  });
