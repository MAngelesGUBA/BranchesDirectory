const joi = require('joi');

const schema = joi.object({
  nameEmployee: joi.string()
    .trim()
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{2,50}$/)
    .required()
    .messages({
      'string.pattern.base': 'El nombre del empleado solo debe contener letras.',
      'any.required':'El nombre del empleado es obligatorio.'
    }),
  area: joi.string()
    .trim()
    .required().message('El campo, área, es obligatorio'),
  position: joi.string()
    .trim()
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{2,35}$/)
    .required()
    .messages({
      'string.pattern.base':'La posicion solo debe contener letras',
      'any.required':'El campo, posicion, es obligatorio'
    }),
  extension: joi.number()
    .integer()
    .min(1000)
    .max(699)
    .required()
    .messages({
      'number.integer':'La extensión dee ser un numero entero',
      'number.min': 'La extensión debe ser mayor o igual a 1000',
      'number.max':'La extensión debe ser menor o igual a 6000',
      'any.required':'El campo, extensión, es obligatorio'
    })
})

const searchSchema = joi.object({
  'searchField': joi.string()
    .trim()
    .required()
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{2,50}$/)
    .messages({
      'any.required': 'Para realizar una busqueda, rellene el campo soliciado'
    })
})

module.exports = {
  schema,
  searchSchema
};