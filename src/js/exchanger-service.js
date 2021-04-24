export default class Exchanger {
  static exchangeCurrency(exchangeTo, userAmount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${exchangeTo}/${userAmount}`, { mode: "cors" })
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}