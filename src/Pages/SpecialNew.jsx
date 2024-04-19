import React from "react";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";

const SpecialNew = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <div className="info-main-box">
        <div className="bg-white/30 lg:p-8 p-4 rounded flex flex-col gap-4">
          <h1 className="lg:text-4xl text-xl text-center">
            Ankara Rizeliler Günü Etkinlikleri Lasman Tanıtım Toplantısı Yapıldı
          </h1>
          <div className="flex flex-col  gap-4">
            <div id="special-img-box" className="w-full">
              <img
                src={require("../images/specialNew.jpg")}
                className="w-full h-[600px] object-cover"
                alt=""
              />
            </div>
            <div
              id="special-content-box"
              className="w-full flex flex-col gap-4"
            >
              <div className="special-box">
                <h1 className="special-header">
                  Rize'nin Yeşil Cenneti Ankara'da Tanıtılıyor
                </h1>
                <p className="special-content">
                  2-5 Mayıs tarihleri arasında Ankara Millet Bahçesi'nde
                  yapılacak Ankara Rizeliler günü etkinliklerinin lasman tanıtım
                  toplantısı 19 Nisan 2024 tarihinde Düzce'de gerçekleşti.
                  Toplantıda konuşan Ankara RİDEF Başkanı Muammer Bostan, bu
                  seneki etkinliklerin çayın 100. yılına özel olacağını ve 4
                  mevsim Rize temasını işleyeceğini söyledi. Bostan, "Rize'nin
                  turizm potansiyelinin 4 mevsime yayılması gerektiğini
                  düşünüyoruz. Bu konuda paneller, seminerler ve görseller
                  olacak" dedi.
                </p>
                <p className="special-content">
                  Bostan ayrıca, Ankara'daki Rize günlerinde sadece Rizeli
                  esnafların yer alacağını ve bu esnaflara her türlü kolaylığın
                  gösterileceğini belirtti. Rize'deki kooperatiflerin de
                  etkinliğe katılması için çağrıda bulunan Bostan, "Onlara her
                  türlü imkânı sunmaya hazırız. Gelsinler Ankara'da bugüne
                  kadarki yapmış olduğu ürünlerini sergilesinler" dedi.
                </p>
              </div>
              <div className="special-box">
                <h1 className="special-header">Atıksız Bir Etkinlik Hedefi</h1>

                <p className="special-content">
                  Rize Dernekler Federasyonu Başkan Vekili Ali Akyüz ise
                  dünyanın zor bir süreçten geçtiğini ve su kaynaklarının
                  önemini vurguladı. Akyüz, "Ankara'da yapacağımız etkinlikte
                  birçok faaliyet olacak. Mühendislik çalışmaları değil ama
                  toplumda bir farkındalık yaratmamız lazım. Dokunduğumuz
                  takdirde sonuçlar alırız. Çünkü tarladan sofraya gelen gıdada
                  bile % 144 israf oluyor" dedi.
                </p>

                <p className="special-content">
                  Akyüz ayrıca, etkinlikte atıksız bir ortam oluşturmak için
                  çalışmalar yapılacağını da sözlerine ekledi. "Çocuklara
                  dokunan çalışmalar var. Başkanımızın da söylediği gibi çayın
                  100. yılında diyoruz ki 1 milyon tane bardak olarak çay
                  dağıtacağız ama 10.000 tane paket vereceğiz. Atığı getirip
                  çayı götürecekler onları çocuklara geri dönüşümü
                  göstereceğimiz. Bir şey olacak çünkü hiçbir şeyimiz
                  atmamalıyız Son ana kadar. Değerlendirmeliyiz, onun için
                  atıkla ilgili çalışmalarımız olacak" dedi.
                </p>
                <p className="special-content">
                  Etkinlikte ayrıca, Rize mutfağından lezzetler, yöresel ürünler
                  ve el sanatları da sergilenecek.
                </p>
              </div>
              <div className="special-box">
                <h1 className="special-header mb-2">Etkinlik Programı:</h1>
                <ul className="special-content list-disc mb-4">
                  <li>
                    2 Mayıs: Açılış töreni, Rize horonları ve yöresel müziklerL
                  </li>
                  <li>
                    3 Mayıs: Paneller, seminerler ve Rize mutfağından lezzetler
                  </li>
                  <li>
                    4 Mayıs: Yöresel ürünler ve el sanatları sergisi, çocuklara
                    yönelik etkinlikler
                  </li>
                  <li>
                    5 Mayıs: Kapanış töreni ve Rize'den Ankara'ya selamlar
                  </li>
                </ul>
                <h1 className="special-header mb-2">
                  Etkinlik Hakkında Bilgi Almak için:
                </h1>
                <ul className="special-content list-disc">
                  <li>
                    Ankara Rizeliler Dernekleri Federasyonu: 0312 456 78 90
                  </li>
                  <li>Ankara Millet Bahçesi: 0312 123 45 67</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialNew;
