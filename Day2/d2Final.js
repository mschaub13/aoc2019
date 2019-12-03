var memory =
  "1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,9,19,23,1,13,23,27,1,5,27,31,2,31,6,35,1,35,5,39,1,9,39,43,1,43,5,47,1,47,5,51,2,10,51,55,1,5,55,59,1,59,5,63,2,63,9,67,1,67,5,71,2,9,71,75,1,75,5,79,1,10,79,83,1,83,10,87,1,10,87,91,1,6,91,95,2,95,6,99,2,99,9,103,1,103,6,107,1,13,107,111,1,13,111,115,2,115,9,119,1,119,6,123,2,9,123,127,1,127,5,131,1,131,5,135,1,135,5,139,2,10,139,143,2,143,10,147,1,147,5,151,1,151,2,155,1,155,13,0,99,2,14,0,0";

function getInstruction(address, instructions) {
  var outInstruction = [];

  if (instructions[address] == 99) outInstruction[0] = 99;
  else {
    outInstruction[0] = instructions[address];
    outInstruction[1] = instructions[address + 1];
    outInstruction[2] = instructions[address + 2];
    outInstruction[3] = instructions[address + 3];
  }

  return outInstruction;
}

function executeInstruction(instruction, instructions) {
  var val = 0;

  var idx1 = +instruction[1];
  var idx2 = +instruction[2];
  var idx3 = +instruction[3];

  if (instruction[0] == 1) {
    instructions[idx3] = +instructions[idx1] + +instructions[idx2];
  } else if (instruction[0] == 2) {
    instructions[idx3] = +instructions[idx1] * +instructions[idx2];
  } else {
    console.log("We have a problem");
    instructions = "";
  }

  return instructions;
}

function Compute(noun, verb) {
  var instructions = memory.split(",");
  instructions[1] = noun;
  instructions[2] = verb;

  var instructionCounter = 0;

  for (i = 0; i < instructions.length; i = i + 4) {
    currentInstruction = getInstruction(i, instructions);

    if (currentInstruction[0] == 99) {
      console.log("Hit a break at " + i);
      break;
    }

    instructions = executeInstruction(currentInstruction, instructions);
    //console.log("Instruction: " + ++instructionCounter);
    //console.log(currentInstruction);
  }

  return instructions[0];
}

for (noun = 0; noun < 100; noun++) {
  for (verb = 0; verb < 100; verb++) {
    val = Compute(noun, verb);
    if (val == 19690720) {
      console.log(val);
      console.log(noun + ":" + verb);
      console.log(100 * noun + verb);
      return;
    }
  }
}
