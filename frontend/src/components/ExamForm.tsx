import { useState } from "react";

import type { ExamFormValues } from "../types/exam";

import "./ExamForm.css";

interface ExamFormProps {
    onCreateExam: (formValues: ExamFormValues) => Promise<void>;
}

const initialFormValues: ExamFormValues = {
    courseCode: "",
    courseName: "",
    examDateTime: "",
    location: "",
    faculty: "",
    sourceUrl: "",
};

function ExamForm({ onCreateExam }: ExamFormProps) {
    const [formValues, setFormValues] = useState<ExamFormValues>(initialFormValues);



    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormValues((previousValues) => ({
            ...previousValues,
            [name]: value,
        }));
    }

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await onCreateExam(formValues);

        setFormValues(initialFormValues);
    }

    
    return (
        <form className="exam-form" onSubmit={handleSubmit}>
            <h2>Add Exam</h2>
            <div className="exam-form-grid">

                <label>
                    Course code
                    <input
                        type="text"
                        name="courseCode"
                        value={formValues.courseCode}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <label>
                    Course name
                    <input
                        type="text"
                        name="courseName"
                        value={formValues.courseName}
                        onChange={handleInputChange}
                        required
                    />
                </label>


                <label>
                    Exam date and time
                    <input
                        type="datetime-local"
                        name="examDateTime"
                        value={formValues.examDateTime}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <label>
                    Location
                    <input
                        type="text"
                        name="location"
                        value={formValues.location}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <label>
                    Faculty
                    <input
                        type="text"
                        name="faculty"
                        value={formValues.faculty}
                        onChange={handleInputChange}
                        required
                    />
                </label>


                <label>
                    Source URL
                    <input
                        type="url"
                        name="sourceUrl"
                        value={formValues.sourceUrl}
                        onChange={handleInputChange}
                    />
                </label>

            </div>
            <button type="submit" className="exam-form-submit">Add exam</button>
        </form>
    );
}

export default ExamForm;