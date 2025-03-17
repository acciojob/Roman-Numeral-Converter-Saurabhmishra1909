function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
   let result = '';

  // Handle subtractive combinations manually
  if (num >= 900) {
    result += 'CM';
    num -= 900;
  }
  if (num >= 400) {
    result += 'CD';
    num -= 400;
  }
  if (num >= 90) {
    result += 'XC';
    num -= 90;
  }
  if (num >= 40) {
    result += 'XL';
    num -= 40;
  }
  if (num >= 9) {
    result += 'IX';
    num -= 9;
  }
  if (num >= 4) {
    result += 'IV';
    num -= 4;
  }

  // Iterate through the obj mapping
  for (const key in obj) {
    const [symbol, value] = obj[key];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
