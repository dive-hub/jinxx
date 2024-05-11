const useLazyReadCypher = (driver) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const runQuery = async (cypher, params) => {
      setLoading(true);
      const session = driver.session();
      try {
        const { records } = await session.readTransaction(tx => tx.run(cypher, params));
        setResult(records);
      } catch (error) {
        console.error('Read query failed', error);
      } finally {
        setLoading(false);
        session.close();
      }
    };
  
    return { result, loading, runQuery };
  };
  
  const useLazyWriteCypher = (driver) => {
    // Similar to useLazyReadCypher but uses writeTransaction
  };