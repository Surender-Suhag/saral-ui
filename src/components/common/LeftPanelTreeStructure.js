import React from "react";
import { connect } from "react-redux";

import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import Tree from "../common/tree";
import { Get_COMPONENT_TREE } from "../../actions/types";
import { getComponents } from "../../actions";
import { TreeHeader } from "./TreeHeader";

const treeContext = {
  component: {
    folderPropName: "childNodes",
    filePropName: "childComponentsDetails",
    stateDataReducer: "component-nodes",
    stateLoading: Get_COMPONENT_TREE,
    stateError: Get_COMPONENT_TREE,
    getDataReducer: getComponents,
  },
};

class LeftPanel extends React.Component {
  componentDidMount() {
    this.props.getTreeData();
  }

  getErrorElement(){
    return <Error message = {this.props.error} />;
  }

  getTreeStructure(){
    const {data, context } = this.props;
    return (
      <div>
        <TreeHeader />
        <Tree
          data={data}
          folderPropName={treeContext[context].folderPropName}
          filePropName={treeContext[context].filePropName}
          onNodeSelection={this.props.onNodeSelection}
        />
      </div>
    )
  }
  render() {
    let { loading, error} = this.props;
    return loading ? (
      <Loading />
    ) : error ? (
      this.getErrorElement()
    ) :
   
      this.getTreeStructure()
   
  }
}

const mapStateToProps = (state, props) => {
  let { context } = props;
  return {
    loading: state.loading[treeContext[context].stateLoading],
    error: state.error[treeContext[context].stateError],
    data: state[treeContext[context].stateDataReducer],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  let { context } = props;
  return {
    getTreeData: () => dispatch(treeContext[context].getDataReducer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
