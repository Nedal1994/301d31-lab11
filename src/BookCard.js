import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class BookCard extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                    <Card.Text>
                        {this.props.item.url}
                        </Card.Text>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        <Card.Text>
                        {this.props.item.description}
                        </Card.Text>
                        <Card.Text>
                        {this.props.item.status}
                        </Card.Text>
                        <Card.Text>
                        {this.props.item.email}
                        </Card.Text>
                        <Button variant="primary"
                         onClick={() =>this.props.deleteBook(this.props.item._id)}>Delete book</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default BookCard