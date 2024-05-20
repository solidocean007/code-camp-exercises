import React from 'react';

export default function ExerciseOne() {
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
    for (let i = 1; i <= count; i++) {
      if (inverted) {
        rows.unshift(padRow(i, count));
      } else {
        rows.push(padRow(i, count));
      }
    }
    return rows;
  };

  const rowsToRender = result();

  return (
    <div className="flex flex-col items-center">
      <h1>JavaScript Algorithms and Data Structures (Beta)</h1>
      {rowsToRender.map((row, index) => (
        <div key={index} style={{ fontFamily: 'monospace' }}>
          {row}
        </div>
      ))}
    </div>
  );
}

