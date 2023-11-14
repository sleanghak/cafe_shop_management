import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    post: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [results] = await con.execute(query, values);
    con.end();
    return results;
  } catch (error) {
    return { error };
  }
}
