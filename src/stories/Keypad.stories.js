// stories/Keypad.stories.js
import React from 'react';
import Keypad from '@/components/Keypad';

export default {
    title: 'Components/Keypad',
    component: Keypad,
};

export const DefaultKeypad = () => <Keypad onButtonClick={(label) => {}} />;
