import type { NextPage } from "next";
import React from "react";

import Layout from "../components/Layout";
import SetQuestions from "../features/questions/SetQuestions";
import WelcomeHeader from "../components/WelcomeHeader";


const IndexPage: NextPage = () => {
  return (
    <Layout theme="dark">
      <div className="w-33-auto">
        <WelcomeHeader />
        <SetQuestions />
      </div>
    </Layout>
  );
};

export default IndexPage;
