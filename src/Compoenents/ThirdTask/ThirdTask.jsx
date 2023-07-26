import "./ThirdTask.css";
import { useState, useEffect } from "react";

function ThirdTask() {
  const [bill, setBill] = useState(100);
  const [tip, setTip] = useState(5);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [totalBill, setTotalBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  useEffect(() => {
    tipButtonHandler(bill, tip, numOfPeople);
  }, [bill, tip, numOfPeople]);

  const tipButtonHandler = (bill, tip, numOfPeople) => {
    let tipAmount = (bill * tip) / 100;
    let tipPerPerson = tipAmount / numOfPeople;
    let totalBillAmount = bill + tipAmount;
    let totalBillPerPerson = totalBillAmount / numOfPeople;
    setTotalBill(totalBillAmount);
    setTipAmount(tipAmount);
    console.log(
      "tipamount :",
      tipAmount,
      "tipPerPerson :",
      tipPerPerson,
      "totalBillAmount :",
      totalBillAmount,
      "totalBillPerPerson :",
      totalBillPerPerson
    );
  };

  return (
    <div className="third-task">
      <h1 className="splitter-header">
        spli <br /> tter
      </h1>
      <div className="splitter">
        <div className="splitter-left">
          <div className="bill">
            <h5>Bill</h5>
            <input
              className="bill-input"
              type="number"
              placeholder={bill}
              onChange={(e) => {
                setBill(e.target.value);
              }}
            />
          </div>
          <div className="select-tip">
            <h5>Select tip %</h5>
            <div className="select-tip-btn-group">
              <button
                className="select-tip-btn"
                onClick={() => {
                  setTip(5);
                }}
              >
                5%
              </button>
              <button
                className="select-tip-btn"
                onClick={() => {
                  setTip(10);
                }}
              >
                10%
              </button>
              <button
                className="select-tip-btn"
                onClick={() => {
                  setTip(15);
                }}
              >
                15%
              </button>
              <button
                className="select-tip-btn"
                onClick={() => {
                  setTip(25);
                }}
              >
                25%
              </button>
              <button
                className="select-tip-btn"
                onClick={() => {
                  setTip(50);
                }}
              >
                50%
              </button>
              <button className="select-tip-btn">costum</button>
            </div>
          </div>
          <div className="num-of-people">
            <h5>Number of People</h5>
            <input
              className="bill-input"
              type="number"
              placeholder={numOfPeople}
              onChange={(e) => {
                setNumOfPeople(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="splitter-right">
          <div className="tip-amount">
            <div className="tip-amount-window" style={{ marginBottom: "40px" }}>
              <div>
                <h4>Tip Amount</h4>
                <h5>/ person</h5>
              </div>
              <div>
                <h1>$ {tipAmount}</h1>
              </div>
            </div>
            <div
              className="tip-amount-window"
              style={{ marginBottom: "125px" }}
            >
              <div>
                <h4>Total</h4>
                <h5>/ person</h5>
              </div>
              <div>
                <h1>$ {totalBill}</h1>
              </div>
            </div>
            <button className="reset-button">reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdTask;
