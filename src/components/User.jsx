import React, { Component } from "react";
import Navbar from "./Navbar";

class User extends Component {
  state = {
    searchString: "",
    businesLists: JSON.parse(localStorage.getItem("BusinessList")) || []
  };

  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    let searching = this.state.businesLists,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      searching = searching.filter(item => {
        return (
          item.name.toLowerCase().match(searchString) ||
          item.description.toLowerCase().match(searchString)
        );
      });
    }

    return (
      <>
        <Navbar />
        <section className="bg-light" id="about">
          <div className="container" style={{ textAlign: "" }}>
            <header className="mb-5 pb-4">
              <h2 className="font-weight-bold text-primary text-uppercase lined letter-spacing-3">
                Users Page
              </h2>
            </header>

            <>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Search..."
                value={this.state.searchString}
                onChange={this.handleChange}
              />
              <span>
                Searches are filtered via Name and Description column of the
                table
              </span>
            </>
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
                </tr>
              </thead>
              <tbody>
                {searching.map((item, index) => {
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }
}

export default User;
