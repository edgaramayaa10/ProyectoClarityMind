import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';
import { styled } from '@mui/system';

// Contenedor principal con margen superior para ajustar debajo del navbar
const OuterContainer = styled('div')({
    backgroundColor: '#E0D8C0', // Color del margen lateral
    minHeight: '100vh', // Asegura que el contenedor principal cubra toda la altura de la vista
    padding: '0 20px', // Espacio a la izquierda y derecha
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '100px', // Ajuste del contenido para que no quede oculto bajo el navbar
});

// Contenedor del formulario
const FormContainer = styled('div')({
    backgroundColor: '#FBF5E8',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
});

// Caja de pregunta con estilo
const QuestionBox = styled(Box)({
    backgroundColor: '#FBF5E8',
    border: '2px solid #543310',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '24px',
});

// Radio personalizado
const CustomRadio = styled(Radio)({
    color: '#BFA8A0', // Color marrón clarito para el radio
    '&.Mui-checked': {
        color: '#BFA8A0',
    },
});

// Botón de envío
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
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleChange = (question: string, value: string) => {
        setAnswers(prev => ({ ...prev, [question]: value }));
    };

    return (
        <OuterContainer>
            <FormContainer>
                <form>
                    <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '48px', marginBottom: '48px', color: '#543310' }}>
                        Estado Mental y Emocional
                    </Typography>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cómo te sientes hoy en una escala del 1 al 10?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="feeling"
                                value={answers['¿Cómo te sientes hoy en una escala del 1 al 10?'] || ''}
                                onChange={(e) => handleChange('¿Cómo te sientes hoy en una escala del 1 al 10?', e.target.value)}
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

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué emociones predominan en ti hoy?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="emotions"
                                value={answers['¿Qué emociones predominan en ti hoy?'] || ''}
                                onChange={(e) => handleChange('¿Qué emociones predominan en ti hoy?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Feliz', 'Triste', 'Ansioso', 'Relajado'].map(emotion => (
                                        <FormControlLabel
                                            key={emotion}
                                            value={emotion}
                                            control={<CustomRadio />}
                                            label={emotion}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Hay algo que te preocupa o te causa estrés?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="concerns"
                                value={answers['¿Hay algo que te preocupa o te causa estrés?'] || ''}
                                onChange={(e) => handleChange('¿Hay algo que te preocupa o te causa estrés?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Sí', 'No'].map(concern => (
                                        <FormControlLabel
                                            key={concern}
                                            value={concern}
                                            control={<CustomRadio />}
                                            label={concern}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Has notado algún cambio en tu estado de ánimo desde ayer?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="moodChange"
                                value={answers['¿Has notado algún cambio en tu estado de ánimo desde ayer?'] || ''}
                                onChange={(e) => handleChange('¿Has notado algún cambio en tu estado de ánimo desde ayer?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Sí', 'No'].map(change => (
                                        <FormControlLabel
                                            key={change}
                                            value={change}
                                            control={<CustomRadio />}
                                            label={change}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '48px', marginBottom: '48px', color: '#543310' }}>
                        Experiencia de Meditación
                    </Typography>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cuánto tiempo dedicaste a meditar hoy?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationTime"
                                value={answers['¿Cuánto tiempo dedicaste a meditar hoy?'] || ''}
                                onChange={(e) => handleChange('¿Cuánto tiempo dedicaste a meditar hoy?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Menos de 10 minutos', '10-20 minutos', '21-30 minutos', 'Más de 30 minutos'].map(time => (
                                        <FormControlLabel
                                            key={time}
                                            value={time}
                                            control={<CustomRadio />}
                                            label={time}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué técnica de meditación utilizaste hoy?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationTechnique"
                                value={answers['¿Qué técnica de meditación utilizaste hoy?'] || ''}
                                onChange={(e) => handleChange('¿Qué técnica de meditación utilizaste hoy?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Mindfulness', 'Meditación guiada', 'Visualización', 'Mantras'].map(technique => (
                                        <FormControlLabel
                                            key={technique}
                                            value={technique}
                                            control={<CustomRadio />}
                                            label={technique}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cómo te sentiste antes de empezar la meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="preMeditationFeeling"
                                value={answers['¿Cómo te sentiste antes de empezar la meditación?'] || ''}
                                onChange={(e) => handleChange('¿Cómo te sentiste antes de empezar la meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Relajado', 'Ansioso', 'Cansado', 'Neutro'].map(feeling => (
                                        <FormControlLabel
                                            key={feeling}
                                            value={feeling}
                                            control={<CustomRadio />}
                                            label={feeling}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cómo te sentiste después de meditar?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="postMeditationFeeling"
                                value={answers['¿Cómo te sentiste después de meditar?'] || ''}
                                onChange={(e) => handleChange('¿Cómo te sentiste después de meditar?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Más relajado', 'Menos ansioso', 'Más cansado', 'Igual que antes'].map(feeling => (
                                        <FormControlLabel
                                            key={feeling}
                                            value={feeling}
                                            control={<CustomRadio />}
                                            label={feeling}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Experimentaste alguna dificultad durante la meditación (por ejemplo, distracciones, incomodidad)?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationDifficulties"
                                value={answers['¿Experimentaste alguna dificultad durante la meditación (por ejemplo, distracciones, incomodidad)?'] || ''}
                                onChange={(e) => handleChange('¿Experimentaste alguna dificultad durante la meditación (por ejemplo, distracciones, incomodidad)?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Sí', 'No'].map(difficulty => (
                                        <FormControlLabel
                                            key={difficulty}
                                            value={difficulty}
                                            control={<CustomRadio />}
                                            label={difficulty}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '48px', marginBottom: '48px', color: '#543310' }}>
                        Reflexión y Progreso
                    </Typography>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué pensamientos o sensaciones destacaron durante la meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="thoughtsSensations"
                                value={answers['¿Qué pensamientos o sensaciones destacaron durante la meditación?'] || ''}
                                onChange={(e) => handleChange('¿Qué pensamientos o sensaciones destacaron durante la meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Tranquilidad', 'Concentración', 'Confusión', 'Nada en particular'].map(thought => (
                                        <FormControlLabel
                                            key={thought}
                                            value={thought}
                                            control={<CustomRadio />}
                                            label={thought}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Hubo algún momento en la meditación en el que te sentiste particularmente presente o consciente?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="presentMoments"
                                value={answers['¿Hubo algún momento en la meditación en el que te sentiste particularmente presente o consciente?'] || ''}
                                onChange={(e) => handleChange('¿Hubo algún momento en la meditación en el que te sentiste particularmente presente o consciente?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Sí', 'No'].map(moment => (
                                        <FormControlLabel
                                            key={moment}
                                            value={moment}
                                            control={<CustomRadio />}
                                            label={moment}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué aprendiste hoy sobre ti mismo a través de la meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="selfLearning"
                                value={answers['¿Qué aprendiste hoy sobre ti mismo a través de la meditación?'] || ''}
                                onChange={(e) => handleChange('¿Qué aprendiste hoy sobre ti mismo a través de la meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Mayor autoconocimiento', 'Más paciencia', 'Reconocimiento de patrones', 'Nada nuevo'].map(learning => (
                                        <FormControlLabel
                                            key={learning}
                                            value={learning}
                                            control={<CustomRadio />}
                                            label={learning}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cómo crees que la meditación de hoy te ha afectado en tu vida diaria?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationImpact"
                                value={answers['¿Cómo crees que la meditación de hoy te ha afectado en tu vida diaria?'] || ''}
                                onChange={(e) => handleChange('¿Cómo crees que la meditación de hoy te ha afectado en tu vida diaria?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Mejora en el estado general', 'Beneficios a corto plazo', 'Cambios negativos', 'Sin impacto visible'].map(impact => (
                                        <FormControlLabel
                                            key={impact}
                                            value={impact}
                                            control={<CustomRadio />}
                                            label={impact}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '48px', marginBottom: '48px', color: '#543310' }}>
                        Objetivos y Metas
                    </Typography>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué objetivos te has propuesto para tu práctica de meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationGoals"
                                value={answers['¿Qué objetivos te has propuesto para tu práctica de meditación?'] || ''}
                                onChange={(e) => handleChange('¿Qué objetivos te has propuesto para tu práctica de meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Mejorar concentración', 'Reducir estrés', 'Aumentar la duración', 'Explorar nuevas técnicas'].map(goal => (
                                        <FormControlLabel
                                            key={goal}
                                            value={goal}
                                            control={<CustomRadio />}
                                            label={goal}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué cambios te gustaría implementar en tu rutina de meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="routineChanges"
                                value={answers['¿Qué cambios te gustaría implementar en tu rutina de meditación?'] || ''}
                                onChange={(e) => handleChange('¿Qué cambios te gustaría implementar en tu rutina de meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Aumentar la frecuencia', 'Incorporar nuevas técnicas', 'Crear un ambiente más adecuado', 'No hay cambios planeados'].map(change => (
                                        <FormControlLabel
                                            key={change}
                                            value={change}
                                            control={<CustomRadio />}
                                            label={change}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cómo planeas abordar cualquier desafío que hayas enfrentado durante la meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="challenges"
                                value={answers['¿Cómo planeas abordar cualquier desafío que hayas enfrentado durante la meditación?'] || ''}
                                onChange={(e) => handleChange('¿Cómo planeas abordar cualquier desafío que hayas enfrentado durante la meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Buscar guía externa', 'Modificar mi técnica', 'Practicar más a menudo', 'Aceptar los desafíos'].map(challenge => (
                                        <FormControlLabel
                                            key={challenge}
                                            value={challenge}
                                            control={<CustomRadio />}
                                            label={challenge}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '48px', marginBottom: '48px', color: '#543310' }}>
                        Bienestar General
                    </Typography>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Cómo afecta tu meditación a otras áreas de tu vida (trabajo, relaciones, salud)?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationEffects"
                                value={answers['¿Cómo afecta tu meditación a otras áreas de tu vida (trabajo, relaciones, salud)?'] || ''}
                                onChange={(e) => handleChange('¿Cómo afecta tu meditación a otras áreas de tu vida (trabajo, relaciones, salud)?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Positivamente', 'Negativamente', 'Sin cambios significativos', 'No estoy seguro'].map(effect => (
                                        <FormControlLabel
                                            key={effect}
                                            value={effect}
                                            control={<CustomRadio />}
                                            label={effect}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Has notado algún beneficio específico de tu práctica de meditación en tu vida diaria?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="meditationBenefits"
                                value={answers['¿Has notado algún beneficio específico de tu práctica de meditación en tu vida diaria?'] || ''}
                                onChange={(e) => handleChange('¿Has notado algún beneficio específico de tu práctica de meditación en tu vida diaria?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Mejora en la concentración', 'Reducción del estrés', 'Mayor estabilidad emocional', 'Beneficios no evidentes'].map(benefit => (
                                        <FormControlLabel
                                            key={benefit}
                                            value={benefit}
                                            control={<CustomRadio />}
                                            label={benefit}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Hay algo que te gustaría cambiar en tu entorno para mejorar tu práctica de meditación?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="environmentChanges"
                                value={answers['¿Hay algo que te gustaría cambiar en tu entorno para mejorar tu práctica de meditación?'] || ''}
                                onChange={(e) => handleChange('¿Hay algo que te gustaría cambiar en tu entorno para mejorar tu práctica de meditación?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Crear un espacio más tranquilo', 'Eliminar distracciones', 'Agregar elementos relajantes', 'No hay cambios planeados'].map(change => (
                                        <FormControlLabel
                                            key={change}
                                            value={change}
                                            control={<CustomRadio />}
                                            label={change}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <QuestionBox>
                        <Typography variant="h6" align="center" style={{ color: '#543310' }}>
                            ¿Qué hábitos adicionales te ayudarían a mantener una práctica de meditación más consistente?
                        </Typography>
                        <FormControl fullWidth margin="normal">
                            <RadioGroup
                                name="additionalHabits"
                                value={answers['¿Qué hábitos adicionales te ayudarían a mantener una práctica de meditación más consistente?'] || ''}
                                onChange={(e) => handleChange('¿Qué hábitos adicionales te ayudarían a mantener una práctica de meditación más consistente?', e.target.value)}
                            >
                                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
                                    {['Establecer una rutina diaria', 'Encontrar un grupo de meditación', 'Utilizar recordatorios', 'No hay hábitos adicionales'].map(habit => (
                                        <FormControlLabel
                                            key={habit}
                                            value={habit}
                                            control={<CustomRadio />}
                                            label={habit}
                                            style={{ marginRight: '8px' }}
                                        />
                                    ))}
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </QuestionBox>

                    <SubmitButton type="submit">Enviar</SubmitButton>
                </form>
            </FormContainer>
        </OuterContainer>
    );
};

export default SurveyForm;
