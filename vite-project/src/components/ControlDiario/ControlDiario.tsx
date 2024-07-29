import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';
import { styled } from '@mui/system';

// Estilos del contenedor principal
const OuterContainer = styled('div')({
    backgroundColor: '#E0D8C0',
    minHeight: '100vh',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '100px',
});

// Estilos del contenedor del formulario
const FormContainer = styled('div')({
    backgroundColor: '#FBF5E8',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
});

// Estilos de la caja de preguntas
const QuestionBox = styled(Box)({
    backgroundColor: '#FBF5E8',
    border: '2px solid #543310',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '24px',
});

// Estilos del radio personalizado
const CustomRadio = styled(Radio)({
    color: '#BFA8A0',
    '&.Mui-checked': {
        color: '#BFA8A0',
    },
});

// Estilos del botón de envío
const SubmitButton = styled(Button)({
    backgroundColor: '#543310',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#3c2d1f',
    },
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
});

const SurveyForm: React.FC = () => {
    // Estado para almacenar las respuestas del formulario
    const [answers, setAnswers] = useState<Record<string, string>>({
        'Cómo te sientes en general en una escala del 1 al 10:': '',
        'Ansiedad en una escala del 1 al 10:': '',
        'Estrés en una escala del 1 al 10:': '',
        'Tu ánimo en una escala del 1 al 10:': '',
        'Que tiempo te has dedicado a ti mism@ 1-10, 1 nada / 10 1h+:': ''
    });

    // Función para manejar el cambio en las respuestas
    const handleChange = (question: string, value: string) => {
        setAnswers(prev => ({ ...prev, [question]: value }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            console.log('Datos enviados:', {
                respuesta1: answers['Cómo te sientes en general en una escala del 1 al 10:'],
                respuesta2: answers['Ansiedad en una escala del 1 al 10:'],
                respuesta3: answers['Estrés en una escala del 1 al 10:'],
                respuesta4: answers['Tu ánimo en una escala del 1 al 10:'],
                respuesta5: answers['Que tiempo te has dedicado a ti mism@ 1-10, 1 nada / 10 1h+:']
            });
    
            const response = await fetch('http://localhost:8080/api/formularios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    respuesta1: answers['Cómo te sientes en general en una escala del 1 al 10:'],
                    respuesta2: answers['Ansiedad en una escala del 1 al 10:'],
                    respuesta3: answers['Estrés en una escala del 1 al 10:'],
                    respuesta4: answers['Tu ánimo en una escala del 1 al 10:'],
                    respuesta5: answers['Que tiempo te has dedicado a ti mism@ 1-10, 1 nada / 10 1h+:']
                }),
            });
    
            if (response.ok) {
                alert('Formulario enviado exitosamente');
            } else {
                alert('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el formulario');
        }
    };

    return (
        <OuterContainer>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '48px', marginBottom: '48px', color: '#543310' }}>
                        Estado Mental y Emocional
                    </Typography>

                    {/* Pregunta 1 */}
                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            Cómo te sientes en general en una escala del 1 al 10:
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="respuesta1"
                                value={answers['Cómo te sientes en general en una escala del 1 al 10:'] || ''}
                                onChange={(e) => handleChange('Cómo te sientes en general en una escala del 1 al 10:', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                                        <FormControlLabel
                                            key={number}
                                            value={number.toString()}
                                            control={<CustomRadio />}
                                            label={number.toString()}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    {/* Pregunta 2 */}
                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            Ansiedad en una escala del 1 al 10:
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="respuesta2"
                                value={answers['Ansiedad en una escala del 1 al 10:'] || ''}
                                onChange={(e) => handleChange('Ansiedad en una escala del 1 al 10:', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                                        <FormControlLabel
                                            key={number}
                                            value={number.toString()}
                                            control={<CustomRadio />}
                                            label={number.toString()}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    {/* Pregunta 3 */}
                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            Estrés en una escala del 1 al 10:
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="respuesta3"
                                value={answers['Estrés en una escala del 1 al 10:'] || ''}
                                onChange={(e) => handleChange('Estrés en una escala del 1 al 10:', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                                        <FormControlLabel
                                            key={number}
                                            value={number.toString()}
                                            control={<CustomRadio />}
                                            label={number.toString()}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    {/* Pregunta 4 */}
                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            Tu ánimo en una escala del 1 al 10:
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="respuesta4"
                                value={answers['Tu ánimo en una escala del 1 al 10:'] || ''}
                                onChange={(e) => handleChange('Tu ánimo en una escala del 1 al 10:', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                                        <FormControlLabel
                                            key={number}
                                            value={number.toString()}
                                            control={<CustomRadio />}
                                            label={number.toString()}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    {/* Pregunta 5 */}
                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            Que tiempo te has dedicado a ti mism@ 1-10, 1 nada / 10 1h+:
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="respuesta5"
                                value={answers['Que tiempo te has dedicado a ti mism@ 1-10, 1 nada / 10 1h+:'] || ''}
                                onChange={(e) => handleChange('Que tiempo te has dedicado a ti mism@ 1-10, 1 nada / 10 1h+:', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                                        <FormControlLabel
                                            key={number}
                                            value={number.toString()}
                                            control={<CustomRadio />}
                                            label={number.toString()}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    {/* Botón de envío */}
                    <SubmitButton type="submit">Enviar</SubmitButton>
                </form>
            </FormContainer>
        </OuterContainer>
    );
};

export default SurveyForm;
