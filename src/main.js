import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './js/exchanger-service.js';

function clearFields() {
  $("#userAmount").val("");
  $("#exchangeTo").val("");
}

function getExchange(response, userAmount) {
  if (response.result === "error") {
    if (response["error-type"] === "unsupported-code") {
      $("#showErrors").html(`We're sorry, that type of currency does not exist. Please try again.`);
      $("#result").html("");
    } else {
      $("#showErrors").html(`We're sorry, an error has occurred: ${response["error-type"]}. Please try again.`);
      $("#result").html("");
    }
  } else {
    $("#result").html(`${parseInt(userAmount).toFixed(2)} USD converts to ${(response.conversion_result).toFixed(2)} ${response.target_code}`);
    $("#showErrors").html("");
  }
}

$(document).ready(function () {
  $("#moneyForm").submit(function (event) {
    event.preventDefault();
    let userAmount = $("#userAmount").val();
    let exchangeTo = ($("#exchangeTo").val()).substring(0, 3);
    if (userAmount && exchangeTo) {
      Exchanger.exchangeCurrency(exchangeTo, userAmount)
        .then(function (response) {
          getExchange(response, userAmount);
        });
      clearFields();
    } else {
      alert('Please complete all forms!');
    }
  });
});




