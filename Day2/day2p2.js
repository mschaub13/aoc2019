var data1 =
  "1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,9,19,23,1,13,23,27,1,5,27,31,2,31,6,35,1,35,5,39,1,9,39,43,1,43,5,47,1,47,5,51,2,10,51,55,1,5,55,59,1,59,5,63,2,63,9,67,1,67,5,71,2,9,71,75,1,75,5,79,1,10,79,83,1,83,10,87,1,10,87,91,1,6,91,95,2,95,6,99,2,99,9,103,1,103,6,107,1,13,107,111,1,13,111,115,2,115,9,119,1,119,6,123,2,9,123,127,1,127,5,131,1,131,5,135,1,135,5,139,2,10,139,143,2,143,10,147,1,147,5,151,1,151,2,155,1,155,13,0,99,2,14,0,0";

for (x = 0; x < 100; x++) {
  for (y = 0; y < 100; y++) {

    data = data1.split(",");
    data[1] = x;
    data[2] = y;

    console.log("x = " + x + " y = " + y);
    for (i = 0; i < data.length; i++) {
      if (i % 4 == 0) {
        op = data[i];
        //console.log("Operator at 4 = " + op);

        if (op == 99) {
          //console.log("Hit a 99 - break");
          break;
        }

        idx1 = data[i + 1];
        idx2 = data[i + 2];
        idx3 = data[i + 3];

        if (op == 1) {
          //console.log(
          //  "ADD - " +
          //    data[idx1] +
          //    " + " +
          //    data[idx2] +
          //    " to overwrite position " +
          //    idx3 +
          //    " (val = " +
          //    data[idx3] +
          //    ")"
          //);
          data[idx3] = +data[idx1] + +data[idx2];
        } else if (op == 2) {
          //console.log(
          //  "MULTIPLY - " +
          //    data[idx1] +
          //    " * " +
          //    data[idx2] +
          //    " to overwrite position " +
          //    idx3 +
          //    " (val = " +
          //    data[idx3] +
          //    ")"
          //);
          data[idx3] = +data[idx1] * +data[idx2];
        } else {
          console.log("we have a problem");
        }
      }

      //console.log("val = " + data[i]);
    }
    console.log("Final answer = " + data[0]);

    if (data[0] == 19690720) {
        console.log("yep");
        break;
    }
  }
}
console.log(data);