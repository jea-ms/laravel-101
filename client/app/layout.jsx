import '@styles/globals.css'
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export const metadata = {
    title: "Company Inc.",
    description: 'Company Inc.'
}

const RootLayout = ({ children }) => {
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