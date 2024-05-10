// DisplayPage.js
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const DisplayPage = ({ options }) => {
  const { name, semester, course,questionFormulation, questionModeration, questionTranslation, amount,project_evaluation,lab_exam_evaluation,viva_voce_evaluation,total_semester_final_exam_answerscripts_evaluation,total_tutorial_answerscripts_evaluation } = options;
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve user's name from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <div>
      <h2>
        Name of the Examiner : {username && <p> {username}</p>}
      </h2>
      <h2>Selected Options:</h2>
      <table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>question_formulation</td>
      <td>{questionFormulation === 'Yes' ? '60 (Yes)' : '0 (No)'}</td>
    </tr>
    <tr>
      <td>question_translation</td>
      <td>{questionTranslation === 'Yes' ? '60 (Yes)' : '0 (No)'}</td>
    </tr>
    <tr>
      <td>Question Moderation</td>
      <td>{questionModeration === 'Yes' ? '60 (Yes)' : '0 (No)'}</td>
    </tr>
    <tr>
      <td>project_evaluation</td>
      <td>{project_evaluation === 'Yes' ? '60 (Yes)' : '0 (No)'}</td>
    </tr>
    <tr>
      <td>viva_voce_evaluation</td>
      <td>{viva_voce_evaluation === 'Yes' ? '60 (Yes)' : '0 (No)'}</td>
    </tr>
    <tr>
      <td>lab_exam_evaluation</td>
      <td>{lab_exam_evaluation === 'Yes' ? '60 (Yes)' : '0 (No)'}</td>
    </tr>
    <tr>
      <td>total_semester_final_exam_answerscripts_evaluation</td>
      <td>{total_semester_final_exam_answerscripts_evaluation *30} </td>
    </tr>
    <tr>
      <td>total_tutorial_answerscripts_evaluation</td>
      <td>{total_tutorial_answerscripts_evaluation * 30}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>{amount}</td>
    </tr>
  </tbody>
</table>

      <Link to="/">
        <button>Go Back to Form Page</button>
      </Link>
    </div>
  );
};

export default DisplayPage;
