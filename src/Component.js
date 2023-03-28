import { useState } from "react";
import './component.css';

//<div className="bg-light-green dib br3 pa3 ma2 grow">
const Component =(props) => {
    const{img, name, color, age, location } = props

    const [search, setSearch] = useState('')
    /*detailsHandler = ()=>{
        this.setState()
    }*/

    return(
        <div className="comp">
            <div className="column"  >
                <img src={img} alt="dog1Pictures"></img>
            </div>
            <div className="column" >
                <div className="datas">
                    <h2>Name: {name}</h2>
                    <h2>Color: {color}</h2>
                    <h2>Age: {age}</h2>
                    <h2>Location: {location}</h2>
                    <button className="button" > Details... </button>
                </div>
            </div>
        </div>
    )
}
//                    <button className="button" onClick={detailsHandler}> Details... </button>

export default Component;