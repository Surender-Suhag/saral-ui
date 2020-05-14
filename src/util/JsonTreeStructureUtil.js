const JsonTreeStructureUtil = Object.create(null);

JsonTreeStructureUtil.for = (data) => {

  const actionToTogglePropOnNode = propName => node => {
    let value = node[propName];
        if (value === undefined) return { ...node, [propName]: true };
        else return { ...node, [propName]: !value };
  }

  const actionToAddFolderOnNode = folderNode => node => {
    return {...node,childFolders:[...node.childFolders,folderNode]}
  }

  const actionToAddFileNodes = fileNode => node => {
    return {...node,childFiles:[...node.childFiles,fileNode]}

  }

  function callRecursiveActionOnMatchingNode(currentNode,id,action) {
    if (currentNode.id === id) {
      return action(currentNode);
    }

    for (let i = 0; i < currentNode.childFolders.length; i++) {
      let temp = callRecursiveActionOnMatchingNode(currentNode.childFolders[i],id,action);
      if (temp !== currentNode.childFolders[i]) {
        let changedData = {
          ...currentNode,
          childFolders: Object.assign([], currentNode.childFolders, {
            [i]: temp,
          }),
        };
        return changedData;
      }
    }
    return currentNode;
  }

  const togglePropForId = (id, propName) => {   
    return callRecursiveActionOnMatchingNode(data,id,actionToTogglePropOnNode(propName));
  };

  const addFolderToNode = (parentNodeId,node) => {
    return callRecursiveActionOnMatchingNode(data,parentNodeId,actionToAddFolderOnNode(node));
  }

  const addFileToNode = (parentNodeId,node) => {
    return callRecursiveActionOnMatchingNode(data,parentNodeId,actionToAddFileNodes(node));
  }

  return { togglePropForId,addFolderToNode,addFileToNode };
};

export default JsonTreeStructureUtil;  