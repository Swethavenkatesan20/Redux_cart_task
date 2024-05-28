import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from './cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartPage = () => {
  const { products, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 bg-primary p-2 text-dark bg-opacity-50">Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8 bg-primary p-2 text-dark bg-opacity-10">
          {products.map(product => (
            <div key={product.id} className="card mb-3 bg-success p-2 text-dark bg-opacity-10 border border-5">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={product.thumbnail} className="card-img" alt={product.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Price: ${product.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <button
                          className="btn btn-danger btn-sm mr-2"
                          onClick={() => dispatch(decrementQuantity(product.id))}
                        >
                          Remove from cart
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className="btn btn-success btn-sm ml-2"
                          onClick={() => dispatch(incrementQuantity(product.id))}
                        >
                          Add to cart
                        </button>
                      </div>
                      <div>
                        <span>Item Total: ${product.price * product.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 ">
          <div className="card ">
            <div className="card-body border border-5 bg-primary p-2 text-dark bg-opacity-25">
              <h5 className="card-title bg-warning p-2 text-white bg-opacity-75">Cart Summary</h5>
              <p className='border border-3'>Total Quantity: {totalQuantity}</p>
              <p className='border border-3'>Total Amount: ${totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
