import * as model from './model.js';
import * as view from './view.js';
import * as config from './config.js';

const app = async () => {
  await model.getListcurrencies();
  view.renderCurrencyList(config.state.currencies, [config.selectrFrom, config.selectrTo]);
  model.setDefault();
  await model.getDefaultRate();
  view.renderSelectedCurrency(config.state, [config.labelFrom, config.labelTo, config.amountDefault, config.currecyRateDefault, config.fromInput, config.toInput])

  await model.selectFrom(view.renderSelectedCurrency);
  await model.selectTo(view.renderSelectedCurrency);
  await model.changeFromValue();
  await model.changeToValue();

  const handleDate = () => {
    const date = model.generateDate();
    view.renderDate(date, config.date);
  }

  handleDate();

  setInterval(handleDate, 1000 * 60);
};

app();
