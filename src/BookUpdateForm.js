import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

// this is the update form i made

class BookUpdateForm extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateBook} >
                            <Form.Group className="mb-3">
                                <Form.Label>Book title</Form.Label>
                                <Form.Control type="text" name='title' defaultValue={this.props.title} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name='description' defaultValue={this.props.description} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Select name='status' defaultValue={this.props.status} >
                                    <option value='available'>Available</option>
                                    <option value='not available'>Not Available</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update book
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default BookUpdateForm