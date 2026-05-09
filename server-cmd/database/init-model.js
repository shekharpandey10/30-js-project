import createEmpModel from "../model/empSchema.js";
let Employee = null
const initModels = async (sequelize) => {
    Employee = await createEmpModel(sequelize)

    sequelize.sync({ alter: true })
    console.log('sync successfully')
}

export default initModels
export {
    Employee
}