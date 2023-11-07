import { Meta, Story } from '@storybook/react';

import React from 'react';
import { SectionBackground } from './SectionBackground';

export default {
  title: 'Sections/SectionBackgrounds',
  component: SectionBackground,
} as Meta;

const Template: Story = (args) => (
  <div style={{ height: '150vh' }}>
    <div style={{ height: '150px', background: 'blue' }}> previous div</div>
    <div style={{ height: '150px', background: 'red' }}> previous div</div>
    <SectionBackground url={''} {...args} />
    <div style={{ height: '150px', background: 'blue' }}> next div</div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
};

export const secondary = Template.bind({});
secondary.args = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
  children: <h2 style={{ color: 'white' }}> this is children</h2>,
  style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
};
frames;
