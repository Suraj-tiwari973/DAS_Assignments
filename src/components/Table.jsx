import React from 'react';

export default function Table({ api }){
  return (
    <>
    <div>
    <table>
      <thead>
        <tr>
         <th>Your Name</th>
         <th>Your City</th>
         <th>Mobile Number</th>
         <th>Graguation</th>
        </tr>
      </thead>
      <tbody>
        {api.map((item,index)=>{
            return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.Mobile_no}</td>
                <td>{item.graduation}</td>
            </tr>
            );
        })}
      </tbody>
    </table>
    </div>
    </>
  );
};

