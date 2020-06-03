import Head from 'next/head';
import classes from './index.module.css';
import Navbar from './components/navbar';
import Layout from './HOC/Layout';
export default function Home() {
  return (
    <Layout>
      <div className={classes.home}>
        <Navbar />
        <div className={classes.main}>
          <div className={classes.main_left}>
            <h1>CoronaVirus Outbreak</h1>
            <p>The coronavirus outbreak is affecting the lives of millions.</p>
          </div>
          <div className={classes.main_right}>
            <img className={classes.hero_img} src="/assets/virus.svg" />
          </div>
        </div>
        <div>
          <h2>Data Div</h2>
        </div>
      </div>
    </Layout>
  );
}
