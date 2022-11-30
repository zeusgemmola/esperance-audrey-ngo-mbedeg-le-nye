import React, { useState, useEffect } from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import Spiner from "./components/Spinner";
import CurrencyRow from "./CurrenciesRow";

const Base_Currency = `https://api.currencyapi.com/v3/latest?apikey=YiKt8U3eERiAn8wNkSUfURRbs4ph4qI92QuaOuay&base_currency=`;

const App = () => {
  const [CurrencyOptions] = useState(["EUR", "CHF", "GBP", "USD"]);

  const [stateDataCurrency, setStateDataCurrency] = useState({
    isLoading: true,
    dataCurrency: {}
  });

  const { isLoading, dataCurrency } = stateDataCurrency;

  const [amount, setAmount] = useState("0");

  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("EUR");
  const handleFromCurrency = (e) => setFromCurrency(e.target.value);

  const handleToCurrency = (e) => setToCurrency(e.target.value);
  const handleChangeAmount = (e) => setAmount(e.target.value);

  function setInvalid(field) {
    var status = "invalid";
    const valueInput = parseInt(field, 10);
    if (valueInput == field && valueInput !== "") {
      status = "valid";
    }
    return status;
  }

  useEffect(() => {
    //console.log(fromCurrency);
    const fetchCurrencies = async () => {
      //console.log(amount);
      fetch(Base_Currency + fromCurrency)
        .then((res) => res.json())
        .then((data) => {
          setStateDataCurrency({
            dataCurrency: data.data,
            isLoading: false
          });
        });
    };
    fetchCurrencies();
  }, [fromCurrency]);

  return (
    <div className="App">
      <header>
        <nav className="AppBar">
          <img
            className="AppBar-logo"
            src={logo}
            aria-label="people"
            alt="People"
          />
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>

            <CurrencyRow
              CurrencyOptions={CurrencyOptions}
              fromCurrency={fromCurrency}
              handleFromCurrency={handleFromCurrency}
              toCurrency={toCurrency}
              handleToCurrency={handleToCurrency}
              amount={amount}
              handleChangeAmount={handleChangeAmount}
              valideFunction={setInvalid(amount)}
            ></CurrencyRow>

            <div className="input-field col s12">
              <h5>
                Result :{" "}
                {isLoading ? (
                  <Spiner />
                ) : (
                  dataCurrency[toCurrency].value * amount
                )}
              </h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
