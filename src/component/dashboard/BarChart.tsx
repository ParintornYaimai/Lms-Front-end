'use client'

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import type { ECharts } from 'echarts/core';

echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

const BarChartComponent = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
        },
        legend: {
          data: ['Study', 'Online Test'],
          left: 'left',
          icon: 'roundRect',
          itemWidth: 14,
          itemHeight: 14,
          itemGap: 50,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisLabel: {
                interval: 0,  // แสดงทุก label
                rotate: 0,    // หมุน label ถ้าต้องการ (เช่น 45 องศา เพื่อไม่ให้ทับกัน)
            },
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 80,
          interval: 20,
          splitNumber: 5,
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#ccc',
            },
          },
          axisLabel: {
            formatter: function (value: number) {
              return value + '\u00A0\u00A0Hr'; // ต่อท้าย 'Hr' กับตัวเลข
            },
          },
        },
        series: [
          {
            name: 'Study',
            type: 'bar',
            stack: 'total',
             barWidth: 15, 
            itemStyle: {
              color: '#f97316',
              borderRadius: [0, 0, 5, 5], // ขอบโค้งด้านล่าง
            },
            data: [35, 20, 55, 35, 10, 40, 25, 30, 45, 50, 60, 70],
          },
          {
            name: 'Online Test',
            type: 'bar',
            stack: 'total',
            itemStyle: {
              color: '#FCEED4',
              borderRadius: [5, 5, 0, 0], // ขอบโค้งด้านบน
            },
            data: [30, 20, 10, 15, 10, 20, 10, 15, 25, 30, 20, 15],
          },
        ],
      };

      chartInstance.current.setOption(option);

      const handleResize = () => chartInstance.current?.resize();
      window.addEventListener('resize', handleResize);

      return () => {
        chartInstance.current?.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return(
    <>
        <div>
            <h1 className='text-2xl'>Hours spent</h1>
            <div className='text-lg font-bold mt-3'>
                <div ref={chartRef} style={{ width: '100%', height: '220px' }} />
            </div>
        </div>
    </>
  )
};

export default BarChartComponent;
