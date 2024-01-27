const value = 9000.00;
const fee = 0.97 / 100;
const time = 12;

const total = value * (1 + fee)**time;

const totalGain = total.toFixed(2) - value.toFixed(2);

// total investido
console.log("Total Investido R$ " + value.toFixed(2).replace('.', ','));
console.log("Total ganho em juros R$ " + totalGain.toFixed(2).replace('.', ','));
console.log("Total R$ " + total.toFixed(2).replace('.', ','));
