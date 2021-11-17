import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Progress from '../components/Progress';
import Button from '../components/Button';
import PlayHeader from '../components/PlayHeader';
import { selectQuestions, showQuestion } from '../features/questions/questionsSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import noDataGohome from '../utils/noDataGoHome';


const PlayPage: NextPage = () => {
    const [CurrentQn, setCurrentQn] = useState<number>(1);
    const [AnsweredQn, setAnsweredQn] = useState<number>(0);
    const dispatch = useAppDispatch();

    const router = useRouter();
    const {
        error,
        data,
        pending,
        difficulty_setting,
        amount_setting,
        current_qn,
        total_qns
    } = useAppSelector(selectQuestions);
    useEffect(() => {
        noDataGohome(error, data, pending, router);
        if (data.length > 0 && !pending) {
            dispatch(showQuestion({ questionNo: CurrentQn, answer: "" }));
        }
        
        if(data.length > 0 && AnsweredQn === total_qns){
            router.push('/score', undefined, { shallow: true });
        }
    }, [pending, CurrentQn, AnsweredQn]);

    const handleAnswering = (answer:string) => {
        setCurrentQn(CurrentQn + 1);
        setAnsweredQn(AnsweredQn + 1);
        dispatch(showQuestion({ questionNo: CurrentQn, answer: answer }));
    }

    return (
        <Layout theme="light">
            <div className="w-33-auto">
                <PlayHeader difficulty_setting={difficulty_setting} />
                <div className="mb-2"></div>
                <Progress current_qn={AnsweredQn} total_qns={amount_setting} qn_text={current_qn?.question} />
                {data.length > 0 && !pending ? <div>
                    <Button label="true" type="filled" theme="light" onClick={() => handleAnswering("True")} />
                    <div className="mb-2"></div>
                    <Button label="false" type="outline" theme="light" onClick={() => handleAnswering("False")} />
                    <div className="mb-1"></div>
                </div>: <div>loading...</div>}

            </div>
        </Layout>
    );

}

export default PlayPage;