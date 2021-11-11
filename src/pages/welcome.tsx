import type { NextPage } from 'next';
import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Layout from '../components/Layout';
import WelcomeHeader from '../components/WelcomeHeader';

const WelcomePage: NextPage = () => {
    const [Amount, setAmount] = useState<number>(0);
    const [Difficulty, setDifficulty] = useState<string>("");
    const [MaxedAmount, setMaxedAmount] = useState<boolean>(false);

    const handleDifficultyChange = (event) => {
        setDifficulty(String(event.target.value));
    }

    const handleAmountChange = (event) => {
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

    return (
        <Layout theme="dark">
            <div className="w-33-auto">
                <WelcomeHeader />
                <Select iconUrl="/images/trophy-icon.svg" label="Difficulty" theme="dark" value={Difficulty} options={["hard", "easy"]} onChange={handleDifficultyChange} />
                <div className="mb-1"></div>
                <Input type="number" placeholder="Enter amount" iconUrl="/images/star-icon.svg" label="Amount" theme="dark" value={Amount} onChange={handleAmountChange} />
                {MaxedAmount && <div className="input-message">50 is the maximum amount you can enter</div>}
                <div className="mb-4"></div>
                <Button label="okay" type="filled" theme="dark" />
                <div className="mb-1"></div>
            </div>
        </Layout>

    );

}

export default WelcomePage;