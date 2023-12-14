import "./ModalSuccess.css";

export const ModalSuccess = ({ resetForm }) => {
  return (
    <div className="success">
      <p className="success_text">Ваш заказ успешно отправлен!</p>
      <button className="success_button" onClick={() => resetForm()}>
        Вернуться назад
      </button>
    </div>
  );
};
