import React, { Component } from "react";

class Business extends Component {
  state = {
    active: true,
    show: true
  };
  submitBusiness = e => {
    //console.log();
    e.preventDefault();
    this.props.addBusiness(
      this.nameInput.value,
      this.decriptionInput.value,
      this.phoneInput.value,
      this.emailInput.value,
      this.websiteInput.value,
      (localStorage.getItem("ChangeCategories") || "").concat(
        " ",
        localStorage.getItem("ChangeCategory") || ""
      ),
      this.imageInput.value
    );
    this.nameInput.value = "";
    this.decriptionInput.value = "";
    this.phoneInput.value = "";
    this.emailInput.value = "";
    this.websiteInput.value = "";
    localStorage.setItem("ChangeCategories", "-");
    this.imageInput.value = "";

    this.setState({ show: false });
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

  render() {
    let optionItems = this.props.categories.map((item, index) => {
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
    return (
      <>
        <section id="expertise">
          <div className="container">
            <header className="mb-5 pb-4">
              <h2 className="font-weight-bold text-primary text-uppercase lined letter-spacing-3">
                Add Business
              </h2>
            </header>
            <div className="card">
              <div className="card-header">Business Directory App</div>
              <div className="card-body">
                <h5 className="card-title">Create Business</h5>
                <p className="card-text">
                  Kindly add the Category of businesses in the field below{" "}
                </p>
                <form onSubmit={this.submitBusiness}>
                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">
                      Business Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Business Name"
                        ref={nameInput => (this.nameInput = nameInput)}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">
                      Description
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Description"
                        ref={decriptionInput =>
                          (this.decriptionInput = decriptionInput)
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">
                      Phone Number
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Phone"
                        ref={phoneInput => (this.phoneInput = phoneInput)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Email"
                        ref={emailInput => (this.emailInput = emailInput)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="" className="col-sm-2 col-form-label">
                      Website URL
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Website URL"
                        ref={websiteInput => (this.websiteInput = websiteInput)}
                      />
                    </div>
                  </div>

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

                  <div className="form-group row">
                    <label
                      htmlFor="inputPassword3"
                      className="col-sm-2 col-form-label"
                    >
                      Image URL
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="Website URL"
                        ref={imageInput => (this.imageInput = imageInput)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </>
    );
  }
}

export default Business;
