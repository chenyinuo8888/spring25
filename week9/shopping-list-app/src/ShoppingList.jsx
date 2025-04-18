import React from 'react';

function ShoppingList({ shoppingList, removeItem }) {
  // Define the overall budget (this could also be a prop or come from state)
  const overallBudget = 200.00;

  // Calculate the total spent by summing up the cost for each item.
  // Make sure each item.cost is a valid number.
  const totalSpent = shoppingList.reduce((acc, item) => acc + Number(item.cost), 0);

  // Calculate remaining budget as the difference between overallBudget and totalSpent.
  const remainingBudget = overallBudget - totalSpent;

  return (
    <>
      {/* Display the remaining budget. toFixed(2) ensures two decimal places */}
      <h2>Remaining Budget: ${remainingBudget.toFixed(2)}</h2>

      {/* Iterate over the shopping list and display each item */}
      {shoppingList.map((val, index) => (
        <div
          className={val.purchased ? 'card flex-apart green' : 'card flex-apart'}
          key={index}
        >
          <span>{val.name} - ${Number(val.cost).toFixed(2)}</span>
          <span>
            <button className='btn' onClick={removeItem} value={val.name}>
              x
            </button>
          </span>
        </div>
      ))}
    </>
  );
}

export default ShoppingList;

