import { Meta, Story } from "@storybook/react";
import WindowGrid, { WindowGridProps } from "./WindowGrid";

export default {
  title: "Sections/WindowGrid",
  component: WindowGrid
} as Meta;

const Template: Story<WindowGridProps> = (args) => <WindowGrid {...args} />;

export const withCenteredDiv = Template.bind({});

withCenteredDiv.args = {
  dataToDisplay: [1, 2, 3],
  columnCount: 3 /**test of comment **/,
  CompoToDisplay: () => (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 4px green"
      }}
    >
      styled Div
    </div>
  ),
  rowHeight: 400
};
