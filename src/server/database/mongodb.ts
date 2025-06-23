import type { MongoClientOptions } from 'mongodb';
import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const options: MongoClientOptions = {
	tls: true,
	tlsAllowInvalidCertificates: false,
	tlsAllowInvalidHostnames: false,

	maxPoolSize: 10,
	minPoolSize: 0,
	maxIdleTimeMS: 30000,
	serverSelectionTimeoutMS: 5000,
	socketTimeoutMS: 45000,
	connectTimeoutMS: 10000,

	retryWrites: true,
	retryReads: true,

	compressors: ['zlib'],
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
	const globalWithMongo = global as typeof globalThis & {
		_mongoClientPromise?: Promise<MongoClient>;
	};

	if (!globalWithMongo._mongoClientPromise) {
		client = new MongoClient(uri, options);
		globalWithMongo._mongoClientPromise = client.connect();
	}
	clientPromise = globalWithMongo._mongoClientPromise;
} else {
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

clientPromise.catch(error => {
	console.error('MongoDB connection failed:', error);
});

export default clientPromise;
