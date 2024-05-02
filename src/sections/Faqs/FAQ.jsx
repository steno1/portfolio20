import { FaMinus, FaPlus } from "react-icons/fa6"; // Icons for toggling answer visibility

import Card from "../../components/card/Card"; // Component for individual FAQ card
import { useState } from "react"; // Importing useState hook from React

// FAQ component function
const FAQ = ({ faq }) => {
  // State to manage the visibility of the answer
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    // Card component representing individual FAQ
    <Card className='faq' onClick={() => setShowAnswer(prev => !prev)}>
      <div>
        {/* Displaying FAQ question */}
        <h5 className="faq__question">
          {faq.question}
        </h5>
        {/* Icon button for toggling answer visibility */}
        <button className="faq__icon">
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {/* Displaying FAQ answer if showAnswer state is true */}
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  );
};

export default FAQ;
