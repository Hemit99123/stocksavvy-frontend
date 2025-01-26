'use server'

import { cookies } from 'next/headers';

export const setLoadingState = async (value: string) => {
  const cookieStore = cookies();

  (await cookieStore).set('loading_state', value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only for production
    path: '/', // Cookie will be available on the entire site
  });
};

export const getLoadingState = async () => {
  const cookieStore = cookies();
  
  // Retrieve the cookie value
  const loadingState = (await cookieStore).get('loading_state');

  // Return a message or the value of the cookie
  if (loadingState) {
    return loadingState.value;
  } else {
    return null;
  }
};
