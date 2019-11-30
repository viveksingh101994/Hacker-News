export const configuration = {
  dbConnectionString:
    process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/hacker-news',
  port: process.env.PORT || '3000',
  envMode: process.env.NODE_ENV || 'dev'
};
