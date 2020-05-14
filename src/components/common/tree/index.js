import React from "react";
// import _ from "lodash";
import TreeNode from "./TreeNode";

const Tree = (props) => (
  <TreeNode {...props} node={props.data} level={0} type="folder" />
);

export default Tree;
