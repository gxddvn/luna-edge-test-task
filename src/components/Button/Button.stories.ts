import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Components/Button",
    tags: ['autodocs']
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
    args: {
        option: "primary",
        size: "base",
        label: "Primary Button",
    }
}

export const Outline: StoryObj<typeof Button> = {
    args: {
        option: "outline",
        size: "base",
        label: "Outline Button",
    },
};

export const Text: StoryObj<typeof Button> = {
    args: {
        option: "text",
        size: "base",
        label: "Text Button",
    },
};