var lower = 168630;
var upper = 718098;

function dups(digits) {
  if (digits[0] == digits[1]) return true;
  else if (digits[1] == digits[2]) return true;
  else if (digits[2] == digits[3]) return true;
  else if (digits[3] == digits[4]) return true;
  else if (digits[4] == digits[5]) return true;
  else return false;
}

function dups2(digits) {

  ret = false;

  for (r = 0; r < 6; r++) {
    search1 = digits[r].toString() + digits[r].toString();
    search2 =
      digits[r].toString() + digits[r].toString() + digits[r].toString();
    if (num.toString().search(search1) != -1) {
      if (num.toString().search(search2) == -1)
      ret = true;
    }
  }

  return ret;
}

function decrease(digits) {
  if (
    digits[0] <= digits[1] &&
    digits[1] <= digits[2] &&
    digits[2] <= digits[3] &&
    digits[3] <= digits[4] &&
    digits[4] <= digits[5]
  )
    return true;
  else return false;
}

var num = lower;
var counter = 0;

for (num = lower; num <= upper; num++) {
  var digits = num.toString().split("");
  var realDigits = digits.map(Number);
  if (decrease(realDigits) && dups2(realDigits)) {
    console.log(num);
    counter++;
  }
}

console.log(counter);
