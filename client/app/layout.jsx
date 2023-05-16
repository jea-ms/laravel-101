import '@styles/globals.css'
import '@styles/components.css'
import { config } from "@fortawesome/fontawesome-svg-core";

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export const metadata = {
    title: "Company Inc.",
    description: 'Company Inc.'
}

const RootLayout = ({ children }) => {
    // Tell Font Awesome to skip adding the CSS automatically 
    // since it's already imported above
    config.autoAddCss = false;
    return (
        <html lang="en">
            <body>
                <Head>
                    <title>Company Inc.</title>
                    <link rel="icon" href="/" />
                </Head>
                <Header />
                <main className='text-black'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout