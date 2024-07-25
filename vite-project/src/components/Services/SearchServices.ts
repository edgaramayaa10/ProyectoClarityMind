// src/services/searchService.ts
// Shamar a la qua qua quary
export const data = [
    { id: 1, title: 'Meditación guiada para principiantes', description: 'Una sesión de meditación guiada ideal para los que recién comienzan.', url: '/meditacion' },
    { id: 2, title: 'Control diario de hábitos', description: 'Una herramienta para controlar y mejorar tus hábitos diarios.', url: '/control' },
    { id: 3, title: 'Técnicas avanzadas de meditación', description: 'Explora técnicas avanzadas para profundizar tu práctica de meditación.', url: '/meditacion/avanzado' },
    { id: 4, title: 'Perfil de usuario', description: 'Gestiona tu perfil y preferencias en la plataforma.', url: '/perfil' },
    { id: 5, title: 'Cerrar sesión', description: 'Opción para cerrar sesión de tu cuenta de usuario.', url: '/logout' }
];

const normalizeText = (text: string): string => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const search = async (query: string): Promise<any[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const normalizedQuery = normalizeText(query);
            const results = data.filter(item =>
                normalizeText(item.title).includes(normalizedQuery) ||
                normalizeText(item.description).includes(normalizedQuery)
            );
            resolve(results);
        }, 1000);
    });
};

export default { search };

