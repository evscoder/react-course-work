import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';
import {FC, useRef, useState} from 'react';
import '../../../styles/app.scss';
import Frame from './Frame';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';

interface Props {
    isArr: number[][];
}

const FrameStories: FC<Props> = ({isArr})  => {
    const frameElement = useRef<HTMLTableElement>(null);
    const [cellsActive] = useState<number[][]>(isArr);

    return (
        <Provider store={store}>
            <Frame ref={frameElement} isElements={cellsActive} />
        </Provider>
    );
};

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
        isArr: [[0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]]
    }
};
