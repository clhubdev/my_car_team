import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// jose à la place de jsonwebtoken car le runtime Edge ne supporte pas le module crypto de jwt. 
import { jwtVerify } from 'jose';

export default async function middleware(req) {
  console.log('Middleware exécuté pour la route:', req.nextUrl.pathname);

  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith('/app');

  let session = null;
  const token = (await cookies()).get('token')?.value;
  console.log('Token:', token);

  try {
    if (token) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
      session = payload;

      console.log('Session:', session);
    }
  } catch (error) {
    session = null;
    console.error('Erreur de vérification du token:', error);
  }

  if (isProtectedRoute && !session) {
    console.log('Redirection vers /login');
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}