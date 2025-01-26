'use server'

import { cookies } from 'next/headers';

export const setLoadingState = async (value: string) => {
  const cookieStore = cookies();

  (await cookieStore).set('number_visited', value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only for production
    path: '/', // Cookie will be available on the entire site
  });
};

export const getLoadingState = async () => {
  const cookieStore = cookies();
  
  // Retrieve the cookie value
  const loadingState = (await cookieStore).get('number_visited');

  // Return a message or the value of the cookie
  if (loadingState) {
    return loadingState.value;
  } else {
    return null;
  }
};
