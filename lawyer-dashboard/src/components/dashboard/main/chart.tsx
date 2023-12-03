"use client"

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useTranslations } from 'next-intl';
import style from './chart.module.scss'
import { styled } from '@mui/material/styles';

// ... (imports)

// ... (imports)

export default function ServiceClientChart({ servicesData }: { servicesData: any }) {
  const t = useTranslations('mainPage');

  const colorPalette = [
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#FF3399',
    '#33FF99',
    // Add more colors as needed
  ];

  const chartSetting = {
    yAxis: [
      {
        label: '',
        style: {
          fill: 'green',
        },
      },
    ],

    height: 400,
    paddingleft: '10px',
    color: 'white',
    fill: 'green',
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
        color: 'green',
        fill: 'yellow',
        padding: '10px',
      },
      [`.${axisClasses.tickLabel}`]: {
        fill: '#040831',
        fontsize: '30px',
      },
      [`.${axisClasses.tickLabel} ${axisClasses.label}`]: {
        color: 'white', // Set the color for Y-axis label here
        fill: '#040831',
      },
    },
  };

  const dataset = servicesData.map((service: any) => ({
    serviceTitle: service.serviceTitle,
    clientsCount: service.clientsCount,
  }));

  if (servicesData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${style.chartStyle} BarChart`}>
      <h1>{t('Statistic')}</h1>

      <BarChart
        className='BarChart'
        dataset={dataset}
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'serviceTitle',
          },
        ]}
        series={[
          {
            dataKey: 'clientsCount',
            label: t('clinetsNumber'),
            valueFormatter: (value) => `${value}`,
            color: '#040831',
         
          },
        ]}
        {...chartSetting}
        sx={{
          paddingLeft: 10,
          paddingRight: 10,
          width: '100%',
          color: '#ffffff',
          fill: 'green',
          ...chartSetting.sx,
        }}
      />
    </div>
  );
}
