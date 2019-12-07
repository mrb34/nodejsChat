const session=require('express-session');
const RedisStore=require('connect-redis')(session);
const redis = require('redis');
const redisClient = redis.createClient(process.env.REDIS_URL);

module.exports= new RedisStore({
url:process.env.REDIS_URL,
client: redisClient
});
