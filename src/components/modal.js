import React from "react";
import Modal from 'react-bootstrap/Modal'

export default function ModalAlert(props) {
    return (
        <Modal centered show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <img src={props.url} />
            <Modal.Body>{props.body}</Modal.Body>
        </Modal>

    );
}

