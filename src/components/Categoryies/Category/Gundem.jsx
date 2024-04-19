import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gundem = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.rizeninsesi.net/rss.xml");
        // XML'den JSON'a dönüştürme
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "application/xml");
        const items = xml.querySelectorAll("item");
        const data = Array.from(items)
          .slice(0, 20)
          .map((item) => ({
            title: item.querySelector("title").textContent,
            link: item.querySelector("link").textContent,
            description: item.querySelector("description").textContent,
            pubDate: new Date(
              item.querySelector("pubDate").textContent
            ).toLocaleString(), // Format the date
            image: item.querySelector("enclosure")
              ? item.querySelector("enclosure").getAttribute("url")
              : null,
          }));
        setFeedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-box " id="sonDakka">
      <h1 className="header">Son Dakika</h1>
      <ul className="h-[650px] overflow-auto sonDakka">
        <li className="list-item">
          <img
            src={require("../../../images/specialNew.jpg")}
            alt=""
            className="image"
          />
          <div className="content">
            <Link to="/ankara-rize-günleri">
              Bostan: “Ankara’daki Rize Günlerini Çay Temalı Ağırlıklı
              Yapacağız”
            </Link>
            <p>Tarih: 19.04.2024 13.02.26</p>
          </div>
        </li>

        {feedData.map((item, index) => (
          <li key={index} className="list-item">
            {item.image && (
              <img src={item.image} alt={item.title} className="image " />
            )}
            <div className="content">
              <a href={item.link}>{item.title}</a>
              <p>Tarih: {item.pubDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gundem;
