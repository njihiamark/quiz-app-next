import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import Question from "../features/questions/Question";

const PlayPage: NextPage = () => {
  return (
    <Layout theme="light">
      <div className="w-33-auto">
        <Question />
      </div>
    </Layout>
  );
};

export default PlayPage;
