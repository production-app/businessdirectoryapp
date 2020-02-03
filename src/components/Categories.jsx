import React, { Component } from "react";

class Categories extends Component {
  addSubmit = e => {
    e.preventDefault();

    this.props.addCategories(this.categaoriesInput.value.toLowerCase());
    this.categaoriesInput.value = "";

    this.props.data.map(item => {
      console.log(item.categories);
    });
  };
  render() {
    return (
      <>
        <section className="bg-light" id="about">
          <div className="container" style={{ textAlign: "" }}>
            <header className="mb-5 pb-4">
              <h2 className="font-weight-bold text-primary text-uppercase lined letter-spacing-3">
                Add Categories
              </h2>
            </header>
            <div className="card">
              <div className="card-header">Business Directory App</div>
              <div className="card-body">
                <h5 className="card-title">Add Categories</h5>
                <p className="card-text">
                  Kindly add the Category of businesses in the field below
                </p>
                <form className="form-inline" onSubmit={this.addSubmit}>
                  <label className="sr-only" htmlFor="inlineFormInputName2">
                    Category:
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Web"
                    ref={categaoriesInput =>
                      (this.categaoriesInput = categaoriesInput)
                    }
                  />

                  <button className="btn btn-primary mb-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Categories;
