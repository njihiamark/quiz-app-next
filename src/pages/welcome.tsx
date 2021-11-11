import type { NextPage } from 'next';
import React, { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Layout from '../components/Layout';
import WelcomeHeader from '../components/WelcomeHeader';
import {useAppDispatch} from '../app/hooks';
import {getQuestions} from '../features/questions/questionsSlice';

const WelcomePage: NextPage = () => {
    const [Amount, setAmount] = useState<number>(0);
    const [Difficulty, setDifficulty] = useState<string>("");
    const [MaxedAmount, setMaxedAmount] = useState<boolean>(false);
    const [EmptyAmount, setEmptyAmount] = useState<boolean>(false);
    const [EmptyDifficulty, setEmptyDifficulty] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleDifficultyChange = (event) => {
        setEmptyDifficulty(false);
        setDifficulty(String(event.target.value));
    }

    const handleAmountChange = (event) => {
        setEmptyAmount(false);
        if(event.target.value < 1){
            setAmount(Number(event.target.value = 0));
            setMaxedAmount(false);
        }else if(event.target.value > 50){
            setMaxedAmount(true);
            setAmount(Number(event.target.value = 50));
        }else{
            setAmount(Number(event.target.value));
            setMaxedAmount(false);
        }
        
    }

    const handleSubmit = (event) => {
        if(Amount <= 0){
            setEmptyAmount(true);
        }
        if(Difficulty == ""){
            setEmptyDifficulty(true);
        }
        if(Difficulty == "" || Amount <= 0){
            return;
        }
        dispatch(getQuestions({Amount, Difficulty}));
    }

    return (
        <Layout theme="dark">
            <div className="w-33-auto">
                <WelcomeHeader />
                <Select iconUrl="/images/trophy-icon.svg" label="Difficulty" theme="dark" value={Difficulty} options={["hard", "easy"]} onChange={handleDifficultyChange} />
                {EmptyDifficulty && <div className="input-message">*Please select an option</div>}
                <div className="mb-1"></div>
                <Input type="number" placeholder="Enter amount" iconUrl="/images/star-icon.svg" label="Amount" theme="dark" value={Amount} onChange={handleAmountChange} />
                {MaxedAmount && <div className="input-message">50 is the maximum amount you can enter</div>}
                {EmptyAmount && <div className="input-message">*Please input a value greater than 0</div>}
                <div className="mb-4"></div>
                <Button label="play" type="filled" theme="dark" onClick={handleSubmit} />
                <div className="mb-1"></div>
            </div>
        </Layout>

    );

}

export default WelcomePage;