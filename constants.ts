export const EXPRESS_API_URL = 'https://express.heartrails.com/api/json';
export const VERCEL_URL = process.env['NEXT_PUBLIC_VERCEL_URL'];
export const MY_APP_URL = VERCEL_URL ? `https://${VERCEL_URL}` : 'http://localhost:3000';
