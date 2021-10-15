import React, { useState, useEffect  }  from 'react'
import "./EmailList.css";
import Checkbox from '@mui/material/Checkbox';  
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { onSnapshot,collection,query,orderBy } from "firebase/firestore"; 
import { db } from './firebase';

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(
        () => 
        onSnapshot(query(collection(db, 'emails'), orderBy('timestamp', 'desc')), snapshot=> {
            setEmails(
                snapshot.docs.map((doc) => ({
                    id:doc.id,
                    data:doc.data(),
                }))
            );
        }) 
    , [db]);

    console.log(emails);

    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailListsettings_left">
                    <IconButton>
                        <Checkbox />
                    </IconButton>

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>  
                </div>

                <div className="emailListsettings_right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>  
                </div>
            </div>

            <div className="emailList_sections"> 
                <Section Icon={InboxIcon} title='Primary' color='red'  selected/>
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8'   />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green'  />
            </div>

            <div className="emailList_list">
                {emails.map(({id, data}) => (
                 <EmailRow key={id} id={id} title={data.to} subject={data.subject} description={data.message} time="13-10-2021 10:50 AM" />
                ))}

                  {/* {emails.map(({id, data: {message, subject, timestamp, to}}) => (
                 <EmailRow id={id} key={id} title={to} subject={subject} description={message} time={timestamp} />
                ))}
                */}
               
            
            </div>

        </div>
    )
}

export default EmailList
