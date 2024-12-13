import React from 'react'
import tickicon from "../assets/tickicon.svg"
import verifyimage from "../assets/verifyimage.svg"
import facebookimage from "../assets/facebookimage.svg"
import instaimage from "../assets/instagramimage.svg"
import verfiy from "../assets/verifyimage.svg"
import shareimage from "../assets/shareimage.svg"


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
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", textAlign: "center", lineHeight: "21px" }}>Click on the blue ‘Verify your Insta ID’ button below to verify the ownership of the Insta handle shared in the previous page.
                    Without verification we will not be able to buy your content. Too bad :(</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "36px" }}>
                <div style={{ padding: "13px 20px", background: "#4268B3", borderRadius: "8px", display: "flex", flexDirection: "row", alignItems: "center", gap: "12px", justifyContent: "center" }}>
                    <img src={instaimage} alt="verifyimage" />
                    <img src={facebookimage} alt="facebookimage" />
                    <p style={{ fontSize: "14px", fontWeight: "500", color: "#FAFAFA", textAlign: "center", }}>PROCEED TO VERIFY</p>
                </div>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#9D9D9D", textAlign: "center", }}>T&C   |   PRIVACY POLICY</p>

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