import React from 'react';
import Chart  from 'react-apexcharts'

const RevenueGenerated = () => {
    const revenue=  [{
        name: 'Revenue',
        data: [350, 275, 400, 300, 350, 300, 450]
      }]
      const revenueOptions = {
        colors: ["#28C76F"],
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
                      color: "#256A59",
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
            colors: ['#28C76F', '#7367f0', '#9C27B0']
         }
      }
    return (
        <div>
            <Chart className="rounded-bottom" options={revenueOptions} series={revenue} type="area" width={'100%'} height={'110px'}/>
        </div>
    );
};

export default RevenueGenerated;