module.export = {
  PORT: parseInt(process.env.PORT) || 8000,
  HOSTNAME: process.env.HOSTNAME || "0.0.0.0",
  MONGO_URL: process.env.MONGO_URL,
};
