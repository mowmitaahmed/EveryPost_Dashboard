import React from 'react';
import Chart  from 'react-apexcharts'

const OrdersRecieved = () => {
    const orders=  [{
          name: 'Orders',
          data: [10, 15, 8, 15, 7, 12, 8]
        }]
        const orderOptions = {
            colors: ["#FF9F43"],
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
                colors: ['#292D5A', '#7367f0', '#7367f0'],
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
                          color: "#7F5946",
                          opacity: 1
                        },
                        {
                          offset: 50,
                          color: "#545165",
                          opacity: 1
                        },
                        {
                          offset: 100,
                          color: "#4C4D66",
                          opacity: 1
                        }
                      ]
                }
              },
            markers: {
                colors: ['#FF9F43', '#7367f0', '#9C27B0']
             }
          }
    
    return (
        <div>
            <Chart className="rounded-bottom" options={orderOptions} series={orders} type="area" width={'100%'} height={'110px'}/>
        </div>
    );
};

export default OrdersRecieved;