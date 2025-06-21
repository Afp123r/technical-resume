/* eslint-disable react/no-unescaped-entities */
import React from 'react';

interface FAQItem {
  question: string;
  answer: any;
}

const faqData: FAQItem[] = [];

const FAQ: React.FC = () => {
  const createMarkup = (html: string) => ({ __html: html });

  const linkifyAnswer = (answer: string) => {
    return answer.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" class="text-blue-600 hover:underline">$1</a>'
    );
  };

  return null;
};

export default FAQ;
