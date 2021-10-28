import type { NextPage } from 'next';
import Layout from '../components/Layout';
import ScoreCard from '../components/ScoreCard';

const ScorePage: NextPage = () => {
    return(
        <Layout theme="dark">
            <div>Score page</div>
            <ScoreCard desc="In “Metal Gear Solid 2”, you will see through the eyes of Psycho Mantis if you go first person during his boss fight." status="fail"/>
        </Layout>
    );

}

export default ScorePage;