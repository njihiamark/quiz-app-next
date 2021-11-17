import type { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout";

import WelcomeHeader from "../components/WelcomeHeader";
import SetQuestions from "../features/questions/setQuestions";

const WelcomePage: NextPage = () => {
  return (
    <Layout theme="dark">
      <div className="w-33-auto">
        <WelcomeHeader />
        <SetQuestions />
      </div>
    </Layout>
  );
};

export default WelcomePage;
