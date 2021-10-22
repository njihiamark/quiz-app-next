import type { NextPage } from 'next';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';

const WelcomePage: NextPage = () => {
    return(
        <Layout theme="dark">
            Welcome page
            <Button label="okay" type="filled" />
        </Layout>
        
    );

}

export default WelcomePage;