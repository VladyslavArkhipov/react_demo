import { useState } from "react";
import "./Form.css";
import { sendOrder } from "../../actions/actions";

const Form = ({ setIsFormSubmitted }) => {
  const [isCaramelSelected, setIsCaramelSelected] = useState(false);
  const [isBerrySelected, setIsBerrySelected] = useState(false);
  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  function resetForm() {
    setIsCaramelSelected(false);
    setIsBerrySelected(false);
    setIsDeliverySelected(false);
    setIsFormSubmitted(true);
  }

  function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    sendOrder(formData, resetForm);
  }
  return (
    <form action="#" method="post" onSubmit={submitForm}>
      <input
        type="text"
        className="personalInfo"
        name="name"
        placeholder="ФИО"
        id="name"
      ></input>

      <input
        type="tel"
        name="tel"
        placeholder="Номер телефона"
        id="phone"
        className="personalInfo"
      ></input>

      <input
        type="email"
        className="personalInfo"
        name="email"
        placeholder="EMail"
        id="email"
      ></input>

      <label htmlFor="bisquitSelect">
        Выберите бисквит:
        <select name="bisquit" id="bisquit">
          <option value="">--Выберите бисквит--</option>
          <option value="Ванильный">Ванильный</option>
          <option value="Шоколадный">Шоколадный</option>
          <option value="Красный бархат">Красный бархат</option>
          <option value="Морковный">Морковный</option>
          <option value="Медовик">Медовик</option>
        </select>
      </label>
      <p>Начинка:</p>
      <label htmlFor="caramel">
        Карамель на сливочном масле и сливках
        <input
          type="radio"
          name="topping"
          id="caramel"
          value="Caramel"
          onChange={() => {
            setIsCaramelSelected(true);
            setIsBerrySelected(false);
          }}
        ></input>
      </label>

      {isCaramelSelected && (
        <label htmlFor="peanuts">
          Add peanuts?
          <input
            type="checkbox"
            name="additional_topping"
            value="peanuts"
            id="peanuts"
          />
        </label>
      )}

      <label htmlFor="berry">
        Ягоды
        <input
          type="radio"
          name="topping"
          id="berry"
          value="Berry"
          onChange={() => {
            setIsBerrySelected(true);
            setIsCaramelSelected(false);
          }}
        ></input>
      </label>

      {isBerrySelected && (
        <label htmlFor="berries">
          Ягоды:
          <select name="berries" id="berries">
            <option value="">--Please choose an option--</option>
            <option value="strawberry">Клубника</option>
            <option value="cherry">Вишня</option>
            <option value="currant">Смородина</option>
            <option value="raspberries">Малина</option>
          </select>
        </label>
      )}

      <label htmlFor="banana">
        Банан
        <input
          type="radio"
          name="topping"
          id="banana"
          value="Banan"
          onChange={() => {
            setIsBerrySelected(false);
            setIsCaramelSelected(false);
          }}
        ></input>
      </label>

      <label htmlFor="cream">
        Выберите крем:
        <select name="Cream" id="cream">
          <option value="">--Выберите крем--</option>
          <option value="Классический">Классический</option>
          <option value="Шоколадный">Шоколадный</option>
        </select>
      </label>

      <label htmlFor="delivery">
        Доставка
        <input
          type="radio"
          name="delivery"
          id="delivery"
          value="delivery"
          onChange={() => setIsDeliverySelected(true)}
        ></input>
      </label>

      {isDeliverySelected && (
        <label htmlFor="address">
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Адрес доставки"
            className="personalInfo"
          />
        </label>
      )}

      <label htmlFor="pickup">
        Самовывоз
        <input
          type="radio"
          name="delivery"
          id="pickup"
          value="pickup"
          onChange={() => setIsDeliverySelected(false)}
        ></input>
      </label>

      <label htmlFor="comment">
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Комментарий"
          className="personalInfo"
        ></input>
      </label>

      <input type="submit"></input>
    </form>
  );
};

export default Form;
