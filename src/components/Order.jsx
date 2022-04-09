import React, { Component } from 'react';
import Shipment from './Shipment';

class Order extends Component {
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];

    const isAvailable = burger && burger.status === 'available';
    if (!isAvailable) {
      return (
        <li key={key} className='unavailable'>
          {/*  если бургер не был удален использую его название, если удален то используем слово "бургер" */}
          Извините, {burger ? burger.name : 'бургер'} временно недоступен
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <span>{count}</span>
          шт. {burger.name}
          <span> {count * burger.price} ₽</span>
          <button className='cancelItem'>&times;</button>
        </span>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    // метод подсчета общей цены заказа
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === 'available';
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }

      return prevTotal;
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>Ваш заказ</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
        {/*  если блюдо выбрано, то показываю его название, если нет, 
       то показыаю станд. текст */}
        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className='nothingSelected'>
            выберите блюда и добавьте к заказу
          </div>
        )}
      </div>
    );
  }
}

export default Order;
