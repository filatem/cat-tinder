import React, { Component } from 'react';
import { Button, ListGroupItem, Modal } from 'react-bootstrap'


class Cat extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    let { cat } = this.props
    return (
      <div>
      	<ListGroupItem>
          <h4>
            <span className='cat-name'>
              {cat.name}
            </span> - <small className='cat-age'>age {cat.age}</small>
          </h4>
            <span className='cat-enjoys'>
              {cat.name} enjoys {cat.enjoys}
            </span>
            <br/>
            <br/>
        <Button variant="primary" onClick={this.handleShow}>
          More Infromation
        </Button>
        <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cat Tinder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>
              <span className='cat-name'>
              {cat.name}
            </span>
            <div className='cat-age'> age {cat.age}</div>

              <span className='cat-enjoys'>
              {cat.name} enjoys {cat.enjoys}
            </span></h4></Modal.Body>

          <Modal.Footer>
            <Button
              variant="btn btn-sm btn-outline-info"
              onClick={() => this.props.handleUpdate(cat.id)}>Edit {cat.name}
            </Button>
            <Button
              variant="btn btn-sm btn-outline-danger"
              onClick={() => this.props.handleDelete(cat.id)}>Delete {cat.name}
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
        </ListGroupItem>
      </div>
    );
  }
}

export default Cat;
