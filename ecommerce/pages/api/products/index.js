import { createRouter } from 'next-connect'
import db from '../../../utils/db';
import Product from '../../../models/Products';

const router = createRouter();

router
  .get(async(req, res) => {
    await db.connect() // conectar a la base de datos
    const products = await Product.find({})
    // console.log(products)
    await db.disconnect(products)// desconecta de la base de datos
    res.send(products)
  })

  //  manejador de errores y rutas no encontradas
export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack); //imprimo el error en la consola
    res.status(err.statusCode || 500).end(err.message); // envia una respuesta de error
  },
  onNoMatch: (req, res) => {
    // enviar una respuesta 404 si la ruta no coincide
    res.status(404).end('Page is not Found!')
  }
});