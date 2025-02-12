import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigatior">
        <div className="description-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          The I’M FROM Rice Toner is a brightening and hydrating toner that
          helps target dull, irritated or ageing skin. Created with ground Yeoju
          rice and 77.78% Goami extracts, this toner exfoliates impurities away
          for smoother, more hydrated skin. Perfect for dull, fatigued skin, as
          well as dry, irritated skin.
        </p>
        <p>
          Rice extract, Methylpropanediol, Triethylhexanoin, Hydrogenated poly
          (C6-14 olefin), Niacinamide, Pentylene glycol, Common Purslane
          extract, Rice bran extract, Japanese elm bark extract, Amaranthus
          caudatus seed extract, Hydrogenated lecithin, Distilled water,
          Polyglyceryl-10-myristate, Butylene glycol, Adenosine, Cellulose gum,
          Ethylhexylglycerin, 1,2-Hexanediol
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
