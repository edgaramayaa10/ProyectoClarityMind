import React, { useState, useEffect } from 'react';
import { BarChart, BarSeries } from '@mui/x-charts';

interface FormularioData {
    respuesta1: number;
    respuesta2: number;
    respuesta3: number;
    respuesta4: number;
    respuesta5: number;
}

interface ChartSeries {
    data: number[];
    label: string;
}

interface ChartData {
    labels: string[];
    series: ChartSeries[];
}

const Grafica = () => {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        series: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/formularios');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: FormularioData[] = await response.json();

                // Procesar datos para el gráfico
                const labels = data.map((_, index) => `Día ${index + 1}`);
                const series1 = data.map(item => item.respuesta1);
                const series2 = data.map(item => item.respuesta2);
                const series3 = data.map(item => item.respuesta3);
                const series4 = data.map(item => item.respuesta4);
                const series5 = data.map(item => item.respuesta5);

                // Actualizar el estado con los datos formateados
                setChartData({
                    labels,
                    series: [
                        { data: series1, label: 'Estado general' },
                        { data: series2, label: 'Ansiedad' },
                        { data: series3, label: 'Estres' },
                        { data: series4, label: 'Tu animo' },
                        { data: series5, label: 'Tiempo dedicado hacia a ti' }
                    ]
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // El array vacío como segundo argumento asegura que el efecto se ejecute solo una vez

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
                    <div className='text-gray-500' style={textStyle}>Aquí puedes ver una gráfica que resume tus respuestas en el control diario, para que puedas ver tus puntos altos o bajos.</div>
                </div>
                <div style={chartContainerStyle}>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: chartData.labels }]}
                        series={chartData.series.map(series => ({
                            ...series,
                            barSpacing: 0.5, // Ajusta el espaciado entre las barras
                        }))}
                        width={700}
                        height={400}
                    />
                </div>
            </div>
        </div>
    );
}

export default Grafica;
