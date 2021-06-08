import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}

      {/* header */}
      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(contex) {
  const products = await fetch('https://fakestoreapi.com/products').then(res =>
    res.json()
  );

  return {
    props: {
      products: products
    }
  };
}

// GET >>> https://fakestoreapi.com/products
