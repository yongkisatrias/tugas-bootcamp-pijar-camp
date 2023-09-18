// Create a variable for the height of triangle
const triangle = 7;

for (let row = 1; row <= triangle; row++) {
  let printTriangle = ""; // This loop is used to arrange the rows of triangles until they reach the specified triangle height (7).
  for (let column = 1; column <= row; column++) {
    printTriangle += column; //  This loop is used to fill each row of triangles with numbers, starting from 1 to 7
  }

  // Displays triangle
  console.log(printTriangle);
}
