import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';
import '../../../styles/app.scss';
import RangeInput from '../RangeInput/RangeInput';
import {FC} from 'react';

interface Props {
    step: number
}
const RangeInputs: FC<Props> = ({ step })  => {
    return (
        <>
            <RangeInput id={'speedControl'} min={100} max={500} step={step && 1} />
        </>
    );
};

const meta = {
    title: 'Example/RangeInput',
    component: RangeInputs,
    decorators: [withRouter],
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
    }
} satisfies Meta<typeof RangeInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RangeInputsType: Story = {
    args: {
        step: 1
    }
};
