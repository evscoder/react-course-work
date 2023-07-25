import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from "storybook-addon-react-router-v6";
import {FC, useRef, useState} from "react";
import '../../styles/app.scss';
import Frame from "./Frame";

interface Props {
    isArr: boolean[];
}

const FrameStories: FC<Props> = ({isArr})  => {
    const frameElement = useRef<HTMLTableElement>(null);
    const [cellsActive] = useState<boolean[]>(isArr);

    return (
        <Frame ref={frameElement} isElementsActive={cellsActive} />
    )
}

const meta = {
    title: 'Example/Frame',
    component: FrameStories,
    decorators: [withRouter],
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
    }
} satisfies Meta<typeof FrameStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FrameStoriesCollection: Story = {
    args: {
        isArr: [false, true, false, true, true]
    }
};
