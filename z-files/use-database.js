import { useState, useEffect } from 'react';

const useDatabases = (driver) => {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    const fetchDatabases = async () => {
      const session = driver.session({ database: 'system' });
      try {
        const result = await session.run('SHOW DATABASES');
        setDatabases(result.records.map(record => record.get('name')));
      } catch (error) {
        console.error('Failed to list databases', error);
      } finally {
        session.close();
      }
    };

    fetchDatabases();
  }, [driver]);

  return databases;
};