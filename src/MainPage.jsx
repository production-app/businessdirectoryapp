import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Business from "./components/Business";
import Listing from "./components/Listing";
import User from "./components/User";

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesLists: JSON.parse(localStorage.getItem("BusinessList")) || [],
      categoriesList: JSON.parse(localStorage.getItem("CategoriesList")) || []
    };
  }
  componentDidMount() {
    const businesLists = this.getBusinessList();
    this.setState({
      businesLists
    });

    const categoriesList = this.getCategories();
    this.setState({
      categoriesList
    });
  }

  addCategories = categories => {
    const data = this.state.categoriesList;

    data.push({
      categories
    });
    this.setState({ categoriesList: data });
    localStorage.setItem("CategoriesList", JSON.stringify(data));
  };

  addBusiness = (
    name,
    description,
    phone,
    email,
    websiteURL,
    categories,
    imageURL
  ) => {
    let businessEntry = this.state.businesLists;

    businessEntry.push({
      name,
      description,
      phone,
      email,
      websiteURL,
      categories,
      imageURL
    });
    this.setState({ businesLists: businessEntry });
    localStorage.setItem("BusinessList", JSON.stringify(businessEntry));
  };

  getBusinessList() {
    return this.state.businesLists;
  }

  getCategories() {
    return this.state.categoriesList;
  }

  onDelete = id => {
    const getBussiness = this.getBusinessList();

    const filteredItem = getBussiness.filter((item, index) => {
      return index !== id;
    });
    console.log(filteredItem);

    this.setState({ businesLists: filteredItem });
    localStorage.setItem("BusinessList", JSON.stringify(filteredItem));
  };

  render() {
    return (
      <>
        {/* <Login /> */}
        <Navbar />
        <Categories
          data={this.state.businesLists}
          addCategories={this.addCategories}
        />
        <Business
          categories={this.state.categoriesList}
          addBusiness={this.addBusiness}
          data2={this.state.businesLists}
        />
        <Listing
          list={this.state.businesLists}
          category={this.state.categoriesList}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
        />
      </>
    );
  }
}
