import React from 'react';
import Table from './Table';

 export default function Api(){
    const api = [
        {
            name:'Abhishek Tiwari',
            city:'Prayagraj',
            Mobile_no:'9866532075',
            graduation:"B-tech"
        },
        {
            name:'Abhishek Mishra',
            city:'Hyderabad',
            Mobile_no:'8388654488',
            graduation:"BCom"
        },
        {
            name:'Suraj Tiwari',
            city:'Chandigarh',
            Mobile_no:'8854092374',
            graduation:"BA"
        },
        {
            name:'Aryan Shukla',
            city:'Ambala Cant',
            Mobile_no:'7753092547',
            graduation:"M-tech"
        },
        {
            name:'Himanshu Tiwari',
            city:'Lucknow',
            Mobile_no:'8896474376',
            graduation:"BSc"
        },
    ]

  return (
    <div>
      <h1 className='heading'>Table Data From API</h1>
      <Table api={api} />
    </div>
  );
};

