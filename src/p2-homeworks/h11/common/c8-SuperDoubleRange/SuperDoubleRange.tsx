import React, {ChangeEvent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    value?: [number, number]
    onChangeRange?: (value: [number, number]) => void
    value1:number
    setValue1: (value: number) => void
    value2: number
    setValue2: (value: number) => void
    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,value, value1, setValue1, value2, setValue2

        // min, max, step, disable
    }
) => {
    const classes = useStyles();

    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        if(Array.isArray(value)){
            setValue1(value[0])
            setValue2(value[1])
        }
    };

    // сделать самому, можно подключать библиотеки

    return (
        <div className={classes.root}>
            <Slider
                value={[value1, value2]}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperDoubleRange;
