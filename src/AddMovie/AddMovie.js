import React, { useState } from 'react'
import { Button, Form, FormLabel, Modal } from 'react-bootstrap';
import './AddMovie.css'
function AddMovie({add}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //inisialisation
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    
    //update
    const handleTitle = (e) =>{
        setTitle(e.target.value)
    }
    const handleDescription = (e) =>{
        setDescription(e.target.value)
    }
    const handleRate = (e) =>{
        setRate(e.target.value)
    }
    const handlePosterUrl = (e) =>{
        setPosterUrl(e.target.value)
    }

    //function add
    const handleAdd = (e) =>{
        let newMovie ={title, description, rate, posterUrl}
        add(newMovie)
        
    }


  return (
    <div className='AddMovie'>
        <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormLabel>Movie Title</FormLabel>
            <Form.Control type="text" onChange={(e)=>handleTitle(e)} value={title}/>
            <FormLabel>Description</FormLabel>
            <Form.Control type="text" onChange={(e)=>handleDescription(e)} value={description}/>
            <FormLabel>Rate</FormLabel>
            <Form.Control type="number" onChange={(e)=>handleRate(e)} value={rate}/>
            <FormLabel>PosterUrl</FormLabel>
            <Form.Control type="url" onChange={(e)=>handlePosterUrl(e)} value={posterUrl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie