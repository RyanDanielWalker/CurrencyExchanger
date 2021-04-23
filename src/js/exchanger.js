export default class Exchanger {
  static exchangeCurrency(userAmount, exchangeTo) {
    const apiKey = process.env.API_KEY
    return fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/${exchangeTo}/${userAmount}`)
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