import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';

import Content from '../components/content';

function HomePage(props) {
    const title = "(vitormnoel);"
    return(
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="data:,"></link>
            <meta name='description' content='vitor manoel portfolio. vitormnoel'/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        
        <Content content={props.header} projects={props.projects}/>
        </>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "dummy_data.json");
    const jsonData = await fs.readFile(filePath);
  
    const data = JSON.parse(jsonData);
  
    return {
      props: {
        header: data.header,
        projects: data.projects,
      },
    };
  }

export default HomePage;