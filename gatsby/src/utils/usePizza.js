import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. create some state to hold our order
  // we got rid of this line because we moved usestate tp to the provider
  // const [order, setOrder] = useState([]);
  // Now we access both our state and our updater function(setOrder)
  // via context
  const [order, setOrder] = useContext(OrderContext);
  // const silly = useContext(OrderContext);
  // console.log(order, setOrder);

  // 2. Make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data to a serverless function when they check out
  // todo

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
