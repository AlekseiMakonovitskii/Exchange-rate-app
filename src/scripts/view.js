export const renderCurrencyList = (state, roots) => {
  const keys = Object.keys(state);
  const values = Object.values(state);

  values.forEach((value, index) => {
    const html = `
      <option value="${value}" id="${keys[index]}">${value}</option>
    `;

    roots.forEach(root => root.insertAdjacentHTML(`beforeend`, html));
  });
};

export const renderSelectedCurrency = (state, roots) => {
  const [
    labelFrom,
    labelTo,
    amountDefault,
    currecyRateDefault,
    fromInput,
    toInput,
  ] = roots;
  const { from, to } = state;
  const { currencies } = state;

  amountDefault.textContent = `${state.defaultAmount}`;
  currecyRateDefault.textContent = `${state.rate}`;
  fromInput.value = state.defaultAmount;
  toInput.value = state.rate;
  labelFrom.textContent = `${currencies[from]}`;
  labelTo.textContent = `${currencies[to]}`;
};

export const renderDate = (date, root) => {
  root.innerHTML = date;
};
