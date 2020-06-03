import Head from 'next/head';
import classes from './index.module.scss';
import Navbar from './components/navbar';
import Layout from './HOC/Layout';
import Button from './components/Button';

export default function Home() {
  return (
    <Layout>
      <div className={classes.home}>
        <Navbar />
        <div className={classes.main}>
          <div className={classes.main_hero}>
            <div className={classes.main_left}>
              <h1>CoronaVirus Outbreak</h1>
              <p>
                The coronavirus outbreak is affecting the lives of millions.
              </p>
              <div>
                <Button className={classes.main_btn}>
                  <a className={classes.content} href="/map">
                    Visualize
                  </a>
                </Button>
              </div>
            </div>
            <div className={classes.main_right}>
              <img className={classes.hero_img} src="/assets/virus.svg" />
            </div>
          </div>
          <div className={classes.main_footer}>
            <h2>In Russia</h2>
            <ul>
              <li>
                <p>Cases</p>
                <span>32432423</span>
              </li>
              <li>
                <p>Deaths</p>
                <span>32432423</span>
              </li>
              <li>
                <p>Recovered</p>
                <span>32432423</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
