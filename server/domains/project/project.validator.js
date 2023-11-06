import * as Yup from 'yup';

// Creando un esquema de validacion
const ProjectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere un nombre del proyecto'),
  description: Yup.string()
    .max(500, 'La descripcion no debe tener mas de 500 caracteres')
    .required('Se requiere una descripcion del proyecto'),
});

// Middleware de extraccion
const getProject = (req) => {
  // Extrayendo datos de la peticion
  const { name, description } = req.body;
  return {
    name,
    description,
  };
};

export default {
  ProjectSchema,
  getProject,
};
