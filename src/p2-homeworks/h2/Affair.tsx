import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const classNamePriority= props.affair.priority==="high"?s.priorityHigh:props.affair.priority==="middle"?s.priorityMedium: props.affair.priority==="low"?s.priorityLow:"";

    return (
        <div key={props.affair._id} className={s.someStyle}>
            <div >{props.affair.name}</div>
            <div className={classNamePriority}>{props.affair.priority}</div>

            <button className={`${s.buttonAffair} ${s.buttonAffairDel}` } onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
