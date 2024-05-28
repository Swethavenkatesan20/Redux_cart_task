# React Redux Cart Page

this is shopping cart page built using React and Redux Toolkit. Implemented how to manage state in a React application using Redux for adding, removing, and updating items in a cart. The UI is styled using Bootstrap for responsiveness.

# flow of code

- Display a list of products with their details.
- Increase or decrease the quantity of each product.
- Automatically update the total quantity and total amount in the cart.
- Responsive design using Bootstrap.



cartPage.js :
--- for rendering the shopping cart UI, displaying the list of products in the cart, and allowing users to increase or decrease the quantity of each product. It also displays the total quantity and total amount for the cart.
here useSelector is used to access the products, totalQuantity, and totalAmount from the Redux state.

cartSlice.js :
--- contains the Redux slice for managing the shopping cart state. A slice in Redux Toolkit includes the state, reducers, and actions all in one place, making it easier to manage and maintain