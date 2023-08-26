"use client";

import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { name: "Junho", lucro: 201 },
  { name: "Julho", lucro: 369 },
  { name: "Agosto", lucro: 402 },
  { name: "Setembro", lucro: 458 },
  { name: "Outubro", lucro: 673 },
];

const AdminBarChart = () => {
  return (
    <>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey={"lucro"} radius={5} fill="#dc2626" />
          <YAxis />
          <XAxis dataKey={"name"} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default AdminBarChart;
