export const prerender = false;

import type { APIRoute } from 'astro';
import { pick } from 'accept-language-parser';

export const GET: APIRoute = ({ request, redirect }) => {
  const { headers } = request;
  const acceptLanguage = headers.get('accept-language') || 'en';
  const userLocale = pick(['nl', 'en'], acceptLanguage);

  return redirect(`/${userLocale}/`);
};
