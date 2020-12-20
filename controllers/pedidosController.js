const Pedidos = require('../models/Pedidos');

// crear un nuevo pedido
exports.nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({mensaje: 'Se agregó un nuevo pedido'});
    } catch (error) {
        console.log(error);
        next();
    }
};

// mostrar todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
};

// mostrar un pedido por ID
exports.mostrarPedido = async (req, res, next) => {
    try {
        const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });      
        res.json(pedido);
    } catch (error) {  
        console.log(error);  
        res.json({mensaje: 'El id del pedido ingresado no existe'});
        next();        
    }
};

// actualizar un pedido por ID
exports.actualizarPedido = async (req, res, next) => {
    try {
        try {
            const pedido = await Pedidos.findOneAndUpdate({_id: req.params.idPedido}, req.body, {
                new: true
            }).populate('cliente').populate({
                path: 'pedido.producto',
                model: 'Productos'
            });
            res.json(pedido);
        } catch (error) {
            console.log(error);
            next();
        }
    } catch (error) {
        console.log(error);
        next();
    }
};

// eliminar un producto por ID
exports.eliminarPedido = async (req, res, next) => {
    try {
        await Pedidos.findByIdAndDelete({_id: req.params.idPedido});
        res.json({mensaje: 'El pedido se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};