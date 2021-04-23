export default class Exchanger {
  static exchangeCurrency(exchangeTo, userAmount) {
    const apiKey = process.env.API_KEY;
    return fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/${exchangeTo}/${userAmount}`, { mode: "cors" })
      .then(function (response) {
        console.log(response);
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