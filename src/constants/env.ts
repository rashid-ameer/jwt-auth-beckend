function getEnv(key: string, defaultValue?: string) {
  const value = process.env[key] ?? defaultValue;
  if (value === undefined) {
    throw new Error(`Missing environment variable ${value}`);
  }

  return value;
}

export const PORT = getEnv("PORT");
export const NODE_ENV = getEnv("NODE_ENV");
export const MONGODB_URI = getEnv("MONGODB_URI");
