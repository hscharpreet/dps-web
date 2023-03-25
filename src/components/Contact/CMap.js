import React from "react";

const CMap = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            style={{
              width: "100%",
              height: "550px",
            }}
            className="gmap_iframe"
            width="100%"
            title="map"
            src="https://maps.google.com/maps?width=913&amp;height=861&amp;hl=en&amp;q=divine pulic school ahrora up&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CMap;
