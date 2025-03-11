import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta: Meta<typeof Select> = {
    component: Select,
    title: "Components/Select",
    tags: ['autodocs']
};

export default meta;

export const SelectStory: StoryObj<typeof Select> = {
    args: {
        label: "Select",
    },
}