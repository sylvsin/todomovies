import React, { useContext, useCallback, useState } from "react";
import { AppContext, AppConfig } from "../../AppContext";
import { ProductContext } from "../../ProductProvider";
// import "./Order.css";
/**
 * 
 * {
  "id":2742,
  "companyId":321,
  "created":"0001-01-01T00:00:00",
  "createdBy":"sebastian.tegel@tegelconsulting.se",
  "paymentMethod":"MasterCard",
  "totalPrice":199,
  "status":2,
  "orderRows":[]
}
 */

const payments = [
  {
    id: 1,
    label: "MasterCard"
  },
  {
    id: 2,
    label: "Paypal"
  },
  {
    id: 3,
    label: "Bitcoin"
  }
]

const Order: React.FC = () => {
  const { api }: AppConfig = useContext(AppContext);
  const { products } = useContext(ProductContext);
  const [name, setName] = useState("your name");
  const [paymentTitle, setPaymentTitle] = useState("MasterCard");

  const submitOrder = useCallback((event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (api) {
        const totalPrice = products && products.filter(prod => prod.isAddedToCart).map(prod => prod.price).reduce((a, b) => a + b, 0);
        const data = {
          companyId: 0,
          name,
          paymentMethod: paymentTitle,
          totalPrice
        };
        api
          .post("orders", data, {
            headers: { "Content-Type": "application/json" }
          })
          .then(response => console.log(response));
      }
    }, [api, name, paymentTitle, products] );

  const totalPrice = products && products.filter(prod => prod.isAddedToCart).map(prod => prod.price).reduce((a, b) => a + b, 0);

  return (
    <div className="order-wrapper">
      <div>Your orders, total amount: {totalPrice} $</div>
      <br/>
      <div>
        <form onSubmit={submitOrder}>
          <label>
            Name: &nbsp;
            <input type="text" value={name} onChange={e => {setName(e.target.value);}} />
          </label>
          <br/>
          <label>
            Payment Method: &nbsp;
            <select
              onChange={e => {
                setPaymentTitle(e.target.value);
              }}
            >
              {payments.map(payment => (
                <option key={payment.id}>{payment.label}</option>
              ))}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Order;
