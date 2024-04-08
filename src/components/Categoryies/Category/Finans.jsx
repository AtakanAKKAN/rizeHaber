import axios from "axios";
import React, { useEffect, useState } from "react";

const Finans = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.sabah.com.tr/rss/finansborsa-haberleri.xml"
        );
        // XML'den JSON'a dönüştürme
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "application/xml");
        const items = xml.querySelectorAll("item");
        const data = Array.from(items)
          .slice(0, 4)
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
    <div className="main-box ">
      <h1 className="header">Finans</h1>
      <ul className="">
        {feedData.map((item, index) => (
          <li key={index} className="list-item">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="image "
              />
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

export default Finans;





