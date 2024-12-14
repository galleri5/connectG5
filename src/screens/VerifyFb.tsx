import React, { useState } from "react";
import useFacebookSDK from "../hooks/useFacebook.jsx";

const FacebookLoginComponent = () => {
  
  const [authData, setAuthData] = useState(null);
  const appId = "1127693593922042";
  const isSdkLoaded = useFacebookSDK(appId);
  const [accessToken, setAccessToken] = useState(null);

  const handleFBLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          const token = response.authResponse.accessToken;
          setAccessToken(token);
          window.FB.api("/me", { fields: "name,email,picture" }, (userData) => {
            setAuthData(userData);
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      {
        scope:
          "public_profile,email,read_insights,pages_read_user_content,email,pages_show_list,business_management,pages_read_engagement,instagram_basic,public_profile,instagram_manage_insights",
      }
    );
  };
  authData

  if (!isSdkLoaded) {
    authData
    return <div className="main-wrapper"></div>;
  }

  return (
    <div className="main-wrapper bg-gray-900 min-h-screen">
    

      {!authData ? (
        <div className="flex flex-col items-center w-full p-4">
          <div className="w-full max-w-[400px] space-y-6">
            {/* Facebook login button */}
            <button
              onClick={handleFBLogin}
              className="w-full flex flex-col items-center bg-transparent border-0 p-0 hover:opacity-80"
            >
              <div className="w-full max-w-[150px] aspect-square bg-[#1877F2] rounded-full overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">f</span>
                </div>
              </div>
              <div className="w-full text-white text-center py-2 text-sm font-normal mt-2">
                VERIFY ID WITH FACEBOOK
              </div>
            </button>

            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-white text-sm">
                  Choose the 'Select all' check to choose the handles that need to be connected and 
                  the Facebook pages linked to them.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-white text-sm">
                  Give all permissions requested by Instagram to ensure proper collection of data.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs text-center mt-4">
              View the video below to see what to do after logging into Facebook
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full p-4 text-white">
          {authData.picture?.data?.url && (
            <img 
              src={authData.picture.data.url} 
              alt={authData.name} 
              className="w-20 h-20 rounded-full mb-4"
            />
          )}
          <h2 className="text-xl font-semibold">Welcome {authData.name}</h2>
        </div>
      )}
    </div>
  );
};

export default FacebookLoginComponent;