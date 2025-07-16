export const tokens = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
} as const;

export type TToken = (typeof tokens)[keyof typeof tokens];
