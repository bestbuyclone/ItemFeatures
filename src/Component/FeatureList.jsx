import React from "react";

const FeatureList = props => {
  const { feature, featureDescription } = props.featureObj;
  return (
    <div>
      <h4 className={"feature-name"}>{feature}</h4>
      <p className={"feature-description-p"}>{featureDescription}</p>
    </div>
  );
};

export default FeatureList;
