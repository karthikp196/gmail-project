import React from 'react'
import "./EmailRow.css";
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';  
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from './features/mailSlice';

function EmailRow({ id, title, subject, description,time}) {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(selectMail({
            id, 
            title,
            subject,
            description,
            time
        }));
        history.push("/mail")
    }
    return (
        <div onClick={openMail}  className="emailrow">
            <div className="emailrow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailrow_title">
                {title}
            </h3>
            <div className="emailrow_message">
                <h4>
                    {subject} {" "}
                    <span className="emailrow_description">-{description}</span>
                </h4>
            </div>
            <div className="emailrow_time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
