import axios from "axios";
import { useEffect, useState } from "react";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        fetchStudents();
    };

    useEffect(() => { fetchStudents(); }, []);

    return (
        <ul className="list-group">
            {students.map(s => (
                <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {s.name} - {s.course}
                    <button onClick={() => handleDelete(s.id)} className="btn btn-danger btn-sm">Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default StudentList;