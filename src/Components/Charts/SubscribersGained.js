import React from 'react';
import Chart  from 'react-apexcharts'

const SubscribersGained = () => {
    const subscribers=  [{
        name: 'Subscribers',
        data: [28, 40, 36, 52, 38, 60, 55]
      }]
      const orderOptions = {
        colors: ["rgb(115, 103, 240)"],
        chart: {
          height: '120px',
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
          width: 2,
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
            // colors: ['rgb(115, 103, 240)', '#EA5455', '#28C76F'],
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
                      color: "#44428F",
                      opacity: 1
                    },
                    {
                      offset: 50,
                      color: "#4B4C81",
                      opacity: 1
                    },
                    {
                      offset: 100,
                      color: "#484C6B",
                      opacity: 1
                    }
                  ]
            }
          },
        markers: {
            colors: ['#7367f0', '#7367f0', '#9C27B0']
         }
      }
    return (
        <div>
            <Chart className="rounded-bottom" options={orderOptions} series={subscribers} type="area" width={'100%'} height={'110px'}/>
        </div>
    );
};

export default SubscribersGained;