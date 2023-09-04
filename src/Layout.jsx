import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = ({photos}) => {
    return (
        <>
            <Header photos={photos}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout