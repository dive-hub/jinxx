var neo4j = require('neo4j-driver');

(async () => {
  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = "neo4j+s://38626270.databases.neo4j.io";
  const USER = "neo4j";
  const PASSWORD = "norTk7knkhQPNkYGcHG1IfKrO1_iciGb35RR_ImLP5k";
  let driver

  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
    const serverInfo = await driver.getServerInfo()
    console.log('Connection established')
    console.log(serverInfo)
    return driver;
  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
})();