import range from "lodash/range";
import React, { useEffect, useMemo, useState, useCallback, useLayoutEffect , useReducer} from "react";
import Button from '@material-ui/core/Button';
// import { useEffect } from "react";
// import {
//     useHistory,
//       } from "react-router-dom";

const areSame = (prev, current) => {
     console.log('prev', prev)
     console.log('current', current)
    return prev.test === current.test
}


const areEqualInputContact = (prev, current) => {
    //  console.log('prev', prev)
    //  console.log('current', current)
    return prev.length === current.length
}


const reducer = (action, state ) => {

}

const InputContact = React.memo(props => {

    // console.log('render input contact')

    // console.time("setup-sample input contact")

    // const sample2 =  range(999999) 
    // console.timeEnd("setup-sample input contact")

    return <div>Input Contact Component</div>
},areEqualInputContact )


export const Contact = React.memo(({ test }) => {
    const [count, setCount] = useState(0)
    const [dispatcher] =  useReducer(reducer,)
    const [sample, setSample] = useState(range(999))
    //  console.log('count', count)
    // console.log('toggle', toggle)
    // console.log('sample', sample.length)
    //    const history = useHistory()
    //    const Navigate = () => {
    //     history.push("/detail/123/category/3323");
    // }


   
    useEffect(() => {
        // console.log('useeffect')

        // axios.get().then((data) => setUser(data))
        sample.forEach(() => {
            // console.log("executes")
            const sum = count + 1
            // setCount(sum)
            setCount(state => { 
                // console.log('state', state)
                return state + 1})
        })

       return  () => {
           console.log('unmounted')
       }
    }, []) 
  
    // console.log('executing', sample.length)

    // console.time("setup-sample")

    //  const sample =  range(999999) 

    // console.timeEnd("setup-sample")

     console.time("calculation")

    const expensiveCalculation = (sp) => {
        let sum = 0
        sp.forEach(element => {
            sum += element
        });
        return sum
    }

const calculateProperty = useCallback(() => {

return count + 3

}, [])

    const result = useMemo(() => expensiveCalculation(sample),[sample.length])

      console.timeEnd("calculation")

      console.log('result', result)



    // useEffect(() => {
    //     setTimeout(Navigate, 1000);
    // })

    return <><div>Contact Page</div>
       { <Button onClick={() => {
            setCount((prev) => ++prev)
            setSample(sample => [...sample])
        }
        } >Render state no changes</Button>}
      <Button onClick={() => {
            setCount((prev) => prev)
            setSample(sample => [...sample, sample.length])
        }
        } >Render state with changes</Button>

        <InputContact length={sample.length}/></>

}, areSame);