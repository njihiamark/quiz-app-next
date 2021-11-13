import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Progress from '../../components/Progress';
import Button from '../../components/Button';
import PlayHeader from '../../components/PlayHeader';
import { selectQuestions } from '../../features/questions/questionsSlice';
import { useAppSelector } from '../../app/hooks';


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
        <Layout theme="light">
            <div className="w-33-auto">
                <PlayHeader />
                <div className="mb-2"></div>
                <Progress current_qn={8} total_qns={10} />
                <Button label="true" type="filled" theme="light" />
                <div className="mb-2"></div>
                <Button label="false" type="outline" theme="light" />
                <div className="mb-1"></div>
            </div>
        </Layout>
    );

}

export default PlayPage;