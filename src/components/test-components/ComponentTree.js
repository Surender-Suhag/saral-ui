import React from "react";
import { connect } from "react-redux";

import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import Tree from "../common/tree";
import { getComponents } from "../../actions";
import { Get_COMPONENT_TREE } from "../../actions/types";

class ComponentTree extends React.Component {
  componentDidMount() {
    this.props.getComponents();
  }

  onNodeSelection = (node) => {};

  render() {
    let { loading, error, componentNodes } = this.props;
    console.log(componentNodes);
    return loading ? (
      <Loading />
    ) : error ? (
      <Error message = {this.props.error} />
    ) : (
      <Tree
        data={this.props.componentNodes}
        onNodeSelection={this.onNodeSelection}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.loading[Get_COMPONENT_TREE],
  error: state.error[Get_COMPONENT_TREE],
  componentNodes: state["component-nodes"],
});
export default connect(mapStateToProps, { getComponents })(ComponentTree);
