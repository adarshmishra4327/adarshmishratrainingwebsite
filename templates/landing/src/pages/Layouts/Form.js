import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mobileno, setMobileno] = React.useState("")
    const [coursename, setCoursename] = React.useState("React")


    const formsubmit = (e) => {
        e.preventDefault()


        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobileno', mobileno);
        formData.append('coursename', coursename);

        fetch('/api/studentlist/', {
            method: 'POST', // or 'PUT'
            // headers: {
            //   'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(data),
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Status Ok")
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("status failed")
            });
    }

    return (
        <Form onSubmit={formsubmit} >
            <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="name" id="exampleEmail" value={name} onChange={(e) => { setName(e.target.value) }} required placeholder="Enter Name" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Mobile</Label>
                <Input type="text" name="mobileno" value={mobileno} onChange={(e) => { setMobileno(e.target.value) }} id="exampleEmail" placeholder="Enter Mobileno" />
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="coursename" value={coursename} onChange={(e) => { setCoursename(e.target.value) }} id="exampleSelect">
                    <option>React</option>
                    <option>ReactNative</option>
                    <option>Nodejs</option>
                    <option>Django</option>
                    <option>Networking</option>
                </Input>
            </FormGroup>

            <Button >Submit</Button>

        </Form>
    );
}

export default Example;