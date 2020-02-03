import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

class Listing extends Component {
  state = {
    show: false,
    counter: 0,
    active: true,
    shows: false
  };

  appendCategories = () => {
    this.setState({ active: !this.state.active });
  };

  changeCatergory = e => {
    localStorage.setItem("ChangeCategories", e.target.value);
  };

  changeCatergory2 = e => {
    localStorage.setItem("ChangeCategory", e.target.value);
  };

  handleopen = event => {
    let counter = event;
    this.setState({
      show: true,
      counter
    });
    //console.log(this.state.datacounter);
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  onDelete = name => {
    this.props.onDelete(name);
  };

  onUpdate = e => {
    e.preventDefault();

    let updatedData = this.props.list;

    updatedData.map(item => {
      if (item.name === this.props.list[this.state.counter].name) {
        item.name = this.nameInput.value;
        item.description = this.descriptionInput.value;
        item.phone = this.phoneInput.value;
        item.email = this.emailInput.value;
        item.websiteURL = this.websiteInput.value;
        item.categories = this.categoryInput.value;
        item.imageURL = this.imageInput.value;
      }
    });

    this.setState({ shows: true });

    localStorage.setItem("BusinessList", JSON.stringify(updatedData));
  };
  render() {
    let optionItems = this.props.category.map((item, index) => {
      return (
        <option
          key={index}
          value={item.categories}
          ref={categoryInput => (this.categoryInput = categoryInput)}
        >
          {item.categories}
        </option>
      );
    });

    let listingData = this.props.list.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.websiteURL}</td>
          <td>{item.categories}</td>
          <td> {item.imageURL}</td>
          <td>
            {" "}
            <button
              className="btn btn-danger btn-sm"
              onClick={this.onDelete.bind(this, index)}
            >
              Delete
            </button>
            {"   "} {"       "}
            <button
              className="btn btn-success btn-sm"
              onClick={this.handleopen.bind(this, index)}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <section className="bg-light" id="about">
          <div className="container" style={{ textAlign: "" }}>
            <header className="mb-5 pb-4">
              <h2 className="font-weight-bold text-primary text-uppercase lined letter-spacing-3">
                Business Listing
              </h2>
            </header>
            <table className="table table-hover table-responsive-md">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website URL</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action(s)</th>
                </tr>
              </thead>
              <tbody>{listingData.length ? listingData : "No Data"}</tbody>
            </table>
          </div>

          {listingData.length ? (
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Updates</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.onUpdate}>
                  {this.state.shows && (
                    <Alert show={this.state.shows} variant="success">
                      <Alert.Heading>Updated</Alert.Heading>
                      <p>
                        <em>Thank you ! </em> for updating the content.
                        <p> Close the form to see the updates</p>
                      </p>
                      <hr />
                      <div className="d-flex justify-content-end">
                        <Button
                          onClick={() => this.setState({ shows: false })}
                          variant="outline-success"
                        >
                          Close
                        </Button>
                      </div>
                    </Alert>
                  )}
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Business Name</Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Business Name"
                      name="bussinessname"
                      ref={nameInput => (this.nameInput = nameInput)}
                      defaultValue={
                        this.props.list[this.state.counter].name || ""
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasictext">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      name="Description"
                      ref={descriptionInput =>
                        (this.descriptionInput = descriptionInput)
                      }
                      defaultValue={
                        this.props.list[this.state.counter].description || " "
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasictext">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      ref={phoneInput => (this.phoneInput = phoneInput)}
                      defaultValue={
                        this.props.list[this.state.counter].phone || ""
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasictext">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      ref={emailInput => (this.emailInput = emailInput)}
                      defaultValue={
                        this.props.list[this.state.counter].email || ""
                      }
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasictext">
                    <Form.Label>Website URL </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Website URL"
                      name="website URL"
                      ref={websiteInput => (this.websiteInput = websiteInput)}
                      defaultValue={
                        this.props.list[this.state.counter].websiteURL || ""
                      }
                    />
                  </Form.Group>

                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">
                      Categories
                    </label>
                    <div className="col-sm-10">
                      <select onChange={this.changeCatergory} required>
                        {!this.state.show ? <option> - </option> : null}
                        <option> - </option>
                        {optionItems}
                      </select>{" "}
                      {"   "} {localStorage.setItem("ChangeCategory", "")}
                      {!this.state.active ? (
                        <>
                          {" "}
                          {"   "}{" "}
                          <p style={{ marginTop: "20px", fontWeight: 700 }}>
                            Add other category :{" "}
                          </p>
                          {"  "}
                          <select onChange={this.changeCatergory2} required>
                            <option> - </option>
                            {optionItems}
                          </select>{" "}
                        </>
                      ) : (
                        ""
                      )}
                      <button
                        type="button"
                        onClick={this.appendCategories}
                        className={
                          this.state.active ? "btn btn-info" : "btn btn-danger"
                        }
                      >
                        <b>{this.state.active ? "+" : "-"} </b>
                      </button>
                    </div>
                  </div>

                  <Form.Group controlId="formBasictext">
                    <Form.Label>Image URL </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Image URL"
                      name="imageurl"
                      ref={imageInput => (this.imageInput = imageInput)}
                      defaultValue={
                        this.props.list[this.state.counter].imageURL || ""
                      }
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="submit"
                    onSubmit={this.onUpdate}
                  >
                    Update
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </section>
      </>
    );
  }
}

export default Listing;
