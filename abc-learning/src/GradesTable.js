import React, { useState, useEffect } from 'react';

export const StudentTable = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th>Subjects</th>
            </tr>
            </thead>
            <tbody>
            {data.map((student, index) => (
                <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.grade}</td>
                    <td>{student.subjects.join(', ')}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
