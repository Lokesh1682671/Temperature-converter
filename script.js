function celsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("celsiusResult").innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
  }

  function celsiusToKelvin() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    var kelvin = celsius + 273.15;
    document.getElementById("celsiusResult").innerHTML = celsius + "°C = " + kelvin.toFixed(2) + "K";
  }

  function fahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("fahrenheitResult").innerHTML = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
  }

  function kelvinToCelsius() {
    var kelvinInput = document.getElementById("kelvin");
    var kelvin = parseFloat(kelvinInput.value);
    var celsius = kelvin - 273.15;
    document.getElementById("kelvinResult").innerHTML = kelvin + "K = " + celsius.toFixed(2) + "°C";
  }

  function kelvinToFahrenheit() {
    var kelvinInput = document.getElementById("kelvin");
    var kelvin = parseFloat(kelvinInput.value);
    var fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    document.getElementById("kelvinResult").innerHTML = kelvin + "K = " + fahrenheit.toFixed(2) + "°F";
  }

  document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;

    // Construct the email body
    var message = "Email: " + email + "\n\nText: " + text;

    // Create a mailto link with the email body
    var mailtoLink = "mailto:venkatalokeshsami389@gmail.com?subject=Form%20Submission&body=" + encodeURIComponent(
      message);

    // Open the link in a new window or tab
    window.open(mailtoLink, "_blank");

    // Clear the form inputs
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";

    // Show success message
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = "<p class='success-message'>Email sent successfully!</p>";
  });