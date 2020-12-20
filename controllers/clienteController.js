const Clientes = require('../models/Clientes');

// agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        // almacenar en la bd
        await cliente.save();
        res.json({mensaje: 'Se agregó un nuevo cliente'});
    } catch (error) {
        // si hay un error console log y next para evitar que la aplicación se detenga
        console.log(error);
        next();
    }
};

// mostrar todos los clientes
exports.mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
};

// mostrar un cliente por ID
exports.mostrarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findById(req.params.idCliente);        
        res.json(cliente);
    } catch (error) {  
        console.log(error);  
        res.json({mensaje: 'El id del cliente ingresado no existe'});
        next();        
    }
};

// actualizar un cliente por ID
exports.actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({_id: req.params.idCliente}, req.body, {
            new: true
        });
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
};

// eliminar un cliente por ID
exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findByIdAndDelete({_id: req.params.idCliente});
        res.json({mensaje: 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};