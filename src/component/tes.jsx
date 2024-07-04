import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import './SpeedMeter.css';

const SpeedMeter = (props) => {
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
                            color: '#FF0000' // Red color
                        },
                        progress: {
                            show: true,
                            width: 30
                        },
                        pointer: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                width: 20,
                                color: [[1, '#151a4c']] // Black color
                            }
                        },
                        axisTick: {
                            distance: -45,
                            splitNumber: 5,
                            lineStyle: {
                                width: 2,
                                color: 'white' // Red color
                            }
                        },
                        splitLine: {
                            distance: -52,
                            length: 14,
                            lineStyle: {
                                width: 3,
                                // color: '#FF0000' // Red color
                            }
                        },
                        axisLabel: {
                            distance: -20,
                            color: '#FF0000', // Red color
                            fontSize: 20
                        },
                        anchor: {
                            show: false
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            valueAnimation: true,
                            width: '60%',
                            lineHeight: 40,
                            borderRadius: 8,
                            offsetCenter: [0, '-15%'],
                            fontSize: 60,
                            fontWeight: 'bolder',
                            formatter: '{value} °C',
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
                            width: 8
                        },
                        pointer: {
                            show: false
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
                const random = +(Math.random() * 120).toFixed(2);
                myChartRef.current.setOption({
                    series: [
                        {
                            data: [
                                {
                                    value: random
                                }
                            ]
                        },
                        {
                            data: [
                                {
                                    value: random
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
            <div id="chart-container" ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default SpeedMeter;
