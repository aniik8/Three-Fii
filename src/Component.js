//changing value, onchange, onSubmit and all that + any solution to sudden undefined nature of the temperature field
import React, {useEffect, useState} from 'react';
import './index.css';
import ItemComponent from "./ItemComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const estyle = {
    backgroundColor : '#DFD7E2',
    textAlign: 'center',
    height : '10vh',

}

const istyle = {
    backgroundColor : '#BF57EC',
    width:'100vh',
    textAlign : "center",
    fontSize : '30px'}

const inputStyle = {
    width: '100%',
    height: '50px',
    borderRadius : '20px',
    textAlign : 'center',
    fontSize: '30px',
    backgroundColor :'#dcd8de',
    borderColor : 'transparent',
    fontFamily: '-apple-system'
}


const Component = () =>{
    const [temperature, setTemperature] = useState("");
    const [cityName, setCityname] = useState("");
    const [cname, setCname] = useState('');

    const getWeatherData = async () => {
        try{
            const api_link = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=4d8165e6f8ecf5bbe367a6fb5923f02f`);
            const result = await api_link.json()
            setTemperature(result);

        }catch (error){
            alert(`City ${cname} data does n't exist.${error}`)
        }
    }
    
    const real_temp = (temperature.main != undefined) ? (((temperature.main.temp)/10).toFixed(2)): 0;
    useEffect(() => {
        getWeatherData();
    },[cname])
    const form_submit = (e) => {
        e.preventDefault();
    }
    const getCity = () => {
        setCname(cityName);
        console.log(cname);
    }
    return(
        <>

            <div style={estyle}>
                <h5 style={{fontSize: '5vh'}}>Weather forecast</h5>
            </div>
            <div className="card" style={{margin:"auto", marginTop:'50px', width:'50vh'}} >

                    <div className="card-body" >
                        <form onSubmit={form_submit}>

                            <input type="text" className="form-control" style={{justifyContent:"center", width:'100%', borderRadius:'10px' }} placeholder="Enter city name"
                            value={cityName} onChange={(event) => {setCityname(event.target.value)} }/>
                            <br/>
                            <br/>
                            <button type="submit" style={{width:'100%', borderRadius:'10px'}} className="btn btn-primary"
                                    onClick={getCity}>Search City</button>
                        </form>
                        <br/>
                        {console.log(cityName)}
                        <h5 className="card-title" style={{textAlign:'center'}}>City <br/> <br/>{cname}</h5>
                        {(temperature.main)} != undefined ? 
                            (<><p className="card-text" style={{textAlign:'center'}}>Temperature : {real_temp} </p>
                        <br/>
                        <p className="card-text" style={{textAlign:'center'}}>Minimum temperature : {((temperature.main.temp_min)/10).toFixed(2)}</p>
                        <p className="card-text" style={{textAlign:'center'}}>Maximum temperature : {((temperature.main.temp_max)/10).toFixed(2)}</p>)
                        </>
                        : <p>data can't be shown</p>

                         




                    </div>
            </div>
        </>
    )

}

export default Component;
