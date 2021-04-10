import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    .active {
      background: var(--yellow);
    }
  }
`;

function countPizzasInToppings(pizzas) {
  // Return the pizzas with counts
  // console.log('countPizzasInToppings', pizzas);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  //
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id]; // using id because if name has emoji, it can break
      // console.log(topping);
      if (existingTopping) {
        // console.log(existingTopping.name);
        // if it is, increment by 1
        existingTopping.count += 1;
      } else {
        // console.log('new Topping', topping.name);
        // otherwise create a new entry in our acc and set it to one
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter() {
  // Get a full list of the toppings
  // Get a full list of the pizzas with their toppings
  const { pizzas } = useStaticQuery(graphql`
    query {
      # toppings: allSanityTopping {
      #   nodes {
      #     name
      #     id
      #     vegetarian
      #   }
      # }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  // console.clear();
  // Count how many pizzas are in each topping
  // console.log(toppings.nodes);
  const toppingsWithCount = countPizzasInToppings(pizzas.nodes);
  // console.log('toppingsWithCount', toppingsWithCount);
  // Loop over the list of toppings and display the topping and the count of pizzas in that topping
  // Link it up . . . . . .
  return (
    <ToppingStyles>
      {toppingsWithCount.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingStyles>
  );
}
