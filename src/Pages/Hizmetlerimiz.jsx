import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";

const Hizmetlerimiz = () => {
  return (
    <div>
      {" "}
      <TopBar />
      <Header />
      <div className="flex justify-between w-full px-8 gap-4 mt-4">
        <div className="w-9/12">
          <h1 className="text-4xl font-bold mt-2">HİZMETLERİMİZ</h1>
          <p className="text-xl">
            Haber bülteni hazırlama ve sunma Haber araştırma ve raporlama
            Röportaj yapma Haber yayını için görsel materyal sağlanması
          </p>
          <p>
            Bir gazeteci olarak çeşitli hizmetlerin toplumumuz üzerindeki
            etkisine ilk elden tanık olma fırsatı buldum. Sağlıktan ulaşıma,
            eğitimden teknolojiye kadar bu hizmetler günlük hayatımızın
            şekillenmesinde önemli rol oynuyor. Ancak çoğu zaman gözden kaçan
            hizmetlerden biri de medyadır. Medya, her biçimiyle, bilgi sahibi
            olmamız ve bilinçli kararlar almamız için bize gerekli bilgileri
            sağlayan hayati bir hizmettir.
            <ul>
              <li>Sosyal medya yönetimi</li>
              <li>Grafik Tasarım</li>
              <li>İçerik yazma</li>
              <li>Sanal asistan hizmetleri</li>
              <li>Etkinlik planlama ve koordinasyon</li>
            </ul>
          </p>
        </div>

        <img
          src={require("../images/news.jpg")}
          className="w-[640px] h-[480px] object-cover "
          alt=""
        />
      </div>
    </div>
  );
};

export default Hizmetlerimiz;
