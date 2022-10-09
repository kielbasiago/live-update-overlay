export const useEnv = () => {
  return {
    DISCORD_CLIENT_ID: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    DISCORD_AUTH_REDIRECT_URI: process.env.NEXT_PUBLIC_DISCORD_AUTH_REDIRECT_URI
  } as const;
};
