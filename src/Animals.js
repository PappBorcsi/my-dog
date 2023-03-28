import React,{useState} from "react";
import './Animals.css';


//const [search, setSearch] = useState('');

const animal = ({ props }) => { // {miert kell ilyen}

//            <input className="search" type="text" id="myId" placeholder="Search pet to adopt...." onChange={(e) => setSearch(e.target.value)}/>
  /*
    super()
    this.state ={
        
    }*/

    return (
        <div className="Animal">
            <div className="box">
            <input className="search" type="text" id="myId" placeholder="Search pet to adopt...." />
            </div>

            <selection className='allatokContainer'>
                <selection className='allatikonok'>                   
                    <img className="animalsPicture" src="./dog.png" onClick={(dogKep) =>{alert('Go to the DOG page --> Please wait.....')}}></img>
                    <p className="p">Dogs</p>
                </selection>

                <selection className='allatikonok'>
                    <img className="animalsPicture" src="./cat.png" onClick={(dogKep) =>{alert('Go to the CAT page --> Please wait.....')}}></img>
                    <p className="p">Cats</p>
                </selection>

                <selection className='allatikonok'>
                  
                    <img className="animalsPicture" src="./parrot.png" onClick={(dogKep) =>{alert('Go to the Parrot page --> Please wait.....')}}></img>
                    <p className="p">Parrots</p>
                </selection>

                <selection className='allatikonok'>
                   
                    <img className="animalsPicture" src="./rabbit.png" onClick={(dogKep) =>{alert('Go to the RABBIT page --> Please wait.....')}}></img>
                    <p className="p">Rabbits</p>
                </selection>


            </selection>
        </div>
    )
}

export default animal;