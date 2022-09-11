export const state = {
  from: ``,
  to: ``,
  amount: 1,
  defaultAmount: 1,
  rate: null,
  result: null,
  currencies: {},
};

export const selectrFrom = document.querySelector(`#from`);
export const selectrTo = document.querySelector(`#to`);
export const labelFrom = document.querySelector(`#labelFrom`);
export const labelTo = document.querySelector(`#labelTo`);
export const amountDefault = document.querySelector(`#amountDefault`);
export const currecyRateDefault = document.querySelector(`#currentRate`);
export const fromInput = document.querySelector(`#fromInput`);
export const toInput = document.querySelector(`#toInput`);
export const date = document.querySelector(`.date`);
