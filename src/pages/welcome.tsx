import type { NextPage } from 'next';
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Layout from '../components/Layout';

const WelcomePage: NextPage = () => {
    const [Amount, setAmount] = useState<number>(0);
    const [Difficulty, setDifficulty] = useState<string>("");

    const handleDifficultyChange = (event) => {
        setDifficulty(String(event.target.value));
    }

    const handleAmountChange = (event) => {
        setAmount(Number(event.target.value));
    }

    return (
        <Layout theme="dark">
            <Select iconUrl="/images/trophy-icon.svg" label="Difficulty" theme="dark" value={Difficulty} options={["hard", "easy"]} onChange={handleDifficultyChange} />
            <Input type="number" placeholder="Enter amount" iconUrl="/images/star-icon.svg" label="Amount" theme="dark" value={Amount} onChange={handleAmountChange} />
            <Button label="okay" type="filled" theme="dark" />
        </Layout>

    );

}

export default WelcomePage;