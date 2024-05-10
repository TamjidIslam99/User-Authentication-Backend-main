import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormPage = ({ setOptions }) => {
  const [name, setName] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [questionModeration, setQuestionModeration] = useState('');
  const [questionTranslation, setQuestionTranslation] = useState('');
  const [questionFormulation ,setQuestionFormulation ] = useState('');
  const [project_evaluation ,setproject_evaluation ] = useState('');
  const [lab_exam_evaluation ,setlab_exam_evaluation ] = useState('');
  const [viva_voce_evaluation ,setviva_voce_evaluation ] = useState('');
  const [number_of_tutorial ,setnumber_of_tutorial ] = useState('');
  const [total_tutorial_answerscripts_evaluation ,settotal_tutorial_answerscripts_evaluation ] = useState('');
  const [total_semester_final_exam_answerscripts_evaluation ,settotal_semester_final_exam_answerscripts_evaluation ] = useState('');
  const [thesis_evaluation ,setthesis_evaluation ] = useState('');
  const [exam_committee_chairman ,setexam_committee_chairman ] = useState('');
  const [supervisor ,setsupervisor ] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState(0); // Initialize amount state

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate new amount based on the current form inputs
    let newAmount = (questionFormulation === 'Yes' ? 60 : 0) + 
                    (questionModeration === 'Yes' ? 60 : 0) + 
                    (questionTranslation === 'Yes' ? 60 : 0) +
                    (project_evaluation === 'Yes' ? 60 : 0) + 
                    (lab_exam_evaluation === 'Yes' ? 60 :0) + 
                    (viva_voce_evaluation === 'Yes' ? 60 :0) + 
                    (total_tutorial_answerscripts_evaluation * 30) + 
                    (total_semester_final_exam_answerscripts_evaluation * 30);
    
    // Update amount by adding the new amount to the previous value
    setAmount(amount + newAmount);
    
    // Pass all form values including amount to the parent component
    setOptions({ name, semester, course,questionFormulation, questionModeration, questionTranslation, amount: amount + newAmount,project_evaluation,lab_exam_evaluation,viva_voce_evaluation,total_semester_final_exam_answerscripts_evaluation,total_tutorial_answerscripts_evaluation });
  };
  return (
    <div>
      <h2>Fill Details:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name of the Examiner:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="semester">Choose Semester:</label>
          <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">Select Semester</option>
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
          </select>
        </div>
        <div>
          <label htmlFor="course">Choose Course:</label>
          <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="DTC">DTC</option>
            <option value="Database">Database</option>
          </select>
        </div>
        <div>
          <label htmlFor="questionFormulation">Question Moderation:</label>
          <select id="questionFormulation" value={questionFormulation} onChange={(e) => setQuestionFormulation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="questionModeration">Question Moderation:</label>
          <select id="questionModeration" value={questionModeration} onChange={(e) => setQuestionModeration(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="questionTranslation">Question Translation:</label>
          <select id="questionTranslation" value={questionTranslation} onChange={(e) => setQuestionTranslation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="project_evaluation">project_evaluation:</label>
          <select id="project_evaluation" value={project_evaluation} onChange={(e) => setproject_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="lab_exam_evaluation">lab_exam_evaluation:</label>
          <select id="lab_exam_evaluation" value={lab_exam_evaluation} onChange={(e) => setlab_exam_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="viva_voce_evaluation">viva_voce_evaluation:</label>
          <select id="viva_voce_evaluation" value={questionTranslation} onChange={(e) => setviva_voce_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="number_of_tutorial">number_of_tutorial:</label>
          <input type="number" id="number_of_tutorial" value={number_of_tutorial} onChange={(e) => setnumber_of_tutorial(e.target.value)}>

          </input>
        </div>
        <div>
          <label htmlFor="total_tutorial_answerscripts_evaluation">total_tutorial_answerscripts_evaluation:</label>
          <input type="number" id="total_tutorial_answerscripts_evaluation" value={total_tutorial_answerscripts_evaluation} onChange={(e) => settotal_tutorial_answerscripts_evaluation(e.target.value)}>
          </input>
        </div>
        <div>
          <label htmlFor="total_semester_final_exam_answerscripts_evaluation">total_semester_final_exam_answerscripts_evaluation:</label>
          <input type="number" id="total_semester_final_exam_answerscripts_evaluation" value={total_semester_final_exam_answerscripts_evaluation} onChange={(e) => settotal_semester_final_exam_answerscripts_evaluation(e.target.value)}>

          </input>
        </div>
        
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setShowForm(!showForm)}>Toggle Form</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name">Name of the Examiner:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="semester">Choose Semester:</label>
          <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">Select Semester</option>
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
          </select>
        </div>
        <div>
          <label htmlFor="course">Choose Course:</label>
          <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option value="DTC">DTC</option>
            <option value="Database">Database</option>
          </select>
        </div>
        <div>
          <label htmlFor="questionFormulation">Question Moderation:</label>
          <select id="questionFormulation" value={questionFormulation} onChange={(e) => setQuestionFormulation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="questionModeration">Question Moderation:</label>
          <select id="questionModeration" value={questionModeration} onChange={(e) => setQuestionModeration(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="questionTranslation">Question Translation:</label>
          <select id="questionTranslation" value={questionTranslation} onChange={(e) => setQuestionTranslation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="project_evaluation">project_evaluation:</label>
          <select id="project_evaluation" value={project_evaluation} onChange={(e) => setproject_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="lab_exam_evaluation">lab_exam_evaluation:</label>
          <select id="lab_exam_evaluation" value={lab_exam_evaluation} onChange={(e) => setlab_exam_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="viva_voce_evaluation">viva_voce_evaluation:</label>
          <select id="viva_voce_evaluation" value={questionTranslation} onChange={(e) => setviva_voce_evaluation(e.target.value)}>
            <option value="">Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="number_of_tutorial">number_of_tutorial:</label>
          <input type="number" id="number_of_tutorial" value={number_of_tutorial} onChange={(e) => setnumber_of_tutorial(e.target.value)}>

          </input>
        </div>
        <div>
          <label htmlFor="total_tutorial_answerscripts_evaluation">total_tutorial_answerscripts_evaluation:</label>
          <input type="number" id="total_tutorial_answerscripts_evaluation" value={total_tutorial_answerscripts_evaluation} onChange={(e) => settotal_tutorial_answerscripts_evaluation(e.target.value)}>
          </input>
        </div>
        <div>
          <label htmlFor="total_semester_final_exam_answerscripts_evaluation">total_semester_final_exam_answerscripts_evaluation:</label>
          <input type="number" id="total_semester_final_exam_answerscripts_evaluation" value={total_semester_final_exam_answerscripts_evaluation} onChange={(e) => settotal_semester_final_exam_answerscripts_evaluation(e.target.value)}>

          </input>
        </div>
          <button type="submit">Submit</button>
        </form>
      )}

      <Link to="/display">
        <button>Go to Display Page</button>
      </Link>
    </div>
  );
};

export default FormPage;
