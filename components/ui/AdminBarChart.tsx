"use client";

import { Divide } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Junho", Lucro: 201.45, Custo: 68 },
  { name: "Julho", Lucro: 369, Custo: 160 },
  { name: "Agosto", Lucro: 402, Custo: 218.22 },
  { name: "Setembro", Lucro: 458.78, Custo: 189 },
  { name: "Outubro", Lucro: 673, Custo: 327 },
];

const AdminBarChart = () => {
  return (
    <>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Tooltip
            content={({ active, label, payload, content }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white p-2 border rounded">
                    <p className="">{`${label}`}</p>
                    <p className="text-red-500">{`Custo: R$${
                      typeof payload[0].value === "number"
                        ? payload[0].value.toFixed(2)
                        : payload[0].value
                    }`}</p>
                    <p className="text-green-500">{`Lucro: R$${
                      typeof payload[1].value === "number"
                        ? payload[1].value.toFixed(2)
                        : payload[1].value
                    }`}</p>
                  </div>
                );
              }
            }}
          />
          <Bar dataKey={"Custo"} stackId={"a"} fill="#dc2626" />
          <Bar
            dataKey={"Lucro"}
            stackId={"a"}
            radius={[5, 5, 0, 0]}
            fill="#22c55e"
          />
          <YAxis />
          <XAxis dataKey={"name"} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default AdminBarChart;
