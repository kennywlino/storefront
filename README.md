# LAB - CLASS 35 - 38

## Project: Virtual Store -- Application State with Redux

## Author: Kenny W. Lino

## Problem Domain

In this lab, we begin working with Redux in order to store global state information in a Virtual Store app. We are tasked to build this app from scratch using the lab directions and following visual as a guide.

  ![Store Preview](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-36/lab/preview.png)

With Redux, we store state data about the categories and products in our virtual store. This is done by creating a Redux store (not to be confused with the app virtual store) and defining a number of reducers for categories and products and our active category and dispatch functions to modify the state for these reducers.

After setting up these reducers, we wrap our App with a Provider (like the React Provider API) and pass it our store() function created within the index of our store. This is one of the steps that allows our child components to gain access to the data within our store. From there, we bring in the appropriate data into our components and set up a mapStateToProps and mapDispatchToProps function which is passed to the react-redux connect() function to complete our component access to the data.

We also take a look at the Material UI Component Library to help us set up our front-end. We bring in a number of components over the span of the project, including the AppBar for the Header component and the Breadcrumbs component to display our product categories.

In CLASS-37, we split the logic for our products from one reducer into individual reducers that manage products, cart, categories and our active category. We also globalize the actions for our Redux store by moving them into a single file. When an action such as `SELECT_CATEGORY` is selected, this will trigger actions on any reducer that has that action as a possible type. In this case, this would trigger actions for our active category and our products to filter only the relevant items.

We also add a new component for our cart to display info about products the user has added. This currently shows the number of items added as well as the list of items in the cart.

In CLASS-38, we replace the hard-coded categories and products in our reducers with data collected from an external API. We do this by setting up the Redux middleware, thunk, which allows our reducer to call the API and set the data in state by calling the appropriate action after the promise is fulfilled. Using this functionality, we keep our inventory held in the database in sync with our app when users add new items to their cart.  


## Links and Resources

* [CLASS-36: CodeSandbox Link](https://1olmp4-3000.preview.csb.app/)
* [CLASS-37: CodeSandbox Link](https://gw8zvn-3000.preview.csb.app/)
* [CLASS-38: CodeSandbox Link](https://5wmsfr-3000.preview.csb.app/)

## UML

![CLASS-36 UML](./assets/CLASS-36_Virtual_Store.excalidraw.png)