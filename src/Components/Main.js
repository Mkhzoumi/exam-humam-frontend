import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataStatus: false
        }
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_SERVER}/Cocktail`).then(response => {
            this.setState({
                data: response.data,
                dataStatus: true
            })
            console.log(response.data);
        })
    }


    addFav = (value) => {
        const reqBody = {
            strDrink: value.strDrink,
            strDrinkThumb: value.strDrinkThumb,
            idDrink: value.idDrink
        }
        axios.post(`${process.env.REACT_APP_SERVER}/favorite`, reqBody)
    }
    render() {
        return (

            <div style={{display:'flex' , 'flex-wrap': 'wrap', justifyContent : 'center'  , gap:'20px'}}>

                {this.state.dataStatus &&
                    this.state.data.map(value => {
                        return (<Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={value.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{value.strDrink}</Card.Title>
                                <Button variant="primary" onClick={() => { this.addFav(value) }}>Add to Favorite</Button>
                            </Card.Body>
                        </Card>

                        )
                    })}

            </div>



        )
    }
}

export default Main
