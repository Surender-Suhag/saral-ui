import React from 'react';
import {TwoColumnLayout} from '../common/TwoColumnLayout';
import ComponentTree from './ComponentTree';
import LeftPanelTreeStructure from '../common/LeftPanelTreeStructure';

function onNodeSelection(node){
    console.log('node selected -- ' + node.id)
}

const leftPane = () => (
//    <ComponentTree />
    <LeftPanelTreeStructure context= 'component' onNodeSelection={onNodeSelection} />
);

const rightPane = () => (
    <div>This is some text which should appear on the right side of the div element</div>
);
export const ComponentList = () => (
    <TwoColumnLayout left = {leftPane()} right={rightPane()} />
)