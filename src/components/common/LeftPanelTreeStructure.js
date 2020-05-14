import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Loading } from "../common/Loading";
import { Error } from "../common/Error";
import Tree from "../common/tree";
import { TreeHeader } from "./TreeHeader";
import { treeContext } from "../context";
import ObjectUtil from "../../util/ObjectUtil";
import JsonUtil from "../../util/JsonTreeStructureUtil";
import { changeSelectedNode } from "../../actions";

function LeftPanel(props) {
  const {
    loading,
    error,
    data,
    context,
    changeData,
    loadData,
    selectedNode,
    onAddNewFolderClick,
    onAddNewFileClick
  } = props;
  const jsonOps = JsonUtil.for(data);
  
  useEffect(() => {
    ObjectUtil.isEmpty(data) && loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onToggle = (node) => {
    const newData = jsonOps.togglePropForId(node.id, "isOpen");
    changeData(newData);
  };

  const onNodeSelection = (node, type) => {
    props.changeSelectedNode(node.id, type);
  };

  const getTreeHeader = () => {
    return (
      <TreeHeader
        canAddFolder={selectedNode.nodeId && selectedNode.nodeType === "folder"}
        canAddFile={selectedNode.nodeId ? true : false}
        onAddFolderSubmit = {onAddNewFolderClick}
        onAddFileSubmit = {onAddNewFileClick}
      />
    );
  };
  const getTreeStructure = (data, context, changeData) => (
    <>
      {getTreeHeader()}
      {ObjectUtil.isEmpty(data) ? (
        <div> no element</div>
      ) : (
        <Tree
          data={data}
          onNodeSelection={onNodeSelection}
          onToggle={onToggle}
          selectedNode={selectedNode.nodeId}
        />
      )}
    </>
  );

  const getErrorElement = (message) => <Error message={message} />;

  return (
    <>
      {(loading && <Loading />) ||
        (error && getErrorElement(error)) ||
        getTreeStructure(data, context, changeData)}
    </>
  );
}

const mapStateToProps = (state, props) => {
  const { context } = props;
  return {
   data:state[treeContext[context].stateDataReducer].data,
   loading:state.loading[treeContext[context].getResourcesActionType],
   error:state.error[treeContext[context].getResourcesActionType],
    selectedNode: state.selectedNode,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  let { context } = props;
  return {
    loadData: () => dispatch(treeContext[context].getDataReducer()),
    changeData: (data) =>
      dispatch(treeContext[context].changeDataReducer(data)),
    changeSelectedNode: (nodeId, nodeType) =>
      dispatch(changeSelectedNode(nodeId, nodeType)),
      onAddNewFolderClick : (componentName) => dispatch(treeContext[context].onAddNewFolderClick(componentName)),
      onAddNewFileClick : (componentName) => dispatch(treeContext[context].onAddNewFileClick(componentName))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
