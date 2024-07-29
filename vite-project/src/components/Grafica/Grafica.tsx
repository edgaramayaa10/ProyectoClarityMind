import * as React from 'react';
import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts';

interface ChartData {
    day: string;
    series1: number;
    series2: number;
    series3: number;
}

const Grafica = () => {
    const [chartData, setChartData] = useState<{
        labels: string[];
        series: { data: number[] }[];
    }>({
        labels: [],
        series: []
    });

    useEffect(() => {
        fetch('/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data: ChartData[]) => {
                console.log('Datos recibidos:', data); // Verifica los datos

                if (data.length === 0) {
                    console.error('No se recibieron datos');
                    return;
                }

                const labels = data.map((item: ChartData) => item.day);
                const series1 = data.map((item: ChartData) => item.series1);
                const series2 = data.map((item: ChartData) => item.series2);
                const series3 = data.map((item: ChartData) => item.series3);

                console.log('Labels:', labels);
                console.log('Series1:', series1);
                console.log('Series2:', series2);
                console.log('Series3:', series3);

                setChartData({
                    labels,
                    series: [
                        { data: series1 },
                        { data: series2 },
                        { data: series3 }
                    ]
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const pageStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
    };

    const headerStyle: React.CSSProperties = {
        backgroundColor: '#f8f9fa',
        padding: '10px',
        textAlign: 'center',
        borderBottom: '1px solid #dee2e6',
    };

    const mainContentStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        marginTop: '100px',
    };

    const sidebarStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: '20px',
        width: '200px',
    };

    const titleStyle: React.CSSProperties = {
        marginBottom: '10px',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const textStyle: React.CSSProperties = {
        fontSize: '18px',
    };

    const chartContainerStyle: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={pageStyle}>
            <div style={headerStyle}>
                Encabezado
            </div>
            <div style={mainContentStyle}>
                <div style={sidebarStyle}>
                    <div className='text-[#045346]' style={titleStyle}>Aquí verás tu progreso.</div>
                    <div  className='text-gray-500' style={textStyle}>Aquí puedes ver una gráfica que resume tus respuestas en el control diario, para que puedas ver tus puntos altos o bajos.</div>
                </div>
                <div style={chartContainerStyle}>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: chartData.labels }]}
                        series={chartData.series}
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}

export default Grafica;
