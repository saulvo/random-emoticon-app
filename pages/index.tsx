import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import Form from '../components/Form';
import Layout from '../components/Layout';
const ResultList = dynamic(() => import('../components/ResultList'));

const Home: NextPage = () => {
  const [result, setResult] = useState<string[]>([]);
  return (
    <Layout>
      <Head>
        <title>Random Emoticon App</title>
        <meta name='description' content='Simple app to generate random emoticons' />
      </Head>
      <Form setResult={setResult} />
      {result.length > 0 && <ResultList data={result.join('')} />}
    </Layout>
  );
};

export default Home;
