import {useEffect} from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import ScoreCard from '../components/ScoreCard';
import Button from '../components/Button';
import Score from '../components/Score';
import { selectQuestions, resetState } from '../features/questions/questionsSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import noDataGohome from '../utils/noDataGohome';

const ScorePage: NextPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {
        data,
        total_qns,
        answered_correctly,
        error,
        pending
    } = useAppSelector(selectQuestions);

    useEffect(() => {
        noDataGohome(error, data, pending, router);
    },[data])

    const handleQuizReset = () => {
        dispatch(resetState());
    }
    
    return (
        <Layout theme="dark">
            <Score score={answered_correctly} max_score={total_qns} close_func={handleQuizReset} />
            <div className="w-50-auto">
                {data?.map((item) => <ScoreCard desc={item.question} status={item.answered_correctly}  key={item.id} />
                )}
            </div>
            <div className="w-33-auto">
             <div className="mb-2"></div>   
            <Button label="play again" type="filled" theme="dark" onClick={handleQuizReset} />
            <div className="mb-3"></div>  
            </div>
        </Layout>
    );

}

export default ScorePage;