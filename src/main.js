import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchanger.js';

function clearFields() {
  $("#userAmount").val("");
  $("#exchangeTo").val("");
}

function getExchange(response) {
  if (response.result) {
    const result = response.conversion_result;
    $("#result").html(`<p>${result}</p>`);
  }
}

$(document).ready(function () {
  $("#moneyForm").submit(function (event) {
    event.preventDefault();
    let userAmount = $("#userAmount").val();
    let exchangeTo = ($("#exchangeTo").val()).substring(0, 3);
    console.log(userAmount, exchangeTo);
    clearFields();
    Exchanger.exchangeCurrency(exchangeTo, userAmount)
      .then(function (response) {
        getExchange(response);
      });
  });
});



