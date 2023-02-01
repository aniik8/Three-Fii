import React from "react";

const App = () => {
    const [task, updatetask] = React.useState("");
    const [item, setItem] = React.useState([]);
    const [color, updatecolor] = React.useState("#000000")
     const submitTask = (event) => {
        event.preventDefault();
        updatetask(event.target.value);


    }
    const submitButton = () => {
        setItem((prev_values) => {
            return [...prev_values, task]
        });

    }

    const showStriked = (e) => {
        updatecolor("#808080");

    }

    const deleteTask = (e) => {
        setItem((items) =>
        { return items.filter((val, index) => {
            return parseInt(index) !== parseInt(e.target.value);
        });
        });

    }
    return(
        <>
            <h1>Hello enter task you want</h1>

            <input type="text" onChange={submitTask}/>
            <button type="submit" onClick={submitButton}>Submit</button>
            {item.map((value, index) => {
                return(
                    <>
                        <div>
                            {color}
                            <h3 style={{color: color }} key={index}>{value}</h3>
                            <button style={{backgroundColor:'green'} } value={index} name="finished" onClick={showStriked}>Finished</button>
                            <button style={{backgroundColor:'red'} } value={index} name="deleteTask" onClick={deleteTask}>Deleted</button>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default App;