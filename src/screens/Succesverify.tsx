import React, { useState, useEffect } from 'react'
import tickicon from '../assets/tickicon.svg'
// import verfiy from "../assets/verifyimage.svg"
// import instagramimage from "../assets/instagramimage.svg"
// import facebookimage from "../assets/facebookimage.svg"
// import shareimage from "../assets/shareimage.svg"
import myntralogo from "../assets/myntralogo.svg"
import { toast } from 'react-toastify';



function Succesverify() {
    const [showSpreadsheet, setShowSpreadsheet] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);
    const [sheetUrl, setSheetUrl] = useState<string>('');
    const [postUrl, setPostUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const [postUrls, setPostUrls] = useState<string[]>([]);
    

    useEffect(() => {
        const fetchSheetUrl = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem('userData') || '{}');
                const response = await fetch('https://creator-app-backend.azurewebsites.net/get/content-sheet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phone: userData?.phone,
                        username: userData?.username
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoading(false);
                    setSheetUrl(data?.data?.content_sheet_link);
                    // setPostUrl(data?.data?.post_link);
                    setPostUrls(data?.data?.post_urls || []);
                } else {
                    toast.error("Failed to fetch sheet URL");
                }
            } catch (error) {
                toast.error("Error fetching sheet URL");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSheetUrl();
    }, []);

    const PostUrlsModal = () => (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            padding: '20px',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <button 
                onClick={() => setShowSpreadsheet(false)}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    padding: '8px 16px',
                    background: '#FAC912',
                    border: 'none',
                    borderRadius: '8px',
                    zIndex: 10000,
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Close
            </button>
            <div style={{
                marginTop: '80px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '100%',
                maxWidth: '600px'
            }}>
                {postUrls && postUrls.length > 0 ? (
                    postUrls.map((url, index) => (
                        <a 
                            key={index}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                padding: '15px',
                                background: '#FAC912',
                                color: '#000000',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                textAlign: 'center',
                                fontWeight: '500',
                                fontSize: '16px',
                                cursor: 'pointer',
                                wordBreak: 'break-all'
                            }}
                        >
                                {url}
                        </a>
                    ))
                ) : (
                    <div style={{ color: '#FAC912', textAlign: 'center' }}>
                        No post URLs available
                    </div>
                )}
            </div>
        </div>
    );

    const handleAcceptToSell = async () => {
        try {
            // Add your API call here
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const response = await fetch('https://creator-app-backend.azurewebsites.net/public/user-response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: userData?.phone,
                    username: userData?.username
                })
                // Add any body data if needed
                // body: JSON.stringify({ ... })
            });

            if (response.ok) {
                toast.success("Successfully accepted to sell!");
                setIsAccepted(true);
            } else {
                toast.error("Something went wrong!");
            }
        } catch (error) {
            toast.error("Failed to accept. Please try again.");
        }
    };

    return (
        <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", position: "relative" }} >
            <img src={myntralogo} style={{ position: "absolute", top: "30px", left: "20px" }} alt="g5 logo" />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                <img src={tickicon} alt="tickicon" />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <p style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF", textAlign: "center" }}>{isAccepted? "Successfully accepted to sell" : "Account successfully verified"}</p>
                    <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", textAlign: "center", lineHeight: "21px" }}>Thanks for verifying your account with us!
                        You can now sell your Instagram post content to Myntra. Below is the link to view the Instagram links you can sell.L</p>
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", marginTop: "20px", width: "100%" }}>
                <button 
                    onClick={() => setShowSpreadsheet(true)}
                    disabled={!sheetUrl || isLoading}
                    style={{ 
                        padding: "12px 20px", 
                        border: "1px solid rgba(246, 246, 246, 0.17)", 
                        borderRadius: "8px", 
                        background: (!sheetUrl || isLoading) ? "#808080" : "#FAC912", 
                        width: "100%", 
                        color: (!sheetUrl || isLoading) ? "#FFFFFF" : "black", 
                        marginTop: "8px",
                        cursor: (!sheetUrl || isLoading) ? "not-allowed" : "pointer"
                    }}
                >
                    {isLoading ? "LOADING..." : "VIEW POST LINKS"}
                </button>
                <button 
                    onClick={handleAcceptToSell}
                    disabled={isAccepted}
                    style={{ 
                        padding: "12px 20px", 
                        border: "1px solid rgba(246, 246, 246, 0.17)", 
                        borderRadius: "8px", 
                        background: isAccepted ? "#808080" : "#FAC912", 
                        width: "100%", 
                        color: isAccepted ? "#FFFFFF" : "black", 
                        marginTop: "8px",
                        cursor: isAccepted ? "not-allowed" : "pointer"
                    }}
                >
                    {isAccepted ? "ACCEPTED" : "ACCEPT TO SELL"}
                </button>
                <p style={{ fontSize: "14px", fontWeight: "400", color: "#C0C0C0", }}>CLICK THE BUTTON ABOVE</p>

            </div>

            {showSpreadsheet && <PostUrlsModal />}



        </div>
    )
}

export default Succesverify