# Simple Shopping Cart with React + Vite

## To run it locally:
### cd shopping-cart-app
### npm run dev


## Deployed with Netlify:
https://bucolic-pavlova-e954bf.netlify.app/

## Applications Featured in this project:

#### -> I use a shop-data.json file where I have some products with id,name, imageUrl and price. 
#### -> Built a homepage with Home component. This page is static.
#### -> I have a navbar with Navigation component. If you click on Shop it will open a buncho of products list which I added from my shop-data.json
#### -> ProductCard component is created for product listing and I gave every products an add to cart button.
#### -> Each product has a different key prop and I used CartContext and ProductContext hooks for all the logics about adding product removing product, total price calculation, total quantity, updating the total price dynamically.
#### -> There's a checkout route page with CheckOut item component where you can clear the items from checkout, add or remove an item from the cart.
#### -> I used localStorage.getItem method to save my cart data in browser so that the cart will be saved upon refreshing the browser.


## Technologies used:

#### -> React + Vite
#### -> React Router v6
#### -> Context API
#### -> Sass (.scss) for styling. I made it responsive for desktop tablet and mobile screens.
#### -> Created a fake data using shop-data.json file.

## Thank you 

