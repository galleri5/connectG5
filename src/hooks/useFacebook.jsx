import { useEffect } from "react";

const useFacebookSDK = (appId) => {
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: "v12.0", // Ensure the version is correctly specified
      });
      window.FB.AppEvents.logPageView();
    };

    const loadFBSDK = () => {
      if (window.FB) {
        window.fbAsyncInit();
      } else {
        (function (d, s, id) {
          let js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
      }
    };

    loadFBSDK();
  }, [appId]);
};

export default useFacebookSDK;
