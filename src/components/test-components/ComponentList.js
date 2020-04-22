import React from 'react';
import {TwoColumnLayout} from '../common/TwoColumnLayout';

const leftPane = () => (
    <div>This is some text which should appear on the left side of the div element</div>
);

const rightPane = () => (
    <div>This is some text which should appear on the right side of the div element</div>
);
export const ComponentList = () => (
    <TwoColumnLayout left = {leftPane()} right={rightPane()} />
)