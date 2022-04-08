import React from 'react';

class AddBurgerForm extends React.Component {
  // для инпута создаю ссылки Ref
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  // обработчик формы
  createBurger = (event) => {
    event.preventDefault();
    // создаю константу для приема всех значений полей инпутов
    const burger = {
      name: this.nameRef.current.value,
      // перевел значение в числовой формат
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    // через props передаю родителю данные с инпутов по бургерам
    this.props.addBurger(burger);
    // обнуляю поля формы
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className='burger-edit' onSubmit={this.createBurger}>
        <input
          ref={this.nameRef}
          name='name'
          type='text'
          placeholder='Name'
          autoComplete='off'
        />
        <input
          ref={this.priceRef}
          name='price'
          type='text'
          placeholder='Price'
          autoComplete='off'
        />

        <select ref={this.statusRef} name='status' className='status'>
          <option value='available'>Доступно</option>
          <option value='unavailable'>Убрать из меню</option>
        </select>
        <textarea ref={this.descRef} name='desc' placeholder='Desc' />
        <input
          ref={this.imageRef}
          name='image'
          type='text'
          placeholder='Image'
          autoComplete='off'
        />
        <button type='submit'>+ Добавить в меню</button>
      </form>
    );
  }
}

export default AddBurgerForm;
