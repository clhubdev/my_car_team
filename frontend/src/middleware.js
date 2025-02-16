import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

// Middleware s'exécutant dans un env edge car cookie en httpOnly
export default async function middleware(req) {

  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith('/app');

  let session = null;
  const token = (await cookies()).get('token')?.value;

  try {
    if (token) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);
      session = payload;
    }
  } catch (error) {
    session = null;
    console.error('Erreur de vérification du token:', error);
  }

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}