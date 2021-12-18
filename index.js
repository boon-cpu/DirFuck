const { readdirSync } = require("fs");
const readlineSync = require("readline-sync");

const getDirectories = (source) => {
  const dirs = readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
  return dirs.map((e) => getDirectories(`${source}/${e}`));
};

const memoryStack = [];
const loopPoints = [];
let pointer = 0;

const tree = getDirectories(process.argv[2]);
for (let i = 0; i < tree.length; i++) {
  const line = tree[i];
  switch (line.length) {
    case 0: // Output.
      console.log(String.fromCharCode(memoryStack[pointer]) || "\x00");
      break;
    case 1: // Input.
      memoryStack[pointer] = readlineSync.question("Input:").charCodeAt(0);
      break;
    case 2: // Decrement pointer.
      pointer--;
      break;
    case 3: // Increment pointer.
      pointer++;
      break;
    case 4: // Decrememnt data.
      memoryStack[pointer] =
        memoryStack[pointer] === NaN || memoryStack[pointer] === undefined
          ? -1
          : memoryStack[pointer] - 1;
      break;
    case 5: // Increment data.
      memoryStack[pointer] =
        memoryStack[pointer] === NaN || memoryStack[pointer] === undefined
          ? 1
          : memoryStack[pointer] + 1;
      break;
    case 6: // Label start of a loop.
      loopPoints.push(i);
      break;
    case 7: // Jump to loop if nonzero.
      if (memoryStack[pointer] != 0) {
        i = loopPoints[loopPoints.length - 1];
      } else {
        loopPoints.pop();
      }
      break;
  }
}
