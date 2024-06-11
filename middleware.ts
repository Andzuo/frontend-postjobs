import { NextResponse } from 'next/server';

const publicRoutes = [
    '/login',
    '/register',
    '/',
    '/about'
];

export function middleware(req: { nextUrl: { pathname: any; }; cookies: { get: (arg0: string) => any; }; }) {
    const { pathname } = req.nextUrl;

    // Permitir acesso a rotas públicas
    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    // Verificar ID do usuário para rotas protegidas
    const userId = req.cookies.get('userId'); // Supondo que o ID do usuário está nos cookies

    if (!userId) {
        // Se não houver ID, redirecionar para a página de login
        return NextResponse.redirect('/login');
    }

    // Se o ID for válido, permitir acesso
    return NextResponse.next();
}