const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

//C R U D ****************************************************

// Filtrado de datos --------------------------------

//Filtrado por area
const getExtensionByArea = async (idArea)=>{
  const listExtensions = await prisma.extension
    .findMany({
      where:{
        fk_idArea:idArea
      },
      include:{
        area:{
          select:{
            nameArea: true
          },
        },
      },
      skip:0,
      take:15,
    }); 
  return listExtensions;
};

//Filtrado por puesto 
const getExtensionByPosition = async (position) =>{
  const listExtensions = await prisma.extension
    .findMany({
      where:{
        position:{
          contains:postion
        }
      },
      skip:0,
      take:15,
    });
  return listExtensions;
}

//filtrado por empleado 
const getExtensionByEmployee = async (employee) =>{
  const lisExtensions = await prisma.extension
    .findMany({
      where:{
        nameEmployee:{
          contains:employee
        }
      }
    });
  return listExtensions; 
};

//Insersion de datos ------------------------------
const insertExtension = async(extension) =>{
  const newExtension = await prisma.extension
    .create({data:extension});
  return newExtension;
};

//Actualizacion de datos --------------------------
const updateExtension = async(extension, idExtension)=>{
  const updatedExtension = await prisma.extension
    .update({
      where:{
        id: idExtension
      },
      data:{extension},
    });
  return updatedExtension;
};

//Eliminacion de datos --------------------------
const deleteExtension = async(idExtension)=>{
  const deletedExtension  = await prisma.extension
    .delete({
      where:{
        id: idExtension
      },
    });
  return deletedExtension; 
}

module.exports = {
  getExtensionByArea,
  getExtensionByPosition,
  getExtensionByEmployee,
  insertExtension, 
  updateExtension, 
  deleteExtension
}; 