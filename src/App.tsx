import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {MaxMin} from "./Max&&Min";


function App() {

    const [MaxValue, SetMaxValue] = useState(5)
    const [MinValue, SetMinValue] = useState(0)
    const [fastMax,SetFAStMAx]=useState<number>(5)
    const [fastMin,SetFAStMin]=useState<number>(0)
    const [active,SetActive]=useState(false)




    const Inc = () => {
        SetMinValue(prevState => prevState + 1)
    }
    const Reset = () => {
        SetMinValue(0)
    }


    const Set = (startValue: number, MaxValue: number) => {
        SetMinValue(startValue)
        SetMaxValue(MaxValue)
        SetActive(false)


    }



    const FastMaxValue =(e:number)=> {
        SetFAStMAx(e)
        SetActive(true)
    }
    const FastMinValue =(e:number)=> {
        SetFAStMin(e)
        SetActive(true)
    }
    return (
        <div className="App">

            <Counter inc={Inc} reset={Reset} disable={MaxValue} StartValue={MinValue}  fastMax={fastMax} fastMin={fastMin} active={active}/>
            <MaxMin disable={MaxValue} StartValue={MinValue}  set={Set} FastMaxValue={FastMaxValue} FastMinValue={FastMinValue}/>

        </div>
    );
}

export default App;
