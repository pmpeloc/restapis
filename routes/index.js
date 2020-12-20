const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productosController = require('../controllers/productosController');
const pedidosController = require('../controllers/pedidosController');

module.exports = function() {
    /** CLIENTES **/
    // Agregar un nuevo cliente
    router.post('/clientes', clienteController.nuevoCliente);

    // Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    // Muestra un cliente en específico
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    // Actualizar un cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    // Eliminar un cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    /** PRODUCTOS **/
    // Agregar un nuevo producto
    router.post('/productos', 
        productosController.subirArchivo,
        productosController.nuevoProducto
    );

    // Muestra todos los productos
    router.get('/productos', productosController.mostrarProductos);

    // Muestra un producto en específico
    router.get('/productos/:idProducto', productosController.mostrarProducto);

    // Actualizar un producto
    router.put('/productos/:idProducto',
        productosController.subirArchivo,
        productosController.actualizarProducto
    );

    // Eliminar un producto
    router.delete('/productos/:idProducto', productosController.eliminarProducto);

    /** PEDIDOS **/
    // Agregar un nuevo pedido
    router.post('/pedidos', pedidosController.nuevoPedido);

    // Muestra todos los pedidos
    router.get('/pedidos', pedidosController.mostrarPedidos);

    // Muestra un pedido por ID
    router.get('/pedidos/:idPedido', pedidosController.mostrarPedido);

    // Actualizar un pedido por ID
    router.put('/pedidos/:idPedido', pedidosController.actualizarPedido);

    // Eliminar un pedido por ID
    router.delete('/pedidos/:idPedido', pedidosController.eliminarPedido);

    return router;
};