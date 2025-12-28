let twitterPromise;
let instagramPromise;
let facebookPromise;

/* ---------------- Twitter ---------------- */
export const loadTwitter = () => {
  if (twitterPromise) return twitterPromise;

  twitterPromise = new Promise((resolve) => {
    if (window.twttr?.widgets) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });

  return twitterPromise;
};

/* ---------------- Instagram ---------------- */
export const loadInstagram = () => {
  if (instagramPromise) return instagramPromise;

  instagramPromise = new Promise((resolve) => {
    if (window.instgrm?.Embeds?.process) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Instagram needs a small delay on mobile
      setTimeout(resolve, 300);
    };
    document.body.appendChild(script);
  });

  return instagramPromise;
};

/* ---------------- Facebook ---------------- */
export const loadFacebook = () => {
  if (facebookPromise) return facebookPromise;

  facebookPromise = new Promise((resolve) => {
    if (window.FB) {
      resolve();
      return;
    }

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

  return facebookPromise;
};
