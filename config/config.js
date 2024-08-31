require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

// const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb+srv://aasthasinghclg4:Aastha123@clustermed.5apg3ff.mongodb.net/');
// const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb+srv://AasthaSingh:Aastha123@cluster0.ghuij.mongodb.net');
const MongodbUrl = 'mongodb+srv://AasthaSingh:Aastha123@cluster0.ghuij.mongodb.net/Medidb';

module.exports = {
  Port: Port,
  MongodbUrl: MongodbUrl
}