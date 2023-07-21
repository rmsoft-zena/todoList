import { MongoClient } from "mongodb";

declare global {
  const _mongoClientPromise: Promise<MongoClient>;
}

declare global {
  const mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}
