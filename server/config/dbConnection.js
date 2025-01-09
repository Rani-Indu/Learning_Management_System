import mongoose from 'mongoose'

mongoose.set('strictQuery', false);

const dbConnection = async() => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(conn.connection.host);		
	} catch (error) {
		console.log(error.message);
		process.exit(1)
		
		
	}
}



export default dbConnection;