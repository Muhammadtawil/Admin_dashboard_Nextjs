"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MonthlyClientChart({ clientData }: { clientData: any[] }) {
  if (!Array.isArray(clientData) || clientData.length === 0) {
    return <div>No data available.</div>;
  }

  const chartSetting = {
    xAxis: [
      {
        label: 'Month',
      },
    ],
    width: 500,
    height: 400,
    padding: { top: 20, right: 20, bottom: 20, left: 100 },
  };

  // Create an array of all months
  const allMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  // Group client data by month and count the number of clients for each month
  const groupedData: Record<string, number> = clientData.reduce((result: any, client: any) => {
    const createdAt = new Date(client.createdAt);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(createdAt);

    if (!result[monthName]) {
      result[monthName] = 0;
    }

    result[monthName] += 1;
    return result;
  }, {});

  // Ensure all months are in the dataset
  allMonths.forEach(month => {
    if (!groupedData[month]) {
      groupedData[month] = 0;
    }
  });

  const dataset = Object.entries(groupedData).map(([month, count]) => ({
    month,
    count,
  }));

  const valueFormatter = (value: number) => `${value} clients`;
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' ,textColor:'yellow' }]}
      series={[{ dataKey: 'count', label: 'Number of Clients', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
