import React from "react";
import Header from "../components/Header/Header";
import TopHeader from "../components/TopBar/TopBar";
import Hero from "../components/Hero/Hero";
import Horizontal from "../Layout/Horizontal/Horizontal";
import Categories from "../components/Categoryies/Categories";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <Horizontal />
      <Categories />

      <Footer />

      {/* 

    <h1>RSS Feed</h1>
    <ul>
      {feedData.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
          {item.image && <img src={item.image} alt={item.title} />}
          <p>{item.description}</p>
          <p>{item.pubDate}</p>
        </li>
      ))}
    </ul> */}
    </div>
  );
};

export default HomePage;
