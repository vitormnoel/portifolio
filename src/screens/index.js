import Head from 'next/head';
import Content from '../components/content/home_content';

function HomePage() {
    const title = "(vitormnoel);"
    return(
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="data:,"></link>
            <meta name='description' content='vitor manoel - portifolio page'/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        
        <Content/>
        </>
    )
}

export default HomePage;