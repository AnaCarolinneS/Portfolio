import React from "react";
import Header from '../components/Header'
import { HomeContainer } from '../styles/Homestyles'
import HomeHero from '../components/Header/Homehero'
import Experiencias from "../components/experiencias";
import Conhecimentos from "../components/conhecimentos";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <title>Ana Carolinne S.</title>
      <main className="container">
        <HomeHero />
        <Experiencias/>
        <Conhecimentos/>
        <Footer/>
      </main>
    </HomeContainer>

  )
}
