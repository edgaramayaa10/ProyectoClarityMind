import * as React from 'react';
import { BarChart } from '@mui/x-charts';

const Grafica = () => {
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
        marginTop: '100px', // Increase space from the top (below the header)
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
        flex: 1,                // Allow the chart container to take remaining space
        display: 'flex',
        justifyContent: 'center', // Center the chart horizontally
        alignItems: 'center',     // Center the chart vertically
    };

    return (
        <div style={pageStyle}>
            <div style={headerStyle}>
                Encabezado
            </div>
            <div style={mainContentStyle}>
                <div style={sidebarStyle}>
                    <div style={titleStyle}>Aquí verás tu progreso.</div>
                    <div style={textStyle}>Aquí puedes ver una gráfica que resume tus respuestas en el control diario, para que puedas ver tus puntos altos o bajos.</div>
                </div>
                <div style={chartContainerStyle}>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: ['Día 1', 'Día 2', 'Día 3'] }]}
                        series={[
                            { data: [6, 8, 7] }, 
                            { data: [4, 9, 5] }, 
                            { data: [7, 6, 10] } 
                        ]}
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}

export default Grafica;
