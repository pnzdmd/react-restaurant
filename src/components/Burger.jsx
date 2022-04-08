import React, { Component } from 'react';

class Burger extends Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    // если статус status = available, то isAvailable = true
    const isAvailable = status === 'available';

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
          <button
            disabled={!isAvailable}
            onClick={() => this.props.addToOrder(this.props.index)}
            className='buttonOrder'
          >
            {/* если значение isAvailable = true, то показываем "Заказать" */}
            {isAvailable ? 'Заказать' : 'Временно нет'}
          </button>
        </div>
      </li>
    );
  }
}

export default Burger;
