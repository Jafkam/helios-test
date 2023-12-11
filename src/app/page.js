
"use client"
import Wizard from "@/components/Forms/wizard";
import { WizardProvider, useWizard } from "@/context/wizard";
import { createElement, useEffect } from "react";
import { useRouter } from "next/navigation";
import Question from "@/components/ConsultationQuestions";


const steps = [
  {
    id: "age",
    component: Question,
    question: "Are you aged between 18-65?"
  },
  {
    id: "numberOfMigraines",
    component: Question,
    question: "Do you experience migraines for more than 10 days a month?"
  },
  {
    id: "migraineHours",
    component: Question,
    question: "Do your migraines last less than 4 hours without treatment or last longer than 24 hours?"
  },
  {
    id: "migrainePattern",
    component: Question,
    question: "Do your migraines follow a broadly similar pattern each time?"
  },
  {
    id: "pregnant",
    component: Question,
    question: "Are you breastfeeding or pregnant or possibly pregnant?"
  },
]


function ConsultationSteps() {
  const router = useRouter()
  const { isLastStep, stepsInfo } = useWizard();

  const onCompleteConsultation = () => {
    console.log(stepsInfo)
    router.push("/thankyou");
  }

  useEffect(() => {
    if (isLastStep) {
      onCompleteConsultation()
    }
  }, [isLastStep, onCompleteConsultation])
  return (
    <div>
      {steps.map(({ id, component, question }) => (
        <Wizard.Step
          key={id}
          id={id}
          render={({ submit, currentId, }) => {
            return (
              <>
                {createElement(component, {
                  id: currentId,
                  submit,
                  question
                })}
                <button form={currentId} className="border-2 border-black p-2" type="submit">Next</button>
              </>
            );
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const stepIds = steps.slice().map((e) => e.id);
  stepIds.push("summary");
  return (
    <WizardProvider steps={stepIds}>
      <ConsultationSteps />
    </WizardProvider>
  )
}