import type { NextPage } from 'next';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Layout from '../components/Layout';

const WelcomePage: NextPage = () => {
    return(
        <Layout theme="dark">
            Welcome page
            <Select iconUrl="/images/trophy-icon.svg" label="Difficulty" theme="dark" value="lime" />
            <Input type="number" placeholder="Enter amount" iconUrl="/images/star-icon.svg" label="Amount" theme="dark" value={5} />
            <Button label="okay" type="filled" theme="dark" />
        </Layout>
        
    );

}

export default WelcomePage;