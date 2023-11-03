import React, { Suspense } from 'react'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

export default function DefaultLayout({ children }) {
    return (
        <Suspense fallback={<>Loading...</>}>
            <header className='px-20 border-b-[1px] border-gray-200'>
                <Header searchBar />
            </header>
            <main>
                {children}
            </main>
            <footer className='px-20 bg-[#F7F7F7]'>
                <Footer />
            </footer>
        </Suspense>
    )
}
