import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ActivarCuenta: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const activarCuenta = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/auth/activar/${token}`, {
                    method: 'POST',
                });
        
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error en la activación');
                }
        
                const data = await response.json();
                setMessage(data.message);
                setError(null);
            } catch (error) {
                setError('Hubo un problema con la activación de cuenta: ' + error);
                setMessage(null);
            }
        };

        activarCuenta();
    }, [token]);

    return (
        <div>
            <h1>Activación de Cuenta</h1>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ActivarCuenta;