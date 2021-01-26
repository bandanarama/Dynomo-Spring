import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import {Container, Form, FormGroup, Label, Button, Input} from 'reactstrap';
import {Link} from 'react-router-dom';

class Expenses extends Component {
    // "id": 100,
    // "description": "New York Trip",
    // "expenseDate": "2020-06-16T17:00:00Z",
    // "location": "New York",
    // "category": {
    //   "id": 1,
    //   "name": "Travel"
    
    emptyItem = {
        id: '103',
        description:'' ,
        expenseDate: new Date(),
        location: '' ,
        categories: [1, 'Travel']
    }

    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            isLoading: true,
            categories:[],
            expenses: [],
            item: this.emptyItem
        }
    }

     async componentDidMount() {
        const response = await fetch('/api/categories');
        const body = await response.json();
        this.setState({categories: body, isLoading: false});

        const responseExp = await fetch('/api/categories');
        const bodyExp = await response.json();
        this.setState({expenses: bodyExp, isLoading: false});

     }
    render() { 
        const title = <h3>Add Expense</h3>
        const {categories} = this.state;
        const {expenses, isLoading} = this.state;

        if(isLoading) 
            return(<div>Loading.....</div>)

        let optionList =
            categories.map( category =>
                <option id={category.id}>
                    {category.name}
                </option>
                )

        return ( 
            <div>
                <AppNav/>

                <Container>
                    {title}
                    <Form>

                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select>
                                {optionList}
                            </select>
                            <Input type="text" name="category" id="category" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="expenseDate">Expense Date</Label>
                            <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/categories">Cancel</Button>{' '}
                        </FormGroup>

                    </Form>
                </Container>
            </div>
         );
    }
}
 
export default Expenses;