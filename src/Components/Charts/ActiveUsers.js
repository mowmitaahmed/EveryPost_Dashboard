import React from 'react';
import Chart  from 'react-apexcharts'

const ActiveUsers = () => {
    const users=  [{
        name: 'Active Users',
        data: [750, 1000, 900, 1250, 1000, 1200, 1100]
      }]
      const usersOptions = {
        colors: ["#3BD07E"],
        chart: {
          height: '100px',
          type: 'area',
          width: '100%',
          toolbar: {
              show: false
          },
          sparkline: {
            enabled: true
         }
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          }
        },
        stroke: {
          curve: 'smooth',
          width: 5,
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
        tooltip: {
        //   x: {
        //     format: 'dd/MM/yy HH:mm'
        //   },
        },
        fill: {
            colors: ['#3BD07E', '#EA5455', '#28C76F'],
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
                colorStops: [
                    {
                      offset: 0,
                      color: "#10163A",
                      opacity: 1
                    },
                    {
                      offset: 50,
                      color: "#10163A",
                      opacity: 1
                    },
                    {
                      offset: 100,
                      color: "#10163A",
                      opacity: 1
                    }
                  ]
            }
          },
        markers: {
            colors: ['#3BD07E', '#7367f0', '#9C27B0']
         }
      }
    return (
        <div>
            <Chart className="rounded-bottom" options={usersOptions} series={users} type="area" width={'100%'} height={'100px'}/>
        </div>
    );
};

export default ActiveUsers;