import mongoose from 'mongoose';


mongoose.set('strictQuery', false);

const dbConnection = async () => {
	try {
		const { connection } = await mongoose.connect(process.env.MONGO_URI)
		
		if (connection) {
			console.log(`connected to DB: ${connection.host}`);
		}
// OR

		// const conn = await mongoose.connect(process.env.MONGO_URI)
		// console.log(`connected to DB: ${conn.connection.host}`);
		
		
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
}


export default dbConnection;