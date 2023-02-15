module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
  let newMatrix = matrix.map( (item, index) => {
    if (index % 2 == 1) item.reverse();
    return item});

  return newMatrix.flat();
}
