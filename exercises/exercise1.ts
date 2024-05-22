// exercises/exercise1.js
const exercise1 = (numberOfRows: number) => {
  const character = "#";
  const count = 8;
  const rows: string[] = [];
  let inverted = true;

  function padRow(rowNumber: number, rowCount: number) {
    return (
      " ".repeat(rowCount - rowNumber) +
      character.repeat(2 * rowNumber - 1) +
      " ".repeat(rowCount - rowNumber)
    );
  }

  const result = () => {
    for (let i = 1; i <= numberOfRows; i++) {
      if (inverted) {
        rows.unshift(padRow(i, numberOfRows));
      } else {
        rows.push(padRow(i, numberOfRows));
      }
    }
    return rows;
  };

  const rowsToRender = result();
  return rowsToRender;
}
export default exercise1;
