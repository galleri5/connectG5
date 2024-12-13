import React from 'react'
import facebookicon from "../assets/facebookicon.svg"

function Facebookverify() {
    return (
        <div style={{ padding: "20px 24px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <img style={{ width: "72px", height: "72px" }} src={facebookicon} alt="g5 logo" />
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#FAC912", textAlign: "center", lineHeight: "21px" }}>TO VERIFY YOUR ACCOUNT, INSTAGRAM REQUEST THE FOLLOW</p>
            </div>
        </div>
    )
}

export default Facebookverify