import React from "react";

const ClassCard = (props) => {
    const fitClass = props.fitClass;
    return(
        <div>
        <tr>
            <td>{fitClass.class_name}</td>
            <td>{fitClass.class_type}</td>
            <td>{fitClass.class_intensity_level}</td>
            <td>{fitClass.class_location}</td>
            <td>{fitClass.class_start_time}</td>
            <td>{fitClass.class_duration}</td>
            <td>{fitClass.max_class_size}</td>
        </tr>
        <button onClick={() => props.handleEdit(fitClass.class_id)}>Edit</button>
        <button onClick={() => props.handleDelete(fitClass.class_id)}>Delete</button>
        </div>
    )
}

export default ClassCard;