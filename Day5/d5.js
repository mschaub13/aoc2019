var instructionCounter = 0;
var memory =
  "3,225,1,225,6,6,1100,1,238,225,104,0,1001,92,74,224,1001,224,-85,224,4,224,1002,223,8,223,101,1,224,224,1,223,224,223,1101,14,63,225,102,19,83,224,101,-760,224,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1101,21,23,224,1001,224,-44,224,4,224,102,8,223,223,101,6,224,224,1,223,224,223,1102,40,16,225,1102,6,15,225,1101,84,11,225,1102,22,25,225,2,35,96,224,1001,224,-350,224,4,224,102,8,223,223,101,6,224,224,1,223,224,223,1101,56,43,225,101,11,192,224,1001,224,-37,224,4,224,102,8,223,223,1001,224,4,224,1,223,224,223,1002,122,61,224,1001,224,-2623,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1,195,87,224,1001,224,-12,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1101,75,26,225,1101,6,20,225,1102,26,60,224,101,-1560,224,224,4,224,102,8,223,223,101,3,224,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,108,677,226,224,102,2,223,223,1006,224,329,1001,223,1,223,1108,226,677,224,1002,223,2,223,1006,224,344,101,1,223,223,7,226,677,224,102,2,223,223,1006,224,359,1001,223,1,223,1007,226,677,224,1002,223,2,223,1006,224,374,1001,223,1,223,1108,677,226,224,102,2,223,223,1005,224,389,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,404,101,1,223,223,1107,226,226,224,1002,223,2,223,1005,224,419,1001,223,1,223,1007,677,677,224,102,2,223,223,1006,224,434,101,1,223,223,1107,226,677,224,1002,223,2,223,1006,224,449,101,1,223,223,107,677,677,224,102,2,223,223,1005,224,464,1001,223,1,223,1008,226,226,224,1002,223,2,223,1005,224,479,101,1,223,223,1007,226,226,224,102,2,223,223,1005,224,494,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,509,1001,223,1,223,108,677,677,224,1002,223,2,223,1005,224,524,1001,223,1,223,1008,677,677,224,102,2,223,223,1006,224,539,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,554,101,1,223,223,1108,226,226,224,1002,223,2,223,1005,224,569,101,1,223,223,107,677,226,224,102,2,223,223,1005,224,584,101,1,223,223,8,226,226,224,1002,223,2,223,1005,224,599,101,1,223,223,108,226,226,224,1002,223,2,223,1006,224,614,1001,223,1,223,7,226,226,224,102,2,223,223,1006,224,629,1001,223,1,223,1107,677,226,224,102,2,223,223,1005,224,644,101,1,223,223,8,226,677,224,102,2,223,223,1006,224,659,1001,223,1,223,1008,226,677,224,1002,223,2,223,1006,224,674,1001,223,1,223,4,223,99,226";
  //"3,225,1,225,6,6,1101,1,238,225,99";
  //"1,4,4,0,99";
  //"3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99";
var input = 5;

function getInstruction(address, instructions) {
  var outInstruction = [];

  opcode = +instructions[address];

  if (opcode == 99) {
    outInstruction[0] = 99;
  } else if (opcode % 100 == 3 || opcode % 100 == 4) {
    outInstruction[0] = instructions[address];
    outInstruction[1] = instructions[address + 1];
  } else if (opcode % 100 == 5 || opcode % 100 == 6) {
    outInstruction[0] = instructions[address];
    outInstruction[1] = instructions[address + 1];
    outInstruction[2] = instructions[address + 2];
  } else {
    outInstruction[0] = instructions[address];
    outInstruction[1] = instructions[address + 1];
    outInstruction[2] = instructions[address + 2];
    outInstruction[3] = instructions[address + 3];
  }

  return outInstruction;
}

function getParam(mode, val, instructions) {
  if (mode == 0) {
    ret = +instructions[val];
  } else if (mode == 1) {
    ret = +val;
  }

  return ret;
}

function executeInstruction(instruction, instructions) {
  opcode = instruction[0] + "";
  parts = opcode.split("");
  action = opcode % 100;

  inc = true;

  A = 0;
  B = 0;
  C = 0;
  if (parts.length > 1) {
    if (parts.length == 3) {
      C = +parts[0];
    } else if (parts.length == 4) {
      B = +parts[0];
      C = +parts[1];
    } else if (parts.length == 5) {
      A = +parts[0];
      B = +parts[1];
      C = +parts[2];
    }
  }

  var idx3 = +instruction[3];

  console.log("ACTION = " + action + "|" + opcode + "|" + instruction);
  if (action == 1) {
    instructions[idx3] =
      getParam(C, instruction[1], instructions) +
      getParam(B, instruction[2], instructions);
  } else if (action == 2) {
    instructions[idx3] =
      getParam(C, instruction[1], instructions) *
      getParam(B, instruction[2], instructions);
  } else if (action == 3) {
    instructions[instruction[1]] = input;
  } else if (action == 4) {
    console.log("HIT A 4: " + instructions[instruction[1]]);
  } else if (action == 5) {
    noun = +getParam(C, instruction[1], instructions);
    verb = +getParam(B, instruction[2], instructions);

    if (noun != 0) {
      instructionCounter = verb;
      inc = false;
    }
  } else if (action == 6) {
    noun = +getParam(C, instruction[1], instructions);
    verb = +getParam(B, instruction[2], instructions);

    if (noun == 0) {
      instructionCounter = verb;
      inc = false;
    }
  } else if (action == 7) {
    noun = +getParam(C, instruction[1], instructions);
    verb = +getParam(B, instruction[2], instructions);

    if (noun < verb) instructions[instruction[3]] = 1;
    else instructions[instruction[3]] = 0;
  } else if (action == 8) {
    noun = +getParam(C, instruction[1], instructions);
    verb = +getParam(B, instruction[2], instructions);

    if (noun == verb) instructions[instruction[3]] = 1;
    else instructions[instruction[3]] = 0;
  } else {
    console.log("We have a problem");
    //      instructions = "";
  }

  if (inc)
    instructionCounter =
      instructionCounter + incrementAddress(instruction[0] % 100);

  return instructions;
}

function incrementAddress(opcode) {
  increment = 4;

  //  if (opcode == 1 || opcode == 2) increment = 4;
  //  else if (opcode == 3 || opcode == 4) increment = 2;
  if (opcode == 3 || opcode == 4) increment = 2;
  else if (opcode == 5 || opcode == 6) increment = 3;

  return increment;
}

function Compute(input) {
  var instructions = memory.split(",");

  while (1 == 1) {
    //console.log("DATA");
    //console.log(instructions);
    //console.log(instructionCounter);

    currentInstruction = getInstruction(instructionCounter, instructions);

    //console.log("OPCODE = " + currentInstruction[0]);
    if (currentInstruction[0] == 99) {
      console.log("Hit a break");
      break;
    }

    //    instructionCounter =
    //      instructionCounter + incrementAddress(currentInstruction[0] % 100);

    console.log("current = " + currentInstruction);
    instructions = executeInstruction(currentInstruction, instructions);
  }

  return instructions[0];
}

//console.log(4 % 100);
val = Compute(1);
console.log(val);
