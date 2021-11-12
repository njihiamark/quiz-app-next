import type { NextPage } from 'next';
import React, { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Layout from '../components/Layout';
import WelcomeHeader from '../components/WelcomeHeader';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getQuestions, selectQuestions } from '../features/questions/questionsSlice';
import { useRouter } from 'next/router';

const WelcomePage: NextPage = () => {
    const [Amount, setAmount] = useState<number>(0);
    const [Difficulty, setDifficulty] = useState<string>("");
    const [MaxedAmount, setMaxedAmount] = useState<boolean>(false);
    const [EmptyAmount, setEmptyAmount] = useState<boolean>(false);
    const [EmptyDifficulty, setEmptyDifficulty] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const {
        pending,
        error
    } = useAppSelector(selectQuestions);
    const router = useRouter();

    const handleDifficultyChange = (event) => {
        setEmptyDifficulty(false);
        setDifficulty(String(event.target.value));
    }

    const handleAmountChange = (event) => {
        setEmptyAmount(false);
        if (event.target.value < 1) {
            setAmount(Number(event.target.value = 0));
            setMaxedAmount(false);
        } else if (event.target.value > 50) {
            setMaxedAmount(true);
            setAmount(Number(event.target.value = 50));
        } else {
            setAmount(Number(event.target.value));
            setMaxedAmount(false);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Amount <= 0) {
            setEmptyAmount(true);
        }
        if (Difficulty == "") {
            setEmptyDifficulty(true);
        }
        if (Difficulty == "" || Amount <= 0) {
            return;
        }
        dispatch(getQuestions({ Amount, Difficulty }));
        router.push('/play', undefined, { shallow: true })
    }

    return (
        <Layout theme="dark">
            <div className="w-33-auto">
                <WelcomeHeader />
                <form onSubmit={handleSubmit}>
                    <Select iconUrl="/images/trophy-icon.svg" label="Difficulty" theme="dark" value={Difficulty} options={["hard", "easy"]} onChange={handleDifficultyChange} />
                    {EmptyDifficulty && <div className="input-message">*Please select an option</div>}
                    <div className="mb-1"></div>
                    <Input type="number" placeholder="Enter amount" iconUrl="/images/star-icon.svg" label="Amount" theme="dark" value={Amount} onChange={handleAmountChange} />
                    {MaxedAmount && <div className="input-message">50 is the maximum amount you can enter</div>}
                    {EmptyAmount && <div className="input-message">*Please input a value greater than 0</div>}
                    <div className="mb-4"></div>
                    {!pending && <Button label="play" type="filled" theme="dark" />}
                    {!pending && <div className="mb-1"></div>}
                    {error && <div>There was an error please try again</div>}
                </form>
            </div>
        </Layout>

    );

}

export default WelcomePage;