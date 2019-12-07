const redis = require('redis');
const getClient=()=>{
   return redis.createClient({
    url:process.env.REDIS_URL
  });
};
module.exports.getClient=getClient;
