'use client'
import React, { useState } from 'react';
import exercise1 from '../../../../exercises/exercise1';

export default function ExerciseOne() {

  const [numberOfRows, setNumberOfRows] = useState<number>(8);
  const rowsToRender = exercise1(numberOfRows);
  function handleChangeNumberOfRows(event: React.ChangeEvent<HTMLInputElement>){
    setNumberOfRows(parseInt(event.target.value, 10));
  }

  return (
    <div className="flex flex-col items-center">
      <h1>JavaScript Algorithms and Data Structures (Beta)</h1>
      <input type="number" value={numberOfRows} onChange={handleChangeNumberOfRows}/>
      {rowsToRender.map((row, index) => (
        <div key={index} style={{ fontFamily: 'monospace' }}>
          {row}
        </div>
      ))}
    </div>
  );
}

