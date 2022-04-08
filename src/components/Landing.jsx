import React, { Component } from 'react';
import restaurant from '../sample-restaurants';

class Landing extends Component {
  state = {
    display: false,
    title: '',
    url: '',
  };
  // метод отображения блока с названиями ресторанов
  displayList = () => {
    //создаю переменную и переношу в нее значение из this.state.display
    const { display } = this.state;
    // меняю свойство display на противоположное
    this.setState({ display: !display });
  };
  // метод для выбора конкретного ресторана по title и url
  getTitle = (restaurant) => {
    // в константы переношу значение из переменной restaurant
    const { title, url } = restaurant;
    this.setState({ title: title, url: url, display: false });
  };
  // метод для перехода на страницу выбранного ресторана
  getToRestaurant = () => {
    const { url } = this.state;
    this.props.history.push(`/restaurant/${url}`);
  };

  render() {
    return (
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>
          <div
            onClick={this.displayList}
            className='restaurant_select_top-header font-effect-outline'
          >
            {/* если есть название ресторана то выводим его, если нет, то выводится стандартный текст */}
            {this.state.title ? this.state.title : 'Выбери ресторан'}
          </div>
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>
        {/* если display ровно true, то  отображаю блок*/}
        {this.state.display ? (
          <div className='restaurant_select_bottom'>
            <ul>
              {restaurant.map((restaurant) => {
                return (
                  <li
                    onClick={() => this.getTitle(restaurant)}
                    key={restaurant.id}
                  >
                    {restaurant.title}
                  </li>
                );
              })}
            </ul>
            {/* если display ровно false, то  не отображаю блок*/}
          </div>
        ) : null}
        {/* если есть название  и display false, то отображаю кнопку, если нет то не отображаю */}
        {this.state.title && !this.state.display ? (
          <button onClick={this.getToRestaurant}>Перейти в ресторан</button>
        ) : null}
      </div>
    );
  }
}

export default Landing;
