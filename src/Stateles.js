import React, { Component } from "react";
import animalsList from './animalsList';

class Stateles extends Component {

    constructor() {
        super();
        this.state = {

            dog: animalsList.type,
            cat: 'irany cat',
            parrot: 'irany parrot',

            rabbit:
            {
                img: "./dog1.png",
                name: "Labrador Retriever",
                color: "bun",
                age: "4 month",
                location: " Bp. 11ker. Albert Street 7.",
                type: "dog"
            }

        };
    }

    if(dog){
        console.log("dogs");
    }

    render() {

        return (
            <div>

                <h1>{this.state.dog}</h1>

                <h1>{this.state.rabbit.type}</h1>


            </div>
        )
    }
}
export default Stateles