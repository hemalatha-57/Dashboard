"use client"
import { Space, Table, Tag } from 'antd';
import React from 'react';

const TableComponent = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      filters: [
        { text: 'John Brown', value: 'John Brown' },
        { text: 'Jim Green', value: 'Jim Green' },
        { text: 'Joe Black', value: 'Joe Black' },
      ],
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      filters: [
        { text: '32', value: 32 },
        { text: '42', value: 42 },
      ],
      onFilter: (value, record) => record.age === value,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      filters: [
        { text: 'nice', value: 'nice' },
        { text: 'developer', value: 'developer' },
        { text: 'loser', value: 'loser' },
        { text: 'cool', value: 'cool' },
        { text: 'teacher', value: 'teacher' },
      ],
      onFilter: (value, record) => record.tags.includes(value),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div className=' p-4'>
      <div className=" w-full overflow-x-auto">
         <Table  columns={columns} dataSource={data}
    />
     </div>
    </div>
  );
};

export default TableComponent;
