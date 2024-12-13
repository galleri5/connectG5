import React from 'react'
import g5logo from '../assets/g5logo.svg'
import uparrow from '../assets/uparrowicon.svg'
import downarrow from '../assets/downarrowicon.svg'
import verfiy from "../assets/verifyimage.svg"
import shareimage from "../assets/shareimage.svg"



const vwhyVerifySteps = [
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


function Instagramrequest() {
    const [showFirstStep, setShowFirstStep] = React.useState(true)
    const [showSecondStep, setShowSecondStep] = React.useState(false)
    return (
        <div style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <img style={{ width: "72px", height: "72px" }} src={g5logo} alt="g5 logo" />
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#FAC912", textAlign: "center", lineHeight: "21px" }}>TO VERIFY YOUR ACCOUNT, INSTAGRAM REQUEST THE FOLLOW</p>
            </div>

            <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#FAFAFA", border: "1px solid #FFFFFF", borderRadius: "36px", padding: "8px 12px" }}>1</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#FAFAFA" }}>AN INSTAGRAM CREATOR OR BUSINESS ACCOUNT</p>
                        </div>
                        {showFirstStep ? <img onClick={() => setShowFirstStep(false)} src={uparrow} alt="uparrow" /> : <img onClick={() => setShowFirstStep(true)} src={downarrow} alt="uparrow" />}

                    </div>
                    {showFirstStep && <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0" }}>You can convert your personal or business profile into a creator account to access features that make it easier to control your online presence, understand your growth and manage your messages. Click on ‘Learn more’ to see the steps on the Offical Facebook Help Center</p>
                    }
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#FAFAFA", border: "1px solid #FFFFFF", borderRadius: "36px", padding: "8px 12px" }}>2</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#FAFAFA" }}>LINKED TO A FACEBOOK PAGE</p>
                        </div>
                        {showSecondStep ? <img onClick={() => setShowSecondStep(false)} src={uparrow} alt="uparrow" /> : <img onClick={() => setShowSecondStep(true)} src={downarrow} alt="uparrow" />}

                    </div>
                    {showSecondStep && <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0" }}>You can also change the Facebook Page that's connected to your Instagram business account at any time. Click on ‘Learn more’ to view instructions that will guide you through how to add or change the Facebook Page connected to your Instagram Business account</p>
                    }
                </div>

                <button style={{ padding: "12px 20px", border: "1px solid rgba(246, 246, 246, 0.17)", borderRadius: "8px", background: "#FAC912", width: "100%", color: "black", marginTop: "8px" }}>NEXT STEP</button>


                <div style={{ borderTop: "2px solid #FFFFFF14", marginTop: "10px", marginBottom: "10px" }}>
                </div>

                <div>
                    <p style={{ fontSize: "18px", fontWeight: "700", color: "#EDEDE8", textAlign: "center" }}>YOUR DATA IS SAFE</p>
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
        </div>
    )
}

export default Instagramrequest