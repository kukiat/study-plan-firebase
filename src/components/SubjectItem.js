import React from 'react';
import Arrow from '../components/Arrow'

export default function ItemSubject({subject, selectSubject }) {
    return (
        <div className="container-main">
            <Arrow status={ subject.status } subject={ subject }/>
            <div className="container-card" onClick={ () => selectSubject(subject.subject_id) }>
                <div className={ subject.status? "index-card-change": "index-card" }>
                    <div className="detail-card">
                        <div>{ subject.subject_id }</div>
                        <div>{ subject.name }</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}