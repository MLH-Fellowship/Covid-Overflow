import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import covidAxios from './axios';
import classes from './index.module.scss';
import Navbar from './components/navbar';
import Layout from './HOC/Layout';
import Button from './components/Button';

export default function Home() {
  const [countryName, setCountryName] = useState(undefined);
  const [countryData, setCountryData] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      // API Call to Find User IP
      const getUserIP = await axios.get('https://api.ipify.org');
      const getIPFromLocalStorage = JSON.parse(localStorage.getItem('userIP'));
      const userCurrentIP = getUserIP.data;

      // if User visits First Time or location has been changed
      if (!getIPFromLocalStorage || userCurrentIP !== getIPFromLocalStorage) {
        // Store User IP in Local Storage
        localStorage.setItem('userIP', JSON.stringify(userCurrentIP));
        // API Call to Find User Country name
        const getUserLocationData = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=c244e709e5a54d0898b72b1e2905a3ee&ip=${userCurrentIP}&fields=country_name`,
        );
        setCountryName(getUserLocationData.data.country_name);
        // Store User Country in Local Storage
        localStorage.setItem(
          'userCountry',
          JSON.stringify(getUserLocationData.data.country_name),
        );
        // API Call for COVID Stats
        const userCountry = getUserLocationData.data.country_name;
        const res = await covidAxios.get(`countries/${userCountry}`);
        setCountryData(res.data);
      } else {
        const getCountryFromLocalStorage = JSON.parse(
          localStorage.getItem('userCountry'),
        );
        setCountryName(getCountryFromLocalStorage);
        const res = await covidAxios.get(
          `countries/${getCountryFromLocalStorage}`,
        );
        setCountryData(res.data);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(countryName);
    console.log(countryData);
  }, [countryData]);
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
            <h2>In {countryName ? countryName : 'N/A'}</h2>
            <ul>
              <li>
                <p>Cases</p>
                <span>{countryData ? countryData.cases : 'N/A'}</span>
              </li>
              <li>
                <p>Deaths</p>
                <span>{countryData ? countryData.deaths : 'N/A'}</span>
              </li>
              <li>
                <p>Recovered</p>
                <span>{countryData ? countryData.recovered : 'N/A'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
