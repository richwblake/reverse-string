function reverseString(str) {

    let arr = [];
    let reversed_string = "";
    const m = str.length;
    const n = Math.floor(str.length / 2);

    for (let i = 0; i < m; i++)
        arr.push(str[i]);

    for (let i = 0; i < n; i++) {
        const tmp = arr[i];
        const l = arr.length - i - 1
        arr[i] = arr[l];
        arr[l] = tmp;
    }

    for (let i = 0; i < m; i++)
        reversed_string += arr[i];

    return reversed_string;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
