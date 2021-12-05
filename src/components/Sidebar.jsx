import React from 'react'
import {FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa'


const Sidebar = ({selected,setSelected}) => {
    console.log(selected)
    return (
        <div className='sidebar'>

            <div className={selected==='INBOX' ? 'active' : " " } onClick={()=>setSelected('INBOX')}>
                <FaInbox className='icon' />
                Inbox
                </div>

            <div className={selected==='TODAY' ? 'active' : " " } onClick={()=>setSelected('TODAY')}>
                <FaRegCalendar className='icon' />
                Todays
                </div>

            <div className={selected==='NEXT_7' ? 'active' : " " } onClick={()=>setSelected('NEXT_7')}>
                <FaRegCalendarAlt className='icon'/>
            Next 7 Days
             </div>
            
        </div>
    )
}
export default Sidebar;
