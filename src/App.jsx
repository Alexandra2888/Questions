import {  useState } from 'react';
import data from './data';
import Questions from './Questions';

  const url = "../src/data.js";


const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  const fetchQuestion = async () => {
    try {
      const response = await fetch(url);
      const questions = await response.json();
      setQuestions(questions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Questions questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion} />
    </main>
  );

}

export default App
