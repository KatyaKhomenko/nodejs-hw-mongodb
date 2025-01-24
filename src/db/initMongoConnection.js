import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Katya:Hdl75aMG4wcBssXG@cluster1.tacbq.mongodb.net/my-contacts?retryWrites=true&w=majority&appName=Cluster1',
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error);
  }
};
