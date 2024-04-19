import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Hizmetlerimiz = () => {
  return (
    <div className="">
      {" "}
      <TopBar />
      <Header />
      <div className="info-main-box">
        <div className="info-box">
          <div className="content-box">
            <h1 className="content-h1">HİZMETLERİMİZ</h1>
            <p className="content-text">
              Haber bülteni hazırlama ve sunma Haber araştırma ve raporlama
              Röportaj yapma Haber yayını için görsel materyal sağlanması
            </p>
            <p className="content-text">
              Bir gazeteci olarak çeşitli hizmetlerin toplumumuz üzerindeki
              etkisine ilk elden tanık olma fırsatı buldum. Sağlıktan ulaşıma,
              eğitimden teknolojiye kadar bu hizmetler günlük hayatımızın
              şekillenmesinde önemli rol oynuyor. Ancak çoğu zaman gözden kaçan
              hizmetlerden biri de medyadır. Medya, her biçimiyle, bilgi sahibi
              olmamız ve bilinçli kararlar almamız için bize gerekli bilgileri
              sağlayan hayati bir hizmettir.
              <ul className="list-style	list-disc pl-10 mt-4">
                <li className="my-1">Sosyal medya yönetimi</li>
                <li className="my-1">Grafik Tasarım</li>
                <li className="my-1">İçerik yazma</li>
                <li className="my-1">Sanal asistan hizmetleri</li>
                <li className="my-1">Etkinlik planlama ve koordinasyon</li>
              </ul>
            </p>
          </div>

          <div className="max-lg:flex max-lg:justify-center max-lg:items-center">
            <img
              src={require("../images/news.jpg")}
              className="w-[640px] h-[480px] object-cover "
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hizmetlerimiz;
