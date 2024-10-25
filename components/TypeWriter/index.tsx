// components/Blog.tsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        'Hi I am Nhat Hao , Im a Frontend Developer',
        'Hi I am Nhat Hao , Im a NextJs Developer',
        1000,
        1000,
        'Hi I am Nhat Hao , Im a TypeScript Developer',
        1000,
        'Hi I am Nhat Hao , Im a JavaScript Developer',
        1000,
      ]}
      speed={30}
      style={{ fontSize: '3em', fontWeight: 'bold' }}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
