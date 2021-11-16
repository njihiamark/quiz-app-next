import type { NextPage } from 'next';

import Layout from '../components/Layout';
import ScoreCard from '../components/ScoreCard';
import Score from '../components/Score';
import { selectQuestions } from '../features/questions/questionsSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';

const ScorePage: NextPage = () => {
    const dispatch = useAppDispatch();

    const {
        data,
        total_qns,
        answered_correctly
    } = useAppSelector(selectQuestions);
    console.log(data);
    return (
        <Layout theme="dark">
            <div className="w-33-auto">
                <Score score={answered_correctly} max_score={total_qns} />
                {data?.map((item) => <ScoreCard desc={item.question} status={item.answered_correctly} key={item.id} />
                )}
            </div>
        </Layout>
    );

}

export default ScorePage;