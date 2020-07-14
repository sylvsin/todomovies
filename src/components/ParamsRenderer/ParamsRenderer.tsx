import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
  id: string;
};

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType>;

class ParamsRenderer extends React.Component<PropsType> {
  render() {
    return <div className="productId">{this.props.match.params.id}</div>;
  }
}

export default withRouter(ParamsRenderer);
