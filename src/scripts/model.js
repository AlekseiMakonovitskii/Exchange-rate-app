import * as config from './config.js';

export const getRate = async () => {
  const res = await fetch(
    `http://api.frankfurter.app/latest?amount=${config.state.amount}&from=${config.state.from}&to=${config.state.to}`
  );
  const data = await res.json();
  const rate = data.rates[config.state.to];

  if (config.state.amount === 1) {
    config.state.rate = rate;
  }

  if (config.state.amount !== 1) {
    config.state.result = rate;
  }
};

export const getListcurrencies = async () => {
  const res = await fetch(`http://api.frankfurter.app/currencies`);
  const data = await res.json();
  config.state.currencies = data;
};

export const setDefault = () => {
  const fromElements = config.selectrFrom.querySelectorAll(`option`);
  const toElements = config.selectrTo.querySelectorAll(`option`);
  const fromDefault = Array.from(fromElements).find(el => el.id === `CAD`);
  const toDefault = Array.from(toElements).find(el => el.id === `USD`);
  fromDefault.setAttribute(`selected`, true);
  toDefault.setAttribute(`selected`, true);
  config.state.from = fromDefault.id;
  config.state.to = toDefault.id;
};

export const getDefaultRate = async () => {
  await getRate();
};

export const selectFrom = async callback => {
  config.selectrFrom.addEventListener(`change`, async () => {
    const index = config.selectrFrom.selectedIndex;
    const selectrFromValues = config.selectrFrom.querySelectorAll(`option`);
    const id = selectrFromValues[index].id;
    config.state.from = id;

    if (config.state.to === config.state.from) {
      location.reload();
    }

    await getRate();

    console.log(config.state);
    callback(config.state, [
      config.labelFrom,
      config.labelTo,
      config.amountDefault,
      config.currecyRateDefault,
      config.fromInput,
      config.toInput,
    ]);
  });
};

export const selectTo = async callback => {
  config.selectrTo.addEventListener(`change`, async () => {
    const index = config.selectrTo.selectedIndex;
    const selectrToValues = config.selectrTo.querySelectorAll(`option`);
    const id = selectrToValues[index].id;
    config.state.to = id;

    if (config.state.to === config.state.from) {
      location.reload();
    }

    await getRate();

    console.log(config.state);
    callback(config.state, [
      config.labelFrom,
      config.labelTo,
      config.amountDefault,
      config.currecyRateDefault,
      config.fromInput,
      config.toInput,
    ]);
  });
};

export const changeFromValue = async () => {
  config.fromInput.addEventListener(`keyup`, async () => {
    const amount = config.fromInput.value;
    config.state.amount = amount;

    await getRate();
    config.toInput.value = config.state.result;
  });
};

export const changeToValue = async () => {
  config.toInput.addEventListener(`keyup`, async () => {
    const amount = config.toInput.value;
    config.state.amount = amount;

    await getRate();
    config.fromInput.value = config.state.result;
  });
};

export const generateDate = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const hours = `${date.getHours()}`.padStart(2, 0);
  const minutes = `${date.getMinutes()}`.padStart(2, 0);

  const result = `${months[month]} ${day} ${hours}:${minutes}`;

  return result;
};
