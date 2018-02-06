'use strict'

import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';
import {Grid, Col, Row, Button} from 'react-bootstrap'

import BookItem from './bookItem'
import BooksForm from './booksForm'
import Cart from './cart'

class BooksList extends React.Component{
	componentDidMount(){
		this.props.getBooks()
	}

	render(){
		const BooksList = this.props.books.map((bookItem)=>{
				return(<Col xs={12} md={4} key={bookItem.id}>
					<BookItem 
					id ={bookItem.id}
					title ={bookItem.title}
					description ={bookItem.description}
					price = {bookItem.price}/>
				</Col>
				)
		  	}
		)

		return(<Grid>
				<Row>
					<Cart/>
				</Row>
				<Row>
					<Col xs={12} sm={6}>
						<BooksForm />
					</Col>
					<Col xs={12} sm={6}>
					</Col>
					{BooksList}
				</Row>
			</Grid>
		)
	}
}

function mapStateToProps(state){
	return {
		books: state.books.books
	}
}


function mapDispatchToProps(dispatch){
 return bindActionCreators({
 	getBooks:getBooks
 }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

