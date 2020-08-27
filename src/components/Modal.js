import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './css/Modal.css'

function ModalExpand(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="modal-title">{props.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="post-body">
            {props.body}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalExpand