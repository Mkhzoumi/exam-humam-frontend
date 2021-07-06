import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdateFav from './UpdateFav';
export class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
            favData:[],
            
        
        }
    }

    componentDidMount=()=>{
        axios.get(`${process.env.REACT_APP_SERVER}/favorite`).then(response=>{
            this.setState({
                favData:response.data
            })
        })
    }

    deleteFav=(value)=>{
        let idDrink = value.idDrink;
        axios.delete(`${process.env.REACT_APP_SERVER}/favorite/${idDrink}`).then(response=>{
            this.componentDidMount();
        })
    }

    UpdateFavorite=(value,name,img)=>{
        let idDrink = value.idDrink;
        let reqBody;
        if (name !== '' && img === '') {
            reqBody={
                strDrink:name,
                strDrinkThumb:value.strDrinkThumb
            }
        }else{
            if (name === '' && img !== '') {
                reqBody={
                    strDrink:value.strDrink,
                    strDrinkThumb:img
                }
            }else{
                reqBody={
                    strDrink:name,
                    strDrinkThumb:img
                }
            }
        }

        axios.put(`${process.env.REACT_APP_SERVER}/favorite/${idDrink}`, reqBody).then(response=>{
            this.componentDidMount();
        })
    }



    render() {
        return (
           <div style={{display:'flex' , 'flex-wrap': 'wrap'  , gap:'20px'}}>
            {this.state.favData.map(value=>{
                return(<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{value.strDrink}</Card.Title>
                  <Button variant="primary" onClick={()=>{this.deleteFav(value)}}>Delete</Button>
                  <UpdateFav
                  value={value}
                  UpdateFavorite={this.UpdateFavorite}

                  />
                </Card.Body>
              </Card>

                )
            })}
            </div>
        )
    }
}

export default Favorite
