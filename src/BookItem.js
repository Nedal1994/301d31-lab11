import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './BookItem.css'

class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.item.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>{this.props.item.title}</h1>
                            <p>{this.props.item.description}</p>
                            <p>{this.props.item.status}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.item.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>{this.props.item.title}</h1>
                            <p>{this.props.item.description}</p>
                            <p>{this.props.item.status}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={this.props.item.url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>{this.props.item.title}</h1>
                            <p>{this.props.item.description}</p>
                            <p>{this.props.item.status}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default BookItem