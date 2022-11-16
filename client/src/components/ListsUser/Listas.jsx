import React from 'react'
import './ListUser'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListUser from './ListUser';
import fondo from '../media/fondo.jpg'
import NavbarP from '../NavbarP/NavbarP'
import FollowList from './FollowList';

const Listas = () => {
  return (
    <div>
         <img className='fondo'src={fondo} alt="" />
    <NavbarP/>
        
        <div className='tableta'>
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="profile" title="My lists">
      <ListUser/>
      </Tab>
      
      <Tab eventKey="home" title="Followed lists">
        <FollowList/>
      </Tab>

    </Tabs>
 
    </div>
    </div>
  )
}

export default Listas