const math = require("mathjs");
const reflection = (
  X: Array<number>,
  Y: Array<number>,
  aroundx: boolean,
  Xsetter: Function,
  Ysetter: Function
) => {
  const tempX = [];
  const tempY = [];
  const mat = aroundx
    ? math.matrix([
        [1, 0],
        [0, -1],
      ])
    : math.matrix([
        [-1, 0],
        [0, 1],
      ]);
  for (var i = 0; i < X.length; i++) {
    var vec = math.matrix([X[i], Y[i]]);
    vec = math.multiply(vec, mat);
    tempX.push(vec.toArray()[0]);
    tempY.push(vec.toArray()[1]);
  }
  Xsetter(tempX);
  Ysetter(tempY);
};

const homotecia = (
  X: Array<number>,
  Y: Array<number>,
  c: number,
  Xsetter: Function,
  Ysetter: Function
) => {
  const tempX = [];
  const tempY = [];
  const mat = math.matrix([
    [c, 0],
    [0, c],
  ]);
  for (var i = 0; i < X.length; i++) {
    var vec = math.matrix([X[i], Y[i]]);
    vec = math.multiply(vec, mat);
    tempX.push(vec.toArray()[0]);
    tempY.push(vec.toArray()[1]);
  }
  Xsetter(tempX);
  Ysetter(tempY);
};

const rotationX = (
  X: Array<number>,
  Y: Array<number>,
  angle: number,
  Xsetter: Function,
  Ysetter: Function
) => {
  const tempX = [];
  const tempY = [];
  angle = (angle * math.pi) / 180;
  const mat = math.matrix([
    [math.cos(angle), math.sin(angle)],
    [-1 * math.sin(angle), math.cos(angle)],
  ]);
  for (var i = 0; i < X.length; i++) {
    var vec = math.matrix([X[i], Y[i]]);
    vec = math.multiply(vec, mat);
    tempX.push(vec.toArray()[0]);
    tempY.push(vec.toArray()[1]);
  }
  Xsetter(tempX);
  Ysetter(tempY);
};

export { reflection, homotecia, rotationX };
