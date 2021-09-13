import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './BookItem.css'

class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                   {this.props.booksArr.map((item) => {
                      return(
                      <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src={item.url}
                          alt="First slide"
                      />
                      <Carousel.Caption>
                          <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <p>{item.status}</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  )
                   })}
                </Carousel>
            </div>
        )
    }
}
export default BookItem