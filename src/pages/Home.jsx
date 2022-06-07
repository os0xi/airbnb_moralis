import React from "react";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import HomeCallToAction from "../components/CallToAction/CallToAction";
function Home() {
  return (
    <>
      <Background />
      <Header page="home" />
      <SearchBar />
      <HomeCallToAction />
    </>
  );
}

export default Home;
