function LongestWord(sen) {

  // code goes here  
  let regex = /[a-zA-Z]/g;
  // let formattedWord = sen.match(regex);
  let senArray = sen.split(' ');
  let maxLength = 0;
  sen = senArray[0];

  for (let i = 0; i < senArray.length; i++) {
    // console.log(senArray[i].match(regex).join(''));
    senArray[i] = senArray[i].match(regex).join('');
    if (senArray[i].length > maxLength) {
      maxLength = senArray[i].length;
      sen = senArray[i];
    }
  }
  return sen;
}

// keep this function call here 
console.log(LongestWord(readline()));
