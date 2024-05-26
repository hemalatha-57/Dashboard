

"use client"

import React from 'react';
import {  Table } from 'antd';
const { Column } = Table;
const data = [
  {
    key: '1',
    code: '67105928	',
    product: 'Smartphone	',
    quality: 32,
    warehoues: 'Warehoues 01	 ',

    alertquality:54,

  },
  {
    key: '2',
    code: '87305928	',
    product: 'Mask',
    quality: 42,
    warehoues: 'Warehoues 02	',
    alertquality:74,

  },



  {
    key: '3',
    code: '57305967	',
    product: 'Laptop',
    quality: 32,
    alertquality:24,

    warehoues: 'Warehoues 03',
  },
  {
    key: '4',
    code: '27305922	',
    product: 'Earphone',
    quality: 42,
    alertquality:14,

    warehoues: 'Warehoues 05',
  },

  {
    key: '5',
    code: '237305967	',
    product: 'Laptop',
    quality: 32,  
      alertquality:34,
    warehoues: 'Warehoues 06	',
  },
];
function StockTable  (){
    return (
        <div className='w-[620px]  bg-white'>
<h1 className=' font-bold p-4 text-xl'>Stock Alert
</h1>

  <Table dataSource={data} >

    <Column title="CODE" dataIndex="code" key="code" className='text-[#686468] font-medium	'/>
    <Column title="PRODUCT" dataIndex="product" key="product" className='text-[#686468] font-medium	'/>
    <Column title="WAREHOUSE" dataIndex="warehoues" key="warehoues" className='text-[#686468] font-medium	'/>

    <Column title="QUANTITY" dataIndex="quality" key="quality" className='text-[#686468] font-medium	text-center'/>
    <Column title="ALERT QUANTITY
" dataIndex="alertquality" key="alertquality" className='text-[#FF0001] font-semibold	text-center'/>

   
   
  </Table>
  </div>
    )
;}
export default StockTable;