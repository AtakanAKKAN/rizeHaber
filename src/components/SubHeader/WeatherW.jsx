import React, { useEffect } from "react";

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://app2.weatherwidget.org/js/?id=ww_518f30dcacacc";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="ww_518f30dcacacc"
      v="1.3"
      loc="id"
      a={JSON.stringify({
        t: "responsive",
        lang: "tr",
        sl_lpl: 1,
        ids: ["wl5784"],
        font: "Arial",
        sl_ics: "one_a",
        sl_sot: "celsius",
        cl_bkg: "image",
        cl_font: "#FFFFFF",
        cl_cloud: "#FFFFFF",
        cl_persp: "#81D4FA",
        cl_sun: "#FFC107",
        cl_moon: "#FFC107",
        cl_thund: "#FF5722",
      })}
    >
      Daha fazla hava durumu tahmini:{" "}
      <a
        href="https://oneweather.org/tr/istanbul/15_days/"
        id="ww_518f30dcacacc_u"
        target="_blank"
        rel="noreferrer"
      >
        İstanbulda 15 günlük hava durumu
      </a>
    </div>
  );
};

export default WeatherWidget;
