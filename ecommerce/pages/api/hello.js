// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../utils/db'

//Probar mi conexión a la base de datos
export default async function handler(req, res) {
  await db.connect()
  await db.disconnect()
  res.status(200).json({ name: 'Devf Prueba 😀', descriptiion: 'probando la conexión' })
}
