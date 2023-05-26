import '@styles/globals.css'
import '@styles/components.css'
import { config } from "@fortawesome/fontawesome-svg-core";
import 'react-tooltip/dist/react-tooltip.css'

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Provider from '@components/Provider';

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
                <Provider>
                <Head>
                    <title>Company Inc.</title>
                    <link rel="icon" href="/" />
                </Head>
                <Header />
                <main className='text-black'>
                    <section className="text-gray-600 body-font">
                        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
                                {children}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout