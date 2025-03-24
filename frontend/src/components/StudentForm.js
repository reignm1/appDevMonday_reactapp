import { useState } from "react";
import axios from "axios";

const StudentForm = ({ fetchStudents }) => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/students", { name, course });
        setName("");
        setCourse("");
        fetchStudents();
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border rounded">
            <input className="form-control mb-2" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="form-control mb-2" type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} required />
            <button className="btn btn-primary" type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;