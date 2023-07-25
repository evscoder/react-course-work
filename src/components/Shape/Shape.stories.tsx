import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';
import {FC} from 'react';
import '../../styles/app.scss';
import Shape from './Shape';

interface Props {
    isState: boolean;
}

const ShapeStories: FC<Props> = ({isState})  => {
    return (
        <>
            <Shape isActive={isState && true} />&nbsp;
            <Shape isActive={false} />&nbsp;
        </>
    );
};

const meta = {
    title: 'Example/Shape',
    component: ShapeStories,
    decorators: [withRouter],
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
    }
} satisfies Meta<typeof ShapeStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShapeStoriesCollection: Story = {
    args: {
        isState: true
    }
};
