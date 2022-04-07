import React from "react";

const ClassCard = (props) => {
    const fitClass = props.fitClass;
    return(
        <tr class='class-card'>
            <p>{fitClass.class_name}</p>
            <td>{fitClass.class_type}</td>
            <td>{fitClass.class_intensity_level}</td>
            <td>{fitClass.class_location}</td>
            <td>{fitClass.class_start_time}</td>
            <td>{fitClass.class_duration}</td>
            <td>{fitClass.max_class_size}</td>
            <button class='button' onClick={() => props.handleEdit(fitClass.class_id)}>Edit</button>
            <button class='button' onClick={() => props.handleDelete(fitClass.class_id)}>Delete</button>
        </tr>
    )
}

export default ClassCard;