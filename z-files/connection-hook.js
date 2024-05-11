import { useState } from 'react';
import { driver } from './neo4jDriver';

const useConnection = () => {
  const [connection, setConnection] = useState(null);

  const connect = async (credentials) => {
    try {
      const driverInstance = driver(credentials);
      setConnection(driverInstance);
    } catch (error) {
      console.error('Connection failed', error);
    }
  };

  return { connection, connect };
};