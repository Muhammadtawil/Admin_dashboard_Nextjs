"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


export default function ServiceClientChart({ servicesData }: { servicesData: any }) {
      // Generate an array of unique colors for each bar
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
        label: 'Clients Number',
      },
    ],
    width: 1300, // Make the chart full width by setting it to a number
      height: 400,
      sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translate(-20px, 0)',
        },
      },// Adjust the height to your needs
  };

  // Transform the data into the required format for the BarChart
  const dataset = servicesData.map((service:any) => ({
    serviceTitle: service.serviceTitle,
      clientsCount: service.clientsCount,
    
  }));
  if (servicesData.length === 0) {
    // Return a loading message when there is no data
    return <div>Loading...</div>;
  }
    return (

      <BarChart
          
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'band',
              dataKey: 'serviceTitle',
              // X-axis with service titles
            //   tickSize: 30
        },
      ]}
      series={[
        {
          dataKey: 'clientsCount', // Y-axis with clientsCount
          label: 'Clients Number',
              valueFormatter: (value) => `${value}`,
            //   color: 'blue', 
          
        },
      ]}
    
      {...chartSetting}
            />
   
  );
}
