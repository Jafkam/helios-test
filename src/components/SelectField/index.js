const SelectField = ({ register, id, question }) => {

    return (
        <>
            <label htmlFor={id} className="block">
                Select Yes/No
            </label>
            <select {...register(question, { required: true })} className="my-3 border-2 border-black" defaultValue={""} name={question} >
                <option value="" disabled hidden>Select option</option>
                <option value='Yes'> Yes</option>
                <option value='No'> No</option>
            </select>
        </>
    );
}

export default SelectField;