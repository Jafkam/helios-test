import React from "react";
import { useForm } from "react-hook-form";
import SelectField from "../SelectField";

const Question = ({ submit, id, question }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(submit)} id={id}>
            <h1 className="my-3 text-xl">{question}</h1>
            <SelectField register={register} id={id} question={question} />
            {errors[question] && errors[question]?.type === 'required' && (
                <div className="text-[red] block my-2">Please select an option</div>
            )}
        </form>
    );
};

export default Question;
