import React from 'react'
import tickicon from '../assets/tickicon.svg'
// import verfiy from "../assets/verifyimage.svg"
// import instagramimage from "../assets/instagramimage.svg"
// import facebookimage from "../assets/facebookimage.svg"
// import shareimage from "../assets/shareimage.svg"
import myntralogo from "../assets/myntralogo.svg"



function Succesverify() {
    return (
        <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", position: "relative" }} >
            <img src={myntralogo} style={{ position: "absolute", top: "30px", left: "20px" }} alt="g5 logo" />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                <img src={tickicon} alt="tickicon" />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF", textAlign: "center" }}>Account successfully verified</p>
                    <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", textAlign: "center", lineHeight: "21px" }}>Thanks for verifying your account with us!
                        You can now sell your Instagram post content to Myntra. Below is the link to view the Instagram links you can sell.L</p>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", marginTop: "20px", width: "100%" }}>
                <button style={{ padding: "12px 20px", border: "1px solid rgba(246, 246, 246, 0.17)", borderRadius: "8px", background: "#FAC912", width: "100%", color: "black", marginTop: "8px" }}>VIEW POST LINKS</button>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", }}>CLICK THE BUTTON ABOVE</p>

            </div>



        </div>
    )
}

export default Succesverify