import React, {useReducer, useState} from "react";

const Main = () => {
    const decision = {
        completed : false
    }
    const reducer = (state, action) => {
        console.log(action.payload);
        switch(action.type){
            case 'Submit' :
                return [...state,action.payload]

            case 'finished':
                decision.completed = true;
                break
            case 'delete' :
                return state.filter((currEle, index) => {
                    return index !== action.payload
                })
            default:
                return
        }

    }
    const [task, dispatch] = useReducer(reducer,[]);
    const [val, setVal] = useState("");
    const submitInput = (e) => {
        setVal(e.target.value);
    }
    const submitButton = () =>{
        dispatch({type:"Submit", payload:val})

    }
    return(
        <>
       <h1>Hello enter task you want {task} </h1>
            <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" onChange={submitInput} value={val}/>
            <button type="submit" onClick={submitButton}>Submit</button>

        </form>

            {task.map((currEle, index) => {
                return(
                    <>
                        <button onClick={() => dispatch({type:"finished", payload:decision.completed})}>Finished</button>
                        {decision.completed === true ? <h4 style={{color:"#808080"}} key={index}>{currEle}</h4> : <h4 key={index}>{currEle}</h4>}
                    <button  onClick={() => dispatch({type:"delete", payload:index})}>Delete</button>
                    </>
                )
            })}
        </>
    )
}

export default Main;