import React, { useState } from 'react';
import './Container.css';
import Name from './Name.js';
import Question from './Question.js';
import Greet from './Greet.js'
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3NP6q8HtYjaJMylYNlTK1BXyba2g5Qfw",
  authDomain: "survey-app-b89cc.firebaseapp.com",
  databaseURL: "https://survey-app-b89cc-default-rtdb.firebaseio.com",
  projectId: "survey-app-b89cc",
  storageBucket: "survey-app-b89cc.appspot.com",
  messagingSenderId: "328729256090",
  appId: "1:328729256090:web:bf59d8d3e2dba5b8d7ff23"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Container() {
  const [value, setValue] = useState({
    id: uuidv4(),
    name: null,
    email: null,
    questions: {
      Profession: null,
      Rating: null,
      Review: null,
      other:  null 
    },
    isSubmitted: false
  });

  const nameSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    setValue(prevState => ({
      ...prevState,
      name: name,
      email: email
    }));
  }

  const questionSubmitHandler = (e) => {
    e.preventDefault();
    const questions = {
      Profession: e.target.Profession.value,
      Rating: e.target.Rating.value,
      Review: e.target.Review.value,
      other: e.target.other.value
    };
    e.other = `display: none`
    setValue(prevState => ({
      ...prevState,
      questions: questions,
      isSubmitted: true
    }));
    set(ref(database, "survey/" + value.id), {
      id: value.id,
      name: value.name,
      email: value.email,
      questions: questions
    });
  }

  return (
    <>
    {value.isSubmitted === true ? null : (
      <div className="container-fluid py-3 back-ground">
        <h1 className='text-center heading'>Survey App</h1>
      </div>
    )}
    {value.isSubmitted === true ? <Greet /> : value.name === null || value.email === null ? <Name submit={nameSubmitHandler} /> : <Question submit={questionSubmitHandler} />}
  </>
  
  );
}
