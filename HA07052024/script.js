function checkLeapYear() {
    const year = parseInt(document.getElementById('yearInput').value);
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const resultText = isLeapYear ? `${year} ist ein Schaltjahr!` : `${year} ist kein Schaltjahr.`;
    document.getElementById('result').textContent = resultText;
  }
  