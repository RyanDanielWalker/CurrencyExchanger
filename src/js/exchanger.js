export default class Exchanger {
  static exchangeCurrency(userAmount, userExchange) {
    const apiKey = process.env.API_KEY
    return fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/${userExchange}/${userAmount}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      })
  }
}