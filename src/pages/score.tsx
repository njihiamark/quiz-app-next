import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ScoreCard from '../components/ScoreCard';

const ScorePage: NextPage = () => {
    return(
        <Layout theme="dark">
            <div>Score page</div>
            <ScoreCard />
        </Layout>
    );

}

export default ScorePage;