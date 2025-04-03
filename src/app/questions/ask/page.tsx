"use client";

import QuestionForm from '@/components/QuestionForm';
import React from 'react';

function AskQuestionPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      {/* Main container with responsive width */}
      <div className="max-w-3xl mx-auto w-full">
        {/* Page heading */} <br /> <br /> <br /><br /><br />
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Ask a public question
        </h1>
        {/* Form component */}
        <QuestionForm />
      </div>
    </div>
  );
}

export default AskQuestionPage;