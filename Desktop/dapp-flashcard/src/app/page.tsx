'use client';

import { useEffect, useState } from "react";
import { getContract } from "./contract";

export default function HomePage() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const contract = getContract();
        if (!contract) throw new Error("Contract not initialized");

        const count = await contract.totalQuestions();
        const q: string[] = [];
        for (let i = 0; i < count; i++) {
          const question = await contract.getQuestion(i);
          q.push(question);
        }
        setQuestions(q);
        setAnswered(new Array(count).fill(false));
      } catch (error) {
        console.error(error);
      }
    }
    fetchQuestions();
  }, []);

  const answerQuestion = async (index: number, answer: boolean) => {
    try {
      const contract = getContract();
      if (!contract) throw new Error("Contract not initialized");

      const tx = await contract.answerQuestion(index, answer);
      await tx.wait(); // wait for transaction confirmation

      setAnswered((prev) => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
      setScore((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {questions.map((q, i) => (
        <div key={i}>
          <p>{q}</p>
          <button onClick={() => answerQuestion(i, true)} disabled={answered[i]}>
            True
          </button>
          <button onClick={() => answerQuestion(i, false)} disabled={answered[i]}>
            False
          </button>
        </div>
      ))}
      <p>Score: {score}</p>
    </div>
  );
}
