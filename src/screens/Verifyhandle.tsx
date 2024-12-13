import React from 'react'
import tickicon from "../assets/tickicon.svg"
import verifyimage from "../assets/verifyimage.svg"
import facebookimage from "../assets/facebookimage.svg"
import instaimage from "../assets/instagramimage.svg"
import verfiy from "../assets/verifyimage.svg"
import shareimage from "../assets/shareimage.svg"
import useFacebookSDK from "../hooks/useFacebook.jsx";
import { useNavigate } from 'react-router-dom';


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
            (response) => {
                if (response.authResponse && response.status === 'connected') {
                    const token = response.authResponse.accessToken;
                    window.FB.api("/me", { fields: "name,email,picture" }, (userData) => {
                        if (userData && !userData.error) {
                            navigate('/success');
                        } else {
                            console.log("Failed to fetch user data");
                            navigate('/unverify');
                        }
                    });
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
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#BB9400", textAlign: "center", lineHeight: "21px" }}>FEW STEPS TO SELL YOUR CONTENT AND EARN IN 24 HOURS OF APPROVAL</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "45px" }}>
                <img style={{ width: "72px", height: "72px" }} src={verifyimage} alt="g5 logo" />
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#FAFAFA", textAlign: "center", }}>VERIFY THE HANDLE IS YOU!
                    VALIDATE YOUR INSTAGRAM ACCOUNT</p>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", textAlign: "center", lineHeight: "21px" }}>Click on the blue ��Verify your Insta ID’ button below to verify the ownership of the Insta handle shared in the previous page.
                    Without verification we will not be able to buy your content. Too bad :(</p>
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