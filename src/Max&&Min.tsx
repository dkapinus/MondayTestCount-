import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./Max&&Min.module.css"
import {Button} from "./Button";
import {Input} from "./Input";

type  MaxMinType = {
    disable: number
    StartValue: number
    set: (startValue: number, MaxValue: number) => void
    FastMaxValue: (e: number) => void
    FastMinValue: (e: number) => void
}


export const MaxMin = (props: MaxMinType) => {

    const [startValue, SetStartValue] = useState<number>(0)
    const [MaxValue, SetMaxValue] = useState<number>(5)

    useEffect(() => {
        const temp = localStorage.getItem('min')
        if (temp) {
            const num = JSON.parse(temp)
            SetStartValue(num)
            // setCount(+num)
        }
    }, [])

    useEffect(() => {
        const temp = localStorage.getItem('max')
        if (temp) {
            const num = JSON.parse(temp)
            SetMaxValue(num)
        }
    }, [])


    const MaxValueChange = (e: number) => {
        SetMaxValue(e)
        props.FastMaxValue(+e)

    }
    const MinValueChange = (e: number) => {
        SetStartValue(+e)
        props.FastMinValue(+e)
    }

    const Set = () => {
        props.set(startValue, MaxValue)
        localStorage.setItem('min', JSON.stringify(startValue))
        localStorage.setItem('max', JSON.stringify(MaxValue))
    }
    return (
        <div className={s.around_wrapper}>
            <div className={s.score}>
                <div> Max Value:

                    <Input value={MaxValue} onChange={MaxValueChange}  startValue={startValue} MaxValue={MaxValue} />

                </div>

                <div> Min Value:


                    <Input value={startValue} onChange={MinValueChange} startValue={startValue} MaxValue={MaxValue}  />
                </div >

            </div>
            <Button onClick={Set} disable={startValue >= MaxValue || startValue < 0 || MaxValue < 0} name={'set'}/>

        </div>
    );
};

