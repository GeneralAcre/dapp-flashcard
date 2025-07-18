"use client";

import React from "react";

type Props = {
    question: string;
    index: number;
    onAnswerAction: (index: number, answer: boolean) => void;
  };

export default function QuestionCard({ question, index, onAnswerAction }: Props) {
  return (
    <div className="p-4 border rounded-xl mb-4 bg-white shadow">
      <p className="font-semibold text-lg mb-2">Q{index + 1}: {question}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onAnswerAction(index, true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          True
        </button>
        <button
          onClick={() => onAnswerAction(index, false)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          False
        </button>
      </div>
    </div>
  );
}
