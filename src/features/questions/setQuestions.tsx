import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getQuestions, selectQuestions, quizSettings } from '../../features/questions/questionsSlice';
import { useRouter } from 'next/router';


const SetQuestions:React.FC = () => {
    return(<></>);
}

export default SetQuestions;