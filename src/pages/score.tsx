import React from "react";
import type { NextPage } from 'next';

import Layout from "../components/Layout";
import QuestionsScore from "../features/questions/QuestionsScore"; 


const ScorePage: NextPage = () => {
    return (
        <Layout theme="dark">
            <QuestionsScore />
        </Layout>
    );
}

export default ScorePage;