import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from "storybook-addon-react-router-v6";
import {FC, useState} from "react";
import '../../styles/app.scss';
import RadioButton from "./RadioButton";

interface Props {
    isColor: string
}

const RadioButtons: FC<Props> = ({ isColor })  => {
    const [shape, setShape] = useState<string>('square');
    const [color, setColor] = useState<string>('purple');

    const onChangeShape = () => {
        setShape(shape);
        setColor(isColor);
    }

    return (
        <>
            <RadioButton onChange={onChangeShape} id={'circle'} type={'square'} color={color} title={'Squared cells'} name={'grid_type'} />&nbsp;
            <RadioButton onChange={onChangeShape} id={'circle'} type={'circle'} color={color} title={'Circular cells'} name={'grid_type'} />&nbsp;
            <RadioButton onChange={onChangeShape} id={'circle'} type={'triangle'} color={color} title={'Triangular cells'} name={'grid_type'} /><br />
            <RadioButton onChange={onChangeShape} type={shape} id={'purple'} color={'purple'} title={'Purple cells'} name={'color_type'} />&nbsp;
            <RadioButton onChange={onChangeShape} type={shape} id={'pink'} color={'pink'} title={'Pink cells'} name={'color_type'}/>&nbsp;
            <RadioButton onChange={onChangeShape} type={shape} id={'blue'} color={'blue'} title={'Blue cells'} name={'color_type'} />&nbsp;
            <RadioButton onChange={onChangeShape} type={shape} id={'green'} color={'green'} title={'Green cells'} name={'color_type'} />&nbsp;
            <RadioButton onChange={onChangeShape} type={shape} id={'yellow'} color={'yellow'} title={'Yellow cells'} name={'color_type'} />&nbsp;
            <RadioButton onChange={onChangeShape} type={shape} id={'white'} color={'white'} title={'White cells'} name={'color_type'} />
        </>
    )
}

const meta = {
    title: 'Example/RadioButton',
    component: RadioButtons,
    decorators: [withRouter],
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
    }
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtonCollection: Story = {
    args: {
        isColor: 'purple'
    }
};
