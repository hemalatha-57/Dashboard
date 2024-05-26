import { PercentageOutlined,DollarCircleOutlined } from '@ant-design/icons'
import {Card, Col, Row } from 'antd'
import React from 'react'

const CardComponent = () => {
  return (
    <div>
  <div  className='  pt-16 pb-6 pe-2 ps-16'>

    <Row gutter={8}>
      <Col span={12}>
      <Card  className='h-[140px] p-4'>

        <PercentageOutlined className='float-start	'
                style={{ fontSize: "350%", color: "#6366F1" }}
              />

              <span className='float-end	text-end'>
              <b className='text-[#686869]'>SALES
                <br></br>
            <span className='text-black text-2xl'>
$5312.00
</span>
</b>
              </span>


              </Card>
                  </Col>
      <Col span={12}>
      <Card  className='h-[140px] p-4'>

        <PercentageOutlined className='float-start	'
                style={{ fontSize: "350%", color: "#6366F1" }}
              />

              <span className='float-end	text-end'>
              <b className='text-[#686869]'>PURCHASES
                <br></br>
            <span className='text-black text-2xl'>
$5312.00
</span>
</b>
              </span>


              </Card>
      </Col>

    </Row>
    </div>
   <div  className='  pb-[30px] pe-2 ps-16'>
    <Row gutter={10}>
      <Col span={12}>
      <Card  className='h-[140px] p-4'>

        <DollarCircleOutlined className='float-start	'
                style={{ fontSize: "350%", color: "#6366F1" }}
              />

              <span className='float-end	text-end'>
              <b className='text-[#686869]'>SALES RETURN
                <br></br>
            <span className='text-black text-2xl'>
$5312.00
</span>
</b>
              </span>


              </Card>
      </Col>
      <Col span={12}>
      <Card  className='h-[140px] p-4'>

        <PercentageOutlined className='float-start	'
                style={{ fontSize: "350%", color: "#6366F1" }}
              />

              <span className='float-end	text-end'>
              <b className='text-[#686869]'>PURCHASES RETURN

                <br></br>
            <span className='text-black text-2xl'>
$5312.00
</span>
</b>
              </span>


              </Card>
      </Col>

    </Row>
  </div>
  </div>
  )
}

export default CardComponent
