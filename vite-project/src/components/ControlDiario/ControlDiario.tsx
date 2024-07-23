import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#045346',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        '&.Mui-focused': {
                            color: '#045346',
                        },
                    },
                },
            },
        },
    },
});

export function ControlDiario() {
    // Estado para los campos del formulario
    const [formData, setFormData] = React.useState({
        estadoAnimo: '',
        emociones: '',
        preocupaciones: '',
        cambiosEstado: '',
        tiempoMeditacion: '',
        tecnicaMeditacion: '',
        estadoAntes: '',
        estadoDespues: '',
        dificultades: '',
        pensamientos: '',
        momentosPresencia: '',
        aprendizaje: '',
        efectoVidaDiaria: '',
        objetivos: '',
        cambios: '',
        desafios: '',
        impacto: '',
        beneficios: '',
        entorno: '',
        habitos: ''
    });

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log('Datos del formulario:', formData);
    };

    const opciones = [
        { value: 'respuesta1', label: 'Respuesta 1' },
        { value: 'respuesta2', label: 'Respuesta 2' },
        { value: 'respuesta3', label: 'Respuesta 3' },
        { value: 'respuesta4', label: 'Respuesta 4' }
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ bgcolor: '#FBF5E8', height: 'auto', p: 4, mt: 10, width: '100%', paddingTop: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Formulario de Control Diario de Meditación
                </Typography>
                <form onSubmit={handleSubmit}>
                    {/* Estado Mental y Emocional */}
                    <Typography variant="h6" gutterBottom>
                        Estado Mental y Emocional
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cómo te sientes hoy en una escala del 1 al 10?"
                            name="estadoAnimo"
                            value={formData.estadoAnimo}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué emociones predominan en ti hoy?"
                            name="emociones"
                            value={formData.emociones}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Hay algo que te preocupa o te causa estrés?"
                            name="preocupaciones"
                            value={formData.preocupaciones}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Has notado algún cambio en tu estado de ánimo desde ayer?"
                            name="cambiosEstado"
                            value={formData.cambiosEstado}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    {/* Experiencia de Meditación */}
                    <Typography variant="h6" gutterBottom>
                        Experiencia de Meditación
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cuánto tiempo dedicaste a meditar hoy?"
                            name="tiempoMeditacion"
                            value={formData.tiempoMeditacion}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué técnica de meditación utilizaste hoy?"
                            name="tecnicaMeditacion"
                            value={formData.tecnicaMeditacion}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cómo te sentiste antes de empezar la meditación?"
                            name="estadoAntes"
                            value={formData.estadoAntes}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cómo te sentiste después de meditar?"
                            name="estadoDespues"
                            value={formData.estadoDespues}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Experimentaste alguna dificultad durante la meditación (por ejemplo, distracciones, incomodidad)?"
                            name="dificultades"
                            value={formData.dificultades}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    {/* Reflexión y Progreso */}
                    <Typography variant="h6" gutterBottom>
                        Reflexión y Progreso
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué pensamientos o sensaciones destacaron durante la meditación?"
                            name="pensamientos"
                            value={formData.pensamientos}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Hubo algún momento en la meditación en el que te sentiste particularmente presente o consciente?"
                            name="momentosPresencia"
                            value={formData.momentosPresencia}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué aprendiste hoy sobre ti mismo a través de la meditación?"
                            name="aprendizaje"
                            value={formData.aprendizaje}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cómo crees que la meditación de hoy te ha afectado en tu vida diaria?"
                            name="efectoVidaDiaria"
                            value={formData.efectoVidaDiaria}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    {/* Objetivos y Metas */}
                    <Typography variant="h6" gutterBottom>
                        Objetivos y Metas
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué objetivos te has propuesto para tu práctica de meditación?"
                            name="objetivos"
                            value={formData.objetivos}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué cambios te gustaría implementar en tu rutina de meditación?"
                            name="cambios"
                            value={formData.cambios}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cómo planeas abordar cualquier desafío que hayas enfrentado durante la meditación?"
                            name="desafios"
                            value={formData.desafios}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                    {/* Bienestar General */}
                    <Typography variant="h6" gutterBottom>
                        Bienestar General
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Cómo afecta tu meditación a otras áreas de tu vida (trabajo, relaciones, salud)?"
                            name="impacto"
                            value={formData.impacto}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Has notado algún beneficio específico de tu práctica de meditación en tu vida diaria?"
                            name="beneficios"
                            value={formData.beneficios}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Hay algo que te gustaría cambiar en tu entorno para mejorar tu práctica de meditación?"
                            name="entorno"
                            value={formData.entorno}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            select
                            label="¿Qué hábitos adicionales te ayudarían a mantener una práctica de meditación más consistente?"
                            name="habitos"
                            value={formData.habitos}
                            onChange={handleChange}
                            required
                        >
                            {opciones.map((opcion) => (
                                <MenuItem key={opcion.value} value={opcion.value}>
                                    {opcion.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Button variant="contained" sx={{ bgcolor: '#543310' }} type="submit">
                        Enviar
                    </Button>
                </form>
            </Box>
        </ThemeProvider>
    );
}

export default ControlDiario;
