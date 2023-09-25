import React, { Component } from 'react';

class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>List-Keys</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListKeys;
