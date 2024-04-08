import React, { useEffect } from "react";

const ParaceviriciWidget = () => {

  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paracevirici.com/servis/widget/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="W1942"></div>;
};

export default ParaceviriciWidget;
