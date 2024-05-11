const useTransaction = (driver) => {
    const [state, setState] = useState({ loading: false, error: null });
  
    const runTransaction = async (cypher, params) => {
      setState({ loading: true, error: null });
      const session = driver.session();
      try {
        await session.writeTransaction(tx => tx.run(cypher, params));
        // Transaction successful
      } catch (error) {
        setState({ loading: false, error });
      } finally {
        session.close();
      }
    };
  
    return { ...state, runTransaction };
  };