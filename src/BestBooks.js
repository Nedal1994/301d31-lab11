import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import BookCard from './BookCard'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import BookUpdateForm from './BookUpdateForm';

// import BookItem from './BookItem'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      booksArr: [],
      show: false,
      showFlag: false,
      title:'',
      description:'',
      status:'',
      bookId:''
    }
  }

  componentDidMount = () => {
    const { user } = this.props.auth0
    const email = user.email
    axios
      .get(`http://localhost:3030/getBooks?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(error => {
        console.log('error');
      })
  }
  addBook = (event) => {
    event.preventDefault()
    const { user } = this.props.auth0
    const email = user.email
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: email
    }
    axios
      .post(`https://lap13.herokuapp.com/addBook`, obj)
      .then(result => {
        this.setState({
          booksArr: result.data
        })

      })
      .catch(error => {
        console.log('Error');
      })
  }

  deleteBook = (id) => {
    const { user } = this.props.auth0
    const email = user.email
    axios
      .delete(`https://lap13.herokuapp.com/deleteBook/${id}?email=${email}`)
      .then(result => {
        this.setState({
          booksArr: result.data
        })
      })
      .catch(error => {
        console.log('Error');
      })
  }
  handleClose = () => {
    this.setState({
      show: false,
      showFlag:false
    })
  }
  handleShow = () => {
    this.setState({
      show: true,
    })
  }
  showUpdateForm = (item)=>{
    this.setState({
      showFlag:true,
      title:item.title,
      description:item.description,
      status:item.status,
      bookId:item._id
    })
  }

  updateBook = (event) =>{
    event.preventDefault()
    const { user } = this.props.auth0
    const email = user.email
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email:email
    }
    axios
      .put(`https://lap13.herokuapp.com/updateBook/${this.state.bookId}`,obj)
      .then(result => {
        this.setState({
          booksArr: result.data,
          showFlag:false
        })

      })
      .catch(error => {
        console.log('Error');
      })
  }
  

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          add a book
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Form onSubmit={this.addBook} >
            <Form.Group className="mb-3">
              <Form.Label>Book title</Form.Label>
              <Form.Control type="text" name='title' />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name='description' />
            </Form.Group>
            <Form.Group >
              <Form.Select name='status'>
                <option value='available'>Available</option>
                <option value='not available'>Not Available</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add book
            </Button>
          </Form>
        </Modal>
        {this.state.booksArr.map((item) => {
          return (
            <BookCard 
            item={item} 
            deleteBook={this.deleteBook} 
            showUpdateForm={this.showUpdateForm}
            />
          )
        })}

        <BookUpdateForm
        show = {this.state.showFlag}
        handleClose = {this.handleClose}
        title={this.state.title}
        description={this.state.description}
        status={this.state.status}
        updateBook ={this.updateBook}
        />
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks)