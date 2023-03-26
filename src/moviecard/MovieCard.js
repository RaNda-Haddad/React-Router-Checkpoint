import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";
import { Link} from "react-router-dom";

function MovieCard({ movie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="moviecard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="imgcard" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          
          <div>
          <Link to={`Description/${movie && movie.title}`}>
            description
          </Link>
          </div>

          {/* <Description movie={movie} key={movie.id} /> */}
          <a variant="primary" href={movie.trailer}>
            Trailer
          </a>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
          {/* <Card.Text className='cardtext'>{movie.description}</Card.Text> */}
          <Card.Text>{movie.rate} Star(s)</Card.Text>
          <ReactStars value={movie.rate}></ReactStars>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;