// stories/Display.stories.js
import React from 'react';
import Display from '@/components/Display';

export default {
    title: 'Components/Display',
    component: Display,
};

export const DefaultDisplay = () => <Display value="0" />;
export const NonZeroDisplay = () => <Display value="12345" />;
