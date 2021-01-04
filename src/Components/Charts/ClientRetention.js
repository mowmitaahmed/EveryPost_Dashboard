import React from 'react';
import Chart  from 'react-apexcharts'

const ClientRetention = () => {
    const client = [{
        name: 'New Clients',
        data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
      }, {
        name: 'Retained Clients',
        data: [-144, -155, -141, -167, -122, -143, -158, -107, -126, -131, -140, -131]
      }]
    const clientOptions = {
        // colors: ["#3BD07E"],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#F44336', '#E91E63', '#9C27B0']
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '10%'
          },
        },
        xaxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'April',
            'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'
          ],
        //   borderColor: '#2F3453',
          labels: {
            style: {
                colors: '#c2c6dc',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }
          }
        },
        yaxis: {
          labels: {
            style: {
                colors: '#c2c6dc',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            }
          }
        },
        grid: {
            show: true,
            borderColor: '#2F3453',
            yaxis: {
                lines: {
                    show: true
                }
            } 
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          markers: {
              width: 12,
              height: 12,
              borderRadious: '50%',
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: ['rgb(115, 103, 240)', '#EA5455', '#28C76F'],
              radius: 12,
          },
          labels: {
              colors: '#c2c6dc',
              fontSize: '14px',
          }
        },
        fill: {
          colors: ['rgb(115, 103, 240)', '#EA5455', '#28C76F'],
          opacity: 1
        }
      }
    return (
        <div>
          <Chart options={clientOptions} series={client} type="bar" height={350} />  
        </div>
    );
};

export default ClientRetention;