import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartComponent = ({ ratio }) => {
  const roomsWithHotel = ratio * 100;
  const roomsWithoutHotel = 100 - roomsWithHotel;

  const data = [
    { name: 'Rooms with Hotel', value: roomsWithHotel },
    { name: 'Rooms without Hotel', value: roomsWithoutHotel },
  ];

  const COLORS = ['#000', '#808080'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;