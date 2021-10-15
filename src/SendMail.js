import React from 'react';
import "./SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { ClosesendMessage } from './features/mailSlice';
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db } from './firebase';

function SendMail() {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const onSubmit = data => console.log(data);

    const onSubmit = (data) => {
        console.log(data);
         addDoc(collection(db, 'emails'), {
            to:data.to,
            subject:data.subject,
            message:data.message,
            timestamp:serverTimestamp()
        });
 
        dispatch(ClosesendMessage());
    }
   
    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(ClosesendMessage())} className="sendmail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <input  {...register("to", { required: true })} placeholder="To" type="email" />
                {errors.to && <span className="sendmain_error">This field is required</span>}
                <input  {...register("subject", { required: true })} placeholder="Subject"  />
                {errors.subject && <span className="sendmain_error">This field is required</span>}
                <input {...register("message", { required: true })}  placeholder="Message..." className="sendmail_message" />
                {errors.message && <span className="sendmain_error">This field is required</span>}
                <div className="sendmail_options">
                    <Button type="submit"  className="sendmail_send">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
