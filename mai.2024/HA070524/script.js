function checkLeapYear() {
    const inputYear = parseInt(document.getElementById('yearInput').value);
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
  
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
  
    let last10LeapYears = [];
    let count = 0;
    for (let year = inputYear - 1; count < 10; year--) {
      if (isLeapYear(year)) {
        last10LeapYears.push(year);
        count++;
      }
    }
  
    let next20Years = [];
    count = 0;
    for (let year = inputYear + 1; count < 20; year++) {
      next20Years.push(year);
      count++;
    }
  
    const last10LeapYearsDiv = document.createElement('div');
    last10LeapYearsDiv.innerHTML = `<h2>Letzte 10 Schaltjahre:</h2><p>${last10LeapYears.join(', ')}</p>`;
    resultContainer.appendChild(last10LeapYearsDiv);
  
    const next20YearsDiv = document.createElement('div');
    next20YearsDiv.innerHTML = `<h2>Nächsten 20 Jahre:</h2><p>${next20Years.join(', ')}</p>`;
    resultContainer.appendChild(next20YearsDiv);
  }
  