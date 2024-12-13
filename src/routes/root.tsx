import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Instagramrequest from '../screens/Instagramrequest'
import Succesverify from '../screens/Succesverify'
import Verifyhandle from '../screens/Verifyhandle'
import Unsuccesverify from '../screens/Unsuccesverify'
// import Facebookverify from '../screens/VerifyFb'

function Root() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/verifyhandle" element={<Verifyhandle />} />
            <Route path="/instagramrequest" element={<Instagramrequest />} />
            {/* <Route path ="/fb-verify" element={<Facebookverify/>}/> */}
            <Route path='/success' element={<Succesverify />} />
            <Route path='/unverify' element={<Unsuccesverify />} />
        </Routes>
    )
}

export default Root