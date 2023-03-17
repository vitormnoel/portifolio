import Head from 'next/head';
import Content from '../components/content/home_content';

function HomePage() {
    const title = "(vitormnoel);"
    return(
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="data:,"></link>
            <meta/>
        </Head>
        
        <Content/>
        </>
    )
}

export default HomePage;