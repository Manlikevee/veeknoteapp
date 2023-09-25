import React, { Children } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import 'material-symbols';
import Notecontent from './Notecontent';
import Notebody from './Notebody';

const Notelayout = ({Children}) => {
  return (
    <>
    <Header/>
    <div className="notecontainer">
        <Sidebar/>
        <Notecontent/>
      <Notebody/>
    </div>
    </>
  )
}

export default Notelayout