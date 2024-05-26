import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Header from './Header'
import { Card } from 'antd';
import CardComponent from './CardComponent';
import { Position } from 'devextreme-react/cjs/autocomplete';

const App = () => {
  return (
    <div className='bg-white'>
      <div className='header_part'>
        <Header  />

      </div>
      <div className="flex ">
        <div className="basis-[10%] ">
          <Sidebar   />

        </div>

        <div className="basis-[90%]  border">
          <Dashboard/>

        </div>
      </div>

    </div>
  )
}

export default App
