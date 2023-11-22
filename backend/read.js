const { getClient } = require('./get-client');

(async () => {
  const client = await getClient();

  const entries = await client.query('SELECT * FROM message;');
  console.log(`Database entrie: ${entries.rowCount} row(s)`);
  console.log(Object.keys(entries.rows?.[0]).join('\t'));
  console.log(`${entries.rows.map((r) => Object.values(r).join('\t')).join('\n')}`);
  await client.end();
})();