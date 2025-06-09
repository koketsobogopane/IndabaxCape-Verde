import React, { useState, useRef, useEffect } from 'react';
import { QuestionCircle, ChevronDown, ChevronUp } from 'react-bootstrap-icons';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Changed border-gray-200 to border-neutral-medium
    <div
      className="border-b border-neutral-medium py-4 cursor-pointer"
      onKeyDown={() => {}}
      onClick={toggleOpen}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          {/* Changed text-purple-600 to text-brand-accent for the icon */}
          <QuestionCircle className="text-brand-accent text-xl mr-3 flex-shrink-0" />
          {/* Changed text-gray-800 to text-text-heading for the question */}
          <h3 className="text-lg font-semibold text-text-heading">
            {question}
          </h3>
        </div>
        {isOpen ? (
          // Changed text-gray-500 to text-text-subtle for chevron icons
          <ChevronUp className="text-text-subtle text-xl ml-4 flex-shrink-0 transition-transform duration-300 transform rotate-180" />
        ) : (
          // Changed text-gray-500 to text-text-subtle for chevron icons
          <ChevronDown className="text-text-subtle text-xl ml-4 flex-shrink-0 transition-transform duration-300" />
        )}
      </div>
      {/* The animated content wrapper */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        {/* Changed text-gray-600 to text-text-body for the answer */}
        <p className="mt-2 pl-8 text-text-body pb-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
