import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
              name: '',
              age: '',
              enjoys: ''
            }
        }
    }
    handleChange(event){
        // console.log(event.target.value);
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }

    submitCat() {
        // let {addCat} = this.props
        this.props.addCat(this.state.form)
    }

  render() {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Form>
                        <Form.Label id="name">Name</Form.Label>
                        <Form.Control
                            style={{width: '200px'}}
                            type="text"
                            name="name"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.form.name}
                        />
                        <Form.Label id="age">Age</Form.Label>
                        <Form.Control
                            style={{width: '200px'}}
                            type="number"
                            name="age"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.form.age}
                        />
                        <Form.Label id="enjoys">Enjoys</Form.Label>
                        <Form.Control
                            style={{width: '200px'}}
                            type="text"
                            name="enjoys"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.form.enjoys}
                        /><br/>
                        <Button onClick={this.submitCat.bind(this)} variant="btn btn-outline-success" type="submit" id="submit">Create Cat Profile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default NewCat;