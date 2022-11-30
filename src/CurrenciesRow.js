import React from "react";

function CurrencyRow({
  handleChangeAmount,
  fromCurrency,
  toCurrency,
  CurrencyOptions,
  amount,
  handleFromCurrency,
  handleToCurrency,
  valideFunction
}) {
  return (
    <div className="col s8">
      <div className="col s6">
        <label>From</label>
        <select
          value={fromCurrency}
          className="browser-default"
          name="inputDevises"
          id="inputDevises"
          onChange={handleFromCurrency}
        >
          {CurrencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>

      <div className="col s6">
        <label>To</label>
        <select
          value={toCurrency}
          className="browser-default"
          name="outputDevises"
          id="outputDevises"
          onChange={handleToCurrency}
        >
          {CurrencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="amount"
            type="text"
            className={valideFunction}
            value={amount.replace(/^0+/, "")}
            onChange={handleChangeAmount}
          />

          <span
            className="helper-text"
            data-error="Erreur"
            data-success="Valide"
          ></span>

          <label htmlFor="amount">Montant</label>
        </div>
      </div>
    </div>
  );
}
export default CurrencyRow;
