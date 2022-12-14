import React from "react";

const CMap = () => {
  return (
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            style={{
              width: "100%",
              height: "950px",
            }}
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=913&amp;height=861&amp;hl=en&amp;q=divine pulic school ahrora up&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CMap;
