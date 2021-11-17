import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

import Progress from "../../components/Progress";
import Button from "../../components/Button";
import PlayHeader from "../../components/PlayHeader";
import { selectQuestions, showQuestion } from "./questionsSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import noDataGohome from "../../utils/noDataGoHome";

const Question: React.FC = () => {
  const [CurrentQn, setCurrentQn] = useState<number>(1);
  const [AnsweredQn, setAnsweredQn] = useState<number>(0);
  const trueBtnRef = useRef(null);
  const falseBtnRef = useRef(null);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const {
    error,
    data,
    pending,
    difficulty_setting,
    amount_setting,
    current_qn,
    total_qns,
  } = useAppSelector(selectQuestions);
  useEffect(() => {
    noDataGohome(error, data, pending, router);

    if (data.length > 0 && !pending) {
      dispatch(showQuestion({ questionNo: CurrentQn, answer: "" }));
      trueBtnRef.current.blur();
      falseBtnRef.current.blur();
    }

    if (data.length > 0 && AnsweredQn === total_qns) {
      router.push("/score", undefined, { shallow: true });
    }
  }, [pending, CurrentQn, AnsweredQn]);

  const handleAnswering = (answer: string) => {
    setCurrentQn(CurrentQn + 1);
    setAnsweredQn(AnsweredQn + 1);
    dispatch(showQuestion({ questionNo: CurrentQn, answer: answer }));
  };
  return (
    <>
      <PlayHeader difficulty_setting={difficulty_setting} />
      <div className="mb-2"></div>
      <Progress
        current_qn={AnsweredQn}
        total_qns={amount_setting}
        qn_text={current_qn?.question}
      />
      {data.length > 0 && !pending ? (
        <div>
          <Button
            label="true"
            type="filled"
            theme="light"
            onClick={() => handleAnswering("True")}
            refValue={trueBtnRef}
          />
          <div className="mb-2"></div>
          <Button
            label="false"
            type="outline"
            theme="light"
            onClick={() => handleAnswering("False")}
            refValue={falseBtnRef}
          />
          <div className="mb-1"></div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Question;
