"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslations } from 'next-intl';
import { axisClasses } from '@mui/x-charts';

type GroupedData = { [key: string]: number };

export default function MonthlyClientChart({ clientData }: { clientData: any[] }) {
  const t = useTranslations('mainPage');

  if (!Array.isArray(clientData) || clientData.length === 0) {
    return <div>No data available.</div>;
  }

  const chartSetting = {
    xAxis: [
      {
        label: t('month'),
        
      },
    ],
    width: 500,
    height: 400,
    padding: { top: 20, right: 20, bottom: 20, left: 100 },
    fill: "white",
    sx: {
      [`.${axisClasses.right} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
        color: 'green',
        fill: 'yellow',
        padding: '10px',
      },
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
        color: 'green',
        fill: 'yellow',
        padding: '10px',
      },
      [`.${axisClasses.tickLabel} ${axisClasses.label}`]: {
        color: 'white', // Set the color for Y-axis label here
        fill: '#040831',
      },
      [`.${axisClasses.bottom} ${axisClasses.label}`]: {
        color: 'white', // Set the color for Y-axis label here
        fill: '#040831',
      },
    },
  };
  // Ensure all months are in the dataset
  const allMonths = [
    t('January'), t('February'), t('March'), t('April'), t('May'), t('June'),
    t('July'), t('August'), t('September'), t('October'), t('November'), t('December')
  ];
  // Create a set of unique months based on client data
  const uniqueMonths = new Set<string>();
  clientData.forEach((client) => {
    const createdAt = new Date(client.createdAt);
    const monthName =allMonths[createdAt.getMonth()]; // Translate the month
    uniqueMonths.add(monthName);
  });



  uniqueMonths.forEach((month) => {
    if (!allMonths.includes(month)) {
      allMonths.push(month);
    }
  });

  // Count the number of clients for each unique month
  const groupedData: GroupedData = {};
  clientData.forEach((client) => {
    const createdAt = new Date(client.createdAt);
    const monthName = allMonths[createdAt.getMonth()]; // Translate the month

    if (!groupedData[monthName]) {
      groupedData[monthName] = 0;
    }

    groupedData[monthName] += 1;
  });

  const dataset = allMonths.map((month) => ({
    month,
    count: groupedData[month] || 0,
  }));

  const valueFormatter = (value: number) => `${value} clients`;

  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'count', label: t('clientsPerMonth'), valueFormatter ,color: '#040831',}]}
      layout="horizontal"
      {...chartSetting}
      
    />
    
  );
}
