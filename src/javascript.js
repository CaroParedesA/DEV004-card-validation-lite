function validate() {
  let valid = false;
  if (document.getElementById("cardnumber").value.length == 16) {

    valid = isValid(document.getElementById("cardnumber").value);
  } else {
    alert("Ingrese los 16 dígitos de su tarjeta");
  }

  if (valid) {
    document.getElementById('result').innerHTML = "succes";
  } else {
    document.getElementById('result').innerHTML = "error";
  }
}

function isValid(creditCardNumber) {
  let arr = creditCardNumber.split('').reverse();
  let impar = 0;
  for (let i = 1, l = arr.length; i < l; i++) {
    if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11 || i == 13 || i == 15) {
      let mult = arr[i] * 2;
      if (mult >= 10) {
        const arrayOfDigits = Array.from(String(mult));
        let suma = parseInt(arrayOfDigits[0]) + parseInt(arrayOfDigits[1]);
        impar = impar + suma;
        suma = parseInt(arr[i]);
      } else {
        impar = impar + mult;
      }
    } else {
      impar = impar + parseInt(arr[i]);
    }
  }
  console.log(arr);
  if (impar % 2 == 0) {
    return true;
  } else {
    return false;
  }

}
