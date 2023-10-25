import * as assets from '../../assets/media';

import { Meta, Story } from '@storybook/react';

import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

export const withImages: Story = (args) => (
  <Carousel settings={{ speed: 150 }}>
    {[1, 2, 3].map((x) => (
      <div>{x}</div>
    ))}
    <div>fds</div>
    <div>fdsaa</div>
    <div>fds</div>
  </Carousel>
);

export const withCustomPaging: Story = (args) => {
  const slides = [1, 2, 3, 'fds'].map((x) => <div>{x}</div>);

  return (
    <Carousel settings={{ speed: 150, customPaging: (i) => slides[i] }}>
      {slides}
    </Carousel>
  );
};
