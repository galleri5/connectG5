import React from 'react'
import tickicon from "../assets/tickicon.svg"
import verifyimage from "../assets/verifyimage.svg"
import facebookimage from "../assets/facebookimage.svg"
import instaimage from "../assets/instagramimage.svg"
import verfiy from "../assets/verifyimage.svg"
import shareimage from "../assets/shareimage.svg"
import useFacebookSDK from "../hooks/useFacebook.jsx"
import { useNavigate } from 'react-router-dom'


const vwhyVerifySteps = [
    {
        img: verfiy,
        title: "SO WE KNOW IT'S YOU",
        description: "We are buying content from a handle, we need to know you own the handle",
    },
    {
        img: verfiy,
        title: "SECURE PROCESS",
        description: "Verify your account using Facebook’s official authentication gateway",
    },
    {
        img: shareimage,
        title: "VERIFY THE HANDLE IS YOU!",
        description: "VALIDATE YOUR INSTAGRAM ACCOUNT",
    },

]

function Verifyhandle() {
    const navigate = useNavigate();
    const appId = "1127693593922042";
    const isSdkLoaded = useFacebookSDK(appId);

    const handleFBLogin = () => {
        window.FB.login(
            function(response) {
                if (response.authResponse && response.status === 'connected') {
                    const token = response.authResponse.accessToken;
                    fetch('https://creator-app-backend.azurewebsites.net/auth/verify-user/facebook', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            fbToken: token,
                            refId: JSON.parse(localStorage.getItem('userData') || '{}').phone
                        })
                    })
                    .then(apiResponse => apiResponse.json())
                    .then(data => {
                        // debugger
                        if (data.loginSuccessful) {
                            // debugger
                            navigate('/success');
                            // if (data.loginSuccessful) {
                            //     navigate('/success');
                            // } else {
                            //     console.log("Login unsuccessful");
                            //     navigate('/unverify');
                            // }
                        } else {
                            console.log("Login unsuccessful");
                            navigate('/unverify');
                        }
                    })
                    // .catch(error => {
                    //     console.error("API call failed:", error);
                    //     navigate('/unverify');
                    // });
                } else {
                    console.log("User cancelled login or did not fully authorize.");
                    navigate('/unverify');
                }
            },
            {
                scope: "public_profile,email,read_insights,pages_read_user_content,email,pages_show_list,business_management,pages_read_engagement,instagram_basic,public_profile,instagram_manage_insights",
            }
        );
    };

    return (
        <div style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <img style={{ width: "72px", height: "72px" }} src={tickicon} alt="g5 logo" />
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#FAC912", textAlign: "center", }}>AWESOME!</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "10px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "400", color: "#BB9400", }}>.Few more steps and youre ready to unlock your content for sale!</p>
                    <p style={{ fontSize: "14px", fontWeight: "400", color: "#BB9400", }}>.Validate your Instagram account</p>
                </div>

            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "45px" }}>
                <img style={{ width: "72px", height: "72px" }} src={verifyimage} alt="g5 logo" />
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#FAFAFA", textAlign: "center", }}>VERIFY THE HANDLE IS YOU!
                    VALIDATE YOUR INSTAGRAM ACCOUNT</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", textAlign: "center", lineHeight: "21px" }}>In order for you to permit access for sale of your content, we need to verify the account belongs to you. Click on the 'proceed to verify' button to start the process.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "36px" }}>
                <div
                    onClick={handleFBLogin}
                    style={{
                        padding: "13px 20px",
                        background: "#4268B3",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "12px",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}
                >
                    <img src={instaimage} alt="verifyimage" />
                    <img src={facebookimage} alt="facebookimage" />
                    <p style={{ fontSize: "14px", fontWeight: "500", color: "#FAFAFA", textAlign: "center" }}>
                        PROCEED TO VERIFY
                    </p>
                </div>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#9D9D9D", textAlign: "center" }}>
                    <a href="https://www.galleri5.com/terms-of-service" style={{ color: "#9D9D9D", textDecoration: "none" }}>T&C</a>
                    {" | "}
                    <a href="https://www.galleri5.com/privacy-policy" style={{ color: "#9D9D9D", textDecoration: "none" }}>PRIVACY POLICY</a>
                </p>

            </div>

            <div style={{ borderTop: "2px solid #FFFFFF14", marginTop: "40px", marginBottom: "40px" }}>
            </div>

            <div>
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#EDEDE8", textAlign: "center" }}>WHY VERIFY YOUR INSTAGRAM?</p>
                {vwhyVerifySteps.map((step, index) => (
                    <div key={index}>
                        {/* Step Content */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "32px",
                                marginTop: "30px",
                                marginBottom: "30px",
                            }}
                        >
                            <img
                                style={{ width: "46px", height: "46px" }}
                                src={step.img}
                                alt="verifyimage"
                            />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    alignItems: "flex-start",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "700",
                                        color: "#FAFAFA",
                                    }}
                                >
                                    {step.title}
                                </p>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        color: "#C0C0C0",
                                        lineHeight: "21px",
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}

            </div>


        </div>
    )
}

export default Verifyhandle