import type { ExamResponse } from "../types/exam";

import "./ExamList.css";

interface ExamListProps {
    exams: ExamResponse[];
}

function ExamList({ exams }: ExamListProps) {
    if (exams.length === 0) {
        return <p className="exam-empty-message">No exams found.</p>;
    }

    return (
        <div className="exam-list-container">
            <h2 className="exam-list-title">
                <table className="exam-table">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Name</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Faculty</th>
                        </tr>
                    </thead>

                    <tbody>
                        {exams.map((exam) => (
                            <tr key={exam.id}>
                                <td>{exam.courseCode}</td>
                                <td>{exam.courseName}</td>
                                <td>{exam.examDateTime}</td>
                                <td>{exam.location}</td>
                                <td>{exam.faculty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </h2>
        </div>
    );
}

export default ExamList;