import { Meta, Story } from '@storybook/react'
import { Testimony, TestimonyProps } from './Testimony'

import { lorem } from '../../assets/lorem'

export default {
  title: 'components/Testimony',
  component: Testimony,
} as Meta

const Template: Story = (args: any) => (
  <div style={{ height: '150vh' }}>
    <Testimony {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  message: lorem,
  authorName: 'Joel Archer',
  authorTitle: 'CEO',
  authorPortraitImgSrc:
    'https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg',
}
