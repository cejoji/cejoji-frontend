import { useState } from 'react';

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = (answer) => {
    setAnswers({ ...answers, [step]: answer });
    setStep(step + 1);
  };

  if (step >= 3) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">You're an Explorer!</h1>
          <p>Thanks for taking the quiz. Check your email for your special offer!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl mb-4">Question {step + 1}</h1>
      <p className="mb-6">This is a sample question?</p>
      <button onClick={() => handleNext('A')} className="px-4 py-2 bg-blue-600 text-white rounded mb-2">Option A</button>
      <button onClick={() => handleNext('B')} className="px-4 py-2 bg-blue-600 text-white rounded">Option B</button>
    </div>
  );
}