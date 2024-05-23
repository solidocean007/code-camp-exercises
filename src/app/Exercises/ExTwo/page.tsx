"use client";

import { useState } from "react";
import { getAverage, getGrade, hasPassingGrade } from "../../../../exercises/exercise2";

export default function ExerciseTwo() {
  const [grades, setGrades] = useState<number[]>(Array(10).fill(0)); // Initialize with 10 grades
  const [yourGrade, setYourGrade] = useState<number>(0);

  // Handler for updating grades
  const handleGradeChange = (index: number, value: string) => {
    const newGrades = [...grades];
    newGrades[index] = parseInt(value, 10) || 0; // Ensure the value is a number
    setGrades(newGrades);
  };

  // Calculate the average grade
  const averageGrade = getAverage(grades);

  // Calculate your letter grade and message
  const yourLetterGrade = getGrade(yourGrade);
  const message = hasPassingGrade(yourGrade)
    ? "You passed the course."
    : "You failed the course.";

  return (
    <div>
      <div className="flex">
        <h1>Review Javascript fundamentals by building a Gradebook app</h1>
      </div>
      <div className="flex flex-col">
        <h2>Students' grades:</h2>
        {grades.map((grade, index) => (
          <input
            key={index}
            title={`grade-input-${index}`}
            value={grade}
            type="number"
            onChange={(e) => handleGradeChange(index, e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        ))}
      </div>
      <div className="mt-4">
        <h2>Your grade:</h2>
        <input
          title="your-grade-input"
          value={yourGrade}
          type="number"
          onChange={(e) => setYourGrade(parseInt(e.target.value, 10) || 0)}
          className="w-20 p-2 border border-gray-300"
        />
      </div>
      <div className="mt-4">
        <h2>{`Average grade: ${averageGrade.toFixed(2)}`}</h2>
      </div>
      <div className="mt-4">
        <h2>{`Your letter grade: ${yourLetterGrade}`}</h2>
      </div>
      <div className="mt-4">
        <h2>Message: {message}</h2>
      </div>
    </div>
  );
}
