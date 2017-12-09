import React from 'react';
import ItemSubject from './SubjectItem'

export default function Semester({ semester, selectSubject }) {
    const ShowSemester = semester.map((data, index) => <ItemSubject key={index} subject={data} selectSubject={selectSubject} />)
    return(
        <div className="row-header">
            { ShowSemester }
        </div>
    )
}