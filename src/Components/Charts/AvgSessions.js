import React from 'react';
import Chart  from 'react-apexcharts'

const AvgSessions = () => {
    
    // Avg Session
    const avgSessions = [{
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25]
      }]
      const avgOptions = {
        colors: ["rgb(115, 103, 240)"],
        chart: {
          height: '100%',
          width: '100%',
          type: 'bar',
          toolbar: {
              show: false
          },
          sparkline: {
            enabled: true
         }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                },
                tooltip:{
                    enabled: false
                }
            } 
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks:{
                show: false
            },
            tooltip:{
                enabled: false
            }
        },
        yaxis: {
          show: false,
          labels:{
              show: false
          },
          axisBorder:{
            show: false
          },
          axisTicks: {
              show: false
          },
          tooltip:{
              enabled: false
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val 
            }
          }
        }
      }
    return (
        <div>
            <Chart className="rounded-bottom" options={avgOptions} series={avgSessions} type="bar" width={'100%'} height={'200px'}/>
        </div>
    );
};

export default AvgSessions;