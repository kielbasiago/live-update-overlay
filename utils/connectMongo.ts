import mongoose from 'mongoose';

const connectMongo = async () => {
  const uri = process.env.MONGO_URI;

  console.log('URI', uri);

  if (!uri) {
    throw Error('MONGO_URI must be defined');
  }

  console.log(uri);

  return mongoose.connect(uri);
};

export default connectMongo;
