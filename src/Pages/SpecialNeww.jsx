import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SpecialNeww = () => {
  return (
    <div className="">
      <TopBar />
      <Header />
      <div className="info-main-box">
        <div className="bg-white/30 lg:p-8 p-4 rounded flex flex-col gap-4">
          <h1 className="lg:text-4xl text-xl text-center">
            Bakan Yusuf Tekin'in Eşi Müdürlük (EKYS) Sınavına Girip Hakkı İle
            Okul Müdürü Olmuştur. İşte Belgeler.
          </h1>
          <div className="flex flex-col  gap-4">
            <div id="special-img-box" className="w-full">
              <img
                src={require("../images/600622.jpg")}
                className="w-full max-h-[600px] object-cover h-auto "
                alt=""
              />
            </div>
            <div
              id="special-content-box"
              className="w-full flex flex-col gap-4"
            >
              <div className="special-box">
                <p className="special-content">
                  Bugün bazı internet haber sitelerinden Milli Eğitim Bakanı
                  Yusuf Tekin'in eşi Ayşe Tekin'in Milli Eğitim Bakanı Yusuf
                  Tekin’in müsteşar olduğu dönemde 'vekaleten' Halk Eğitim
                  Merkezi Müdürü olarak görev yaptığı anlaşıldığı ve Ayşe Tekin
                  daha sonra da okul müdürü olarak atandığına dair haberler yer
                  aldı.
                </p>
                <p className="special-content">
                  Öncelikle Bakan Yusuf Tekin'in 2018 yılından MEB Müsteşarlığı
                  görevinden ayrıldığını Eşi Ayşe Tekin'in ise 2022 yılında
                  Müdür olarak atandığı ifade edelim.
                </p>
              </div>
              <div className="special-box">
                <h1 className="special-header">
                  AYŞE Tekin EKYS sınavını kazanarak Müdür Olmuş!
                </h1>
                <p className="special-content">
                  Bilindiği üzere İlk defa müdür olarak atanmak için öncelikle;
                  ÖSYM tarafından yapılan EKYS sınavına girip 60 ve üstü puan
                  almak gerekiyor. Devamın da ise yapılan Mülakat sonucu alınan
                  puanın yüzde 20'si, EK-1 Değerlendirme formuna göre alınan
                  puanın yüzde 30'u ve EKYS Puanın ise yüzde 50'si alınarak
                  ortaya çıkan atamaya esas puana göre Milli Eğitim
                  Müdürlüklerince açılan Münhal Okullara Müdürlük için başvuru
                  yapılabiliyor.
                </p>
                <p className="special-content">
                  Ankara İl Milli Eğitim Müdürlüğü tarafından herkese açık bir
                  şekilde liste halinde açıklanan 2022 yılına ait yönetici atama
                  listesi ve puanlara göre;
                </p>
                <p className="special-content">
                  2022 Yılında Ankara Milli Eğitim Müdürlüğünce yayınlanan İlk
                  Defa Yönetici Atamaya dair yayınlanan listede Ayşe Tekin'in
                  <b>62.6125</b> Atamaya Esas Puanının olduğu açıklanmış .{" "}
                  <span className="font-bold">(Belge1)</span>
                </p>
                <p className="special-content">
                  2022 Yılında Ankara İl Milli Eğitim Müdürlüğünce yayınlanan
                  Sözlü Sınav Sonuçları Listesinde Ayşe Tekin'in <b>69</b>{" "}
                  Mülakat puanı aldığı açıklanmış.{" "}
                  <span className="font-bold">(Belge2)</span>
                </p>
                <p className="special-content">
                  2022 Yılında Ankara İl Milli Eğitim Müdürlüğünce yayınlanan
                  Ek-1 Değerlendirme Form Listesinde Ayşe Tekin'in <b>54.125</b>{" "}
                  puan aldığı açıklanmış.{" "}
                  <span className="font-bold">(Belge3)</span>
                </p>
                <p className="special-content">
                  Yukarda ki puanlara göre yönetmelik gereği yapılan hesaplamada
                  Ayşe Tekin'in <b>62.6125</b> puanına istinaden EKYS Puanında
                  mülakat puanına yakın bir puan olduğu net bir şekilde ortaya
                  çıkıyor. Özetle Bakan Yusuf Tekin'in eşi Bakan Yusuf Tekin
                  MEB'de bir görevde bulunmadığı dönemde Müdürlük için gerekli
                  olan ve ÖSYM tarafından yapılan bir sınava girip başarılı
                  olduktan sonra Mülakata girip Yazılı Sınavına yakın puan
                  aldıktan sonra kendi puanları ile Satı Kadın Mesleki ve Teknik
                  Lisesine Müdür olarak atanıyor.
                </p>
                <p className="special-content">
                  Yukarda anlatıldığı gibi ve aşağıdaki belgelerde görüldüğü
                  üzere Bakan Tekin'in eşi her öğretmen gibi süreçlerden geçerek
                  kendi aldığı sınav puanına göre şu an okul müdürlüğü
                  yapmaktadır. Sonuç olarak, Milli Eğitim Bakanlığı Müsteşarlığı
                  yapmış olan ve şu an Milli Eğitim Bakanı Yusuf Tekin bu konuda
                  eşine dair bir kayırma yapmak isteseydi bugün Yusuf Tekin'in
                  eşi Okul Müdürlüğü yerine farklı kurumlarda ve ya daha farklı
                  bir pozisyonda çok rahat olabilirdi.....
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-10">
              <div id="special-img-box" className="">
                <h1 className="special-header mb-2">Belge 1</h1>
                <img
                  src={require("../images/belge2.jpg")}
                  className="max-w-full h-auto object-cover max-md:pl-4"
                  alt=""
                />
              </div>
              <div id="special-img-box" className="">
              <h1 className="special-header mb-2">Belge 2</h1>

                <img
                  src={require("../images/belge1.jpg")}
                  className="max-w-full h-auto object-cover max-md:pl-4"
                  alt=""
                />
              </div>
              <div id="special-img-box" className="">
              <h1 className="special-header mb-2">Belge 3</h1>

                <img
                  src={require("../images/belge3.jpg")}
                  className="max-w-full h-auto object-cover max-md:pl-4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialNeww;
