import React from 'react';
import { Link } from 'gatsby';

// import { navigate } from 'gatsby';
// function goToSlicemasters() {
//   // wait for 2 seconds
//   setTimeout(() => {
//     console.log('Go to slicers ...!!!');
//     navigate('/slicemasters', { replace: true });
//   }, 2000);

//   // change the page
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead !</Link>
        </li>
      </ul>
    </nav>
  );
}
