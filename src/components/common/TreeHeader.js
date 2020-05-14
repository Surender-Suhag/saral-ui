import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { FiFilePlus, FiFolderPlus } from "react-icons/fi";
import {useSelector} from 'react-redux';
import Modal from './newItemModal';
import {treeContext} from '../context';

const StyledHeader = styled.div`
  background-color: #dcdcdc;
  display: flex;

  align-items: center;

  .icon {
    margin: 5px;
    margin-left: 8px;
    margin-right: 8px;
    color: darkslategray;
  }
  .disabled.icon {
    color: silver;
  }
`;

export const TreeHeader = (props) => {
  const { canAddFolder, canAddFile, onAddFolderSubmit,onAddFileSubmit } = props;
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);
  const [showNewFileModal, setShowNewFileModal] = useState(false);

  const [submitActive, setSubmitActive] = useState(false);
  const context = useSelector((state) => state.context);
  const  error  = useSelector(
    (state) => context && state.error[treeContext[context].addResourcesActionType]
  );
  const loading = useSelector(
    (state) => context && state.loading[treeContext[context].addResourcesActionType]
  );

  const onSubmitClick = addResorceAction => async (name) => {
    
    await addResorceAction(name);
    setSubmitActive(true);
  };

  const onCancelClick = () => {
    setSubmitActive(false);
    setShowNewFolderModal(false);
    setShowNewFileModal(false);

  }

  useEffect(() => {
    if (submitActive && !error && !loading) {
      setSubmitActive(false);
      setShowNewFolderModal(false);
      setShowNewFileModal(false);
    }
  }, [submitActive,loading]);

  return (
    <StyledHeader>
      <FiFolderPlus
        className={"icon shadow-lg" + (canAddFolder ? "" : " disabled")}
        size={"1.5em"}
        title="Add Folder"
        onClick={
          canAddFolder
            ? () => setShowNewFolderModal(!showNewFolderModal)
            : null
        }
      />
      <FiFilePlus
        className={"icon shadow-lg" + (canAddFile ? "" : " disabled")}
        size={"1.5em"}
        title="Add File"
        onClick={
          canAddFile
            ? () => setShowNewFileModal(!showNewFileModal)
            : null
        }
      />
      <Modal
        show={showNewFolderModal}
        error={error}
        onCancel={onCancelClick}
        onSubmit={onSubmitClick(onAddFolderSubmit)}
      />
       <Modal
        show={showNewFileModal}
        error={error}
        onCancel={onCancelClick}
        onSubmit={onSubmitClick(onAddFileSubmit)}
      />
    </StyledHeader>
  );
};
