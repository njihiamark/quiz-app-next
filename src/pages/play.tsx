import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Progress from '../components/Progress';

const PlayPage: NextPage = () => {
    return(
        <Layout theme="light"><div>Play Now </div> <Progress current_qn={8} total_qns={10} percentage={80} /></Layout>
    );

}

export default PlayPage;