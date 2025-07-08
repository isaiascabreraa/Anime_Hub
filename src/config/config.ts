
import { Pool } from 'pg'
const { DATABASE_URL } = process.env

const pool = new Pool({ connectionString: DATABASE_URL })

pool.connect((error, client, release) => {
  if (error) {
    console.error('No se pudo conectar', error)
  } else {
    console.log('Conexión exitosa')
    release()
  }
})

module.exports = { conn: pool }
