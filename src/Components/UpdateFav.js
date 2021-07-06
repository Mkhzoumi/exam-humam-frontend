import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class UpdateFav extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalStatus:false,
            nameFromUsr:'',
            imgFromUsr:'',


        }
    }



    render() {
        return (
            <div>
                <Button variant="primary" onClick={()=>{this.setState({modalStatus:true})}}>Update</Button>


<Modal show={this.state.modalStatus} >
        <Modal.Header>
          <Modal.Title>Update Cocktail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            

        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="enter name"  onChange={(e)=>{this.setState({nameFromUsr:e.target.value})}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Image Url</Form.Label>
    <Form.Control type="text" placeholder="enter img url" onChange={(e)=>{this.setState({imgFromUsr:e.target.value})}} />
  </Form.Group>
 
</Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.setState({modalStatus:false})}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.setState({modalStatus:false}); this.props.UpdateFavorite(this.props.value,this.state.nameFromUsr,this.state.imgFromUsr)}} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
}

export default UpdateFav
