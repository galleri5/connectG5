import React from 'react'
import g5logo from '../assets/g5logo.svg'
import myntralogo from "../assets/myntralogo.svg"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    
    return (
        <>
            <div style={{ padding: "20px 24px" }} >
                <img src={g5logo} alt="g5 logo" />
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", justifyContent: "center" }}>
                    <img src={myntralogo} alt="myntralogo" />
                    <p style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF", textAlign: "center" }}>SELL YOUR INSTA CONTENT TO MYNTRA AND EARN MONEY</p>
                    <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", textAlign: "center" }}>AS OFFICIAL PARTNER TO MYNTRA, YOU CAN SELL CONTENT TO US</p>
                </div>

                <div style={{ borderTop: "2px solid #FFFFFF14", marginTop: "48px", marginBottom: "48px" }}>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "36px", }}>
                    <div >
                        <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0" }}>Email address <span style={{ fontSize: "16px", fontWeight: "600", color: "#EA3248" }}>*</span></p>
                        <input style={{ padding: "16px 14px", border: "1px solid rgb(246 246 246 / 17%)", borderRadius: "8px", background: "#000000", width: "100%", color: "white", marginTop: "8px" }} type="email" placeholder="Enter a valid address" />
                    </div>

                    <div>
                        <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0" }}>Mobile Number <span style={{ fontSize: "16px", fontWeight: "600", color: "#EA3248" }}>*</span></p>
                        <input style={{ padding: "16px 14px", border: "1px solid rgb(246 246 246 / 17%)", borderRadius: "8px", background: "#000000", width: "100%", color: "white", marginTop: "8px" }} type="number" placeholder="Enter your mobile number" />
                    </div>

                    <div>
                        <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0" }}>Instagram Handle <span style={{ fontSize: "16px", fontWeight: "600", color: "#EA3248" }}>*</span></p>
                        <input style={{ padding: "16px 14px", border: "1px solid rgb(246 246 246 / 17%)", borderRadius: "8px", background: "#000000", width: "100%", color: "white", marginTop: "8px" }} type="text" placeholder="Enter your instagram handle" />
                    </div>
                </div>

            </div>
            <div
                style={{
                    position: "fixed",
                    padding: "20px",
                    bottom: "0",
                    background: "black",
                    maxWidth: "480px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <button
                    onClick={() => navigate('/verifyhandle')}
                    style={{
                        padding: "16px 14px",
                        border: "1px solid rgba(246, 246, 246, 0.17)",
                        borderRadius: "8px",
                        background: "#FAC912",
                        width: "100%",
                        color: "black",
                        marginTop: "8px",
                    }}
                >
                    SELL YOUR CONTENT NOW
                </button>
            </div>
        </>
    )
}

export default Home