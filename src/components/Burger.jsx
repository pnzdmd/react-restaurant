import React, { Component } from 'react';

class Burger extends Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;

    return (
      <li className='menu-burger'>
        <div className='image-container'>
          <img src={image} alt={name} />
        </div>
        <div className='burgr-details'>
          <h3 className='burger-name'>
            {name}
            <span className='price'>{price} ₽</span>
          </h3>
          <p>{desc}</p>
          <button className='buttonOrder'>Заказать</button>
        </div>
      </li>
    );
  }
}

export default Burger;
