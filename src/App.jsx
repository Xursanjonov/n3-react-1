import React from 'react';
import { Header } from './components/Header';
import { HeroCards } from './components/hero';
import { CatigorySection } from "./components/catigory-card";
import { ProductSection } from './components/product-card';
import { Section3 } from './components/section3';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <HeroCards/>
      <CatigorySection/>
      <ProductSection />
      <Section3 />
      <Footer />
    </>
  )
}

export default App
