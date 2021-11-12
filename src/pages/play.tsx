import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Progress from '../components/Progress';
import { selectQuestions } from '../features/questions/questionsSlice';
import { useAppSelector } from '../app/hooks';


const PlayPage: NextPage = () => {
    const router = useRouter();
    const {
        error
    } = useAppSelector(selectQuestions);
    useEffect(() => {
        if (error) {
            router.push('/welcome', undefined, { shallow: true })
        }
    });
    return (
        <Layout theme="light"><div>Play Now </div> <Progress current_qn={8} total_qns={10} percentage={80} /></Layout>
    );

}

export default PlayPage;