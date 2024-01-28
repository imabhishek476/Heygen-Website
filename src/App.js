import './App.css';
import MainFooter from './component/Footer/MainFooter';
import HomeShowcase from './component/HomeShowcase/HomeShowcase';
import Navbar from './component/navbar/navbar'
import PageWrapper from './component/PageWrapper/PageWrapper'
import PageWrapper2 from './component/PageWrapper2/PageWrapper2';
import SectionContainer from './component/SectionContainer/SectionContainer';
import SectionCreated from './component/SectionCreated/SectionCreated';

import React, { useEffect } from 'react';



const App = () => {
  useEffect(() => {
    if (window.top !== window) {
      setTimeout(() => {
          document.body.innerHTML = ''
          console.log("working Innerhtml")
      }, 1000);
    }
  }, []);

  return (
    <>
      <Navbar/>
      <PageWrapper/>
      <HomeShowcase/>
      <SectionCreated/>
      <SectionContainer/>
      <PageWrapper2/>
      <MainFooter/>
      
    </>
  );
}

export default App;
