import * as React from "react";
import withLoading from "./withLoading";

interface DataProps {
  isLoading: boolean;
}

class Data extends React.Component<DataProps> {
  render() {
    return this.props.isLoading ? (
      <span>loading...</span>
    ) : (
      <ul>
        <li>satu</li>
        <li>dua</li>
        <li>tiga</li>
        <li>empat</li>
        <li>lima</li>
      </ul>
    );
  }
}

export default withLoading(Data);
