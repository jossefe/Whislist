import React from 'react';

const wishes = [
  { id: 0, completed: 'False', text: 'A new laptop' },
  { id: 1, completed: 'True', text: 'Travel to Arabia Saudi' },
  { id: 2, completed: 'False', text: 'A new Car' },
];

export default function App() {
  return (
    <div>
      <h1>My Whislist</h1>
      <fieldset>
        <legend>New wish:</legend>
        <input placeholder="My new Wish" type="text" />
      </fieldset>
      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <input type="checkbox" checked={wish.completed} id={wish.id} />
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>

    </div>
  );
}
