
import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardLogIn: React.FC = () => {
    const [correo, setCorreo] = useState<string>('');
    const [contrasenya, setContrasenya] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, contrasenya}),
                credentials: 'include', // Incluye credenciales como cookies si se requiere
            });
    
            if (response.ok) {
                console.log('Inicio de sesión exitoso');
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/'); // Redirige a la página principal
            } else {
                throw new Error('Credenciales incorrectas o error en el servidor');
            }
        } catch (error) {
            console.error('Hubo un problema con la solicitud de inicio de sesión:', error);
            setError('Credenciales incorrectas o error en el servidor');
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-24">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-3xl font-bold text-[#045346]">Bienvenido a ClarityMind!</h1>
                <p className="mt-4 text-[#D49F11]">
                    Inicia sesión para disfrutar de todas las ventajas.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="relative">
                        <input
                            id="correo"
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingrese su correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Contraseña</label>
                    <div className="relative">
                        <input
                            id="password"
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingrese su contraseña"
                            value={contrasenya}
                            onChange={(e) => setContrasenya(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className="flex items-center justify-between">
                    <p className="text-sm text-[#045346]">
                        ¿No tienes cuenta?
                        <Link to="/login/registrate" className="ml-2 text-blue-500">
                            Regístrate
                        </Link>
                    </p>

                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-[#FCD961] px-5 py-3 text-sm font-medium text-[#045346]"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CardLogIn;