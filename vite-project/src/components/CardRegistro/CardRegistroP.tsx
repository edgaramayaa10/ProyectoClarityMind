import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CardLogIn: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/auth/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre: name, apellidos: lastName, correo: email, contrasenya: password }),
            });

            if (!response.ok) {
                throw new Error('Error en el registro');
            }

            const data = await response.json();
            console.log('Registro exitoso', data);

            navigate('/'); // Cambia la ruta de navegación según sea necesario

        } catch (error) {
            console.error('Hubo un problema con la solicitud de registro:', error);
            setError('Hubo un problema con la solicitud de registro');
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-24">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Bienvenido a ClarityMind!</h1>
                <h4 className="text-2xl font-bold sm:text-3xl">Registrate y disfruta de sus ventajas</h4>
                <p className="mt-4 text-gray-500"></p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">Nombre</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingrese su nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" className="sr-only">Apellidos</label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingrese sus apellidos"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">Correo</label>
                    <div className="relative">
                        <input
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingrese su correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Contraseña</label>
                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        ¿Ya tienes cuenta?
                        <Link to="/login" className="ml-2 text-blue-500">
                            Inicia sesión
                        </Link>
                    </p>
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CardLogIn;