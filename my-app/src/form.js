import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function GForm() {
    return (
    <div className='groupForm'>
        <h1>CREATE GROUP</h1>
        <Container>
            <Form>
                <Form.Group controlId="form.Name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="form.GName">
                    <Form.Label>Group Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter group name" />
                </Form.Group>
                <Form.Group controlId="form.Email">
                    <Form.Label>UW Email:</Form.Label>
                    <Form.Control type="email" placeholder="name@uw.edu" />
                </Form.Group>
                <Form.Group controlId="form.Phone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="phone" placeholder="(000)-000-0000" />
                </Form.Group>
                <Form.Group controlId="form.Loc">
                    <Form.Label>Location (City,ST):</Form.Label>
                    <Form.Control type="text" placeholder="Seattle, WA" />
                </Form.Group>
                <Form.Group controlId="form.Partner">
                    <Form.Label>Partnership With:</Form.Label>
                    <Form.Control type="text" placeholder="ACLU" />
                </Form.Group>
                <Form.Group controlId="form.Num">
                    <Form.Label>Number of Volunteers:</Form.Label>
                    <Form.Control type="number" placeholder="4" />
                </Form.Group>
                <Form.Group controlId="form.Date">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" placeholder="November 30, 2021" />
                </Form.Group>
                <Form.Group controlId="form.Date">
                    <Form.Label>Time Start:</Form.Label>
                    <Form.Control type="time" placeholder="10:30 AM" />
                </Form.Group>
                <Form.Group controlId="form.Date">
                    <Form.Label>Time End:</Form.Label>
                    <Form.Control type="time" placeholder="02:00 PM" />
                </Form.Group>
            </Form>
        </Container>
    </div>
    );
}
  
  export default GForm;