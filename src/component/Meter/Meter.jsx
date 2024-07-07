import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import './Meter.css';

const Meter = (props) => {
    const chartRef = useRef(null);
    const myChartRef = useRef(null);

    useEffect(() => {
        const dom = chartRef.current;
        if (dom) {
            myChartRef.current = echarts.init(dom, null, {
                renderer: 'canvas',
                useDirtyRect: false
            });

            const option = {
                series: [
                    {
                        type: 'gauge',
                        center: ['50%', '60%'],
                        startAngle: 200,
                        endAngle: -20,
                        min: 0,
                        max: 120,
                        splitNumber: 12,
                        itemStyle: {
                            color: 'white' // Red color
                        },
                        progress: {
                            show: true,
                            width: 10
                        },
                        pointer: {
                            show: true,
                            itemStyle: {
                                color: '#000000' // Black color for pointer
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                width: 10,
                                color: [[1, '#151a4c']] // Black color
                            }
                        },
                        // axisTick: {
                        //     distance: 15,
                        //     splitNumber: 5,
                        //     lineStyle: {
                        //         width: 2,
                        //         color: 'white' // Red color
                        //     }
                        // },
                        splitLine: {
                            distance: -10,
                            length: 5,
                            lineStyle: {
                                width: 1,
                                color: '#151a4c' // Red color
                            }
                        },
                        axisLabel: {
                            distance: -20,
                            color: 'white', // Red color
                            fontSize: 10
                        },
                        anchor: {
                            show: false
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            valueAnimation: true,
                            width: '30%',
                            lineHeight: 20,
                            borderRadius: 8,
                            offsetCenter: [0, '45%'],
                            fontSize: 17,
                            fontWeight: '400',
                            formatter: '{value} °mbps',
                            color: 'white' // Red color
                        },
                        data: [
                            {
                                value: props.value
                            }
                        ]
                    },
                    {
                        type: 'gauge',
                        center: ['50%', '60%'],
                        startAngle: 200,
                        endAngle: -20,
                        min: 0,
                        max: 120,
                        itemStyle: {
                            color: '#FF0000' // Red color
                        },
                        progress: {
                            show: true,
                            width: 10
                        },
                        pointer: {
                            show: true
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        data: [
                            {
                                value: props.value
                            }
                        ]
                    }
                ]
            };

            myChartRef.current.setOption(option);

            const resizeChart = () => {
                myChartRef.current.resize();
            };

            window.addEventListener('resize', resizeChart);

            const interval = setInterval(() => {
                myChartRef.current.setOption({
                    series: [
                        {
                            data: [
                                {
                                    value: props.value
                                }
                            ]
                        }

                    ]
                });
            }, 2000);

            return () => {
                clearInterval(interval);
                window.removeEventListener('resize', resizeChart);
                myChartRef.current.dispose();
            };
        }
    }, [props.value]);

    return (
        <div className="gauge-container">
            <div id="chart-container" ref={chartRef} className="__meter" ></div>
        </div>
    );
};

export default Meter;
