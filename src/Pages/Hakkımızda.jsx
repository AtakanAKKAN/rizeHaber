import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Hakkımızda = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <div className="info-main-box">
        <div className="info-box ">
          <div className="content-box">
            <h1 className="content-h1">Hakkımızda</h1>
            <p className="content-text ">
              Muhabir53.. dünyanın dört bir yanından güncel ve güvenilir haber
              ve bilgiler sunan lider bir haber platformudur. Deneyimli gazeteci
              ve muhabirlerden oluşan ekibimiz siyaset, iş dünyası, teknoloji,
              eğlence, spor ve daha pek çok konuyu kapsayan en son haberleri
              size ulaştırmak için yorulmadan çalışıyor. Okuyucularımıza dış
              kaynakların hiçbir etkisi veya önyargısı olmadan doğru ve tarafsız
              haberler sunmaya kararlıyız.
            </p>
          </div>
          <div className="content-img-box">
            <img
              src={require("../images/journalist.jpg")}
              className="content-img"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hakkımızda;
