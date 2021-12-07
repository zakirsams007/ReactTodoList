import React,{useState} from 'react';
import Sidebar from './Sidebar';
import Task from './Task';
// import Footer from './Footer';

 const Content = () => {

    const [selectedTab, setSelectedTab] = useState('INBOX') 

    return (
       
        <section className='content'>
            <Sidebar selected ={selectedTab} setSelected={setSelectedTab} /> 
             <Task selectedTab={selectedTab} />
             {/* <Footer /> */}
        </section>
            
        
    )
}
export default Content;
