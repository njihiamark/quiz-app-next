import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Progress from '../components/Progress';

const PlayPage: NextPage = () => {
    return(
        <Layout theme="light"><div>Play Now </div> <Progress /></Layout>
    );

}

export default PlayPage;