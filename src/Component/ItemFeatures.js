import React, { Component } from "react";
import axios from "axios";
import FeatureList from "./FeatureList";

export default class ItemFeatures extends Component {
  constructor() {
    super();
    this.state = {
      currentItemId: 666,
      featuresArray: [
        {
          featureName: "loading",
          featureDescription: "loading"
        }
      ]
    };

    this.handleItemChange = this.handleItemChange.bind(this);
  }

  componentDidMount() {
    const { currentItemId } = this.state;
    this.handleItemChange(currentItemId);
  }

  handleItemChange(itemId) {
    axios
      .get(`http://localhost:5002/api/features/${itemId}`)
      .then(response => {
        const { featuresList, featureId } = response.data;
        this.setState({
          currentItemId: featureId,
          featuresArray: featuresList
        });
      })
      .catch(console.error);
  }

  render() {
    const { featuresArray } = this.state;
    const features = featuresArray.map((itemFeature, index) => {
      return <FeatureList key={index} featureObj={itemFeature} />;
    });
    return (
      <div className={"wrapper"}>
        <h3 className={"heading"}>Features</h3>
        <hr role={"seperation"} />
        <div>{features}</div>
      </div>
    );
  }
}
