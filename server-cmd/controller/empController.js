import { where } from "sequelize"
import { Employee } from "../database/init-model.js"

const empControllerList = async (req, res) => {
    try {
        const employees = await Employee.findAll()
        if (employees.lenght === 0) {
            return res.status(200).json({
                success: true,
                msg: "No Data found",
                data: employees
            })
        }
        return res.status(200).json({
            success: true,
            msg: "Data found",
            data: employees
        })
    } catch (error) {

        return res.status(500).json({

            success: false,
            msg: error.message
        })
    }
}
const empControllerCreate = async (req, res) => {
    try {
        const { name, email, designation, empId } = req.body
        console.log(req.body)
        const emp = await Employee.findOne({ where: { email: email } })
        if (emp.email === email) {
            return res.status(500).json({
                success: false,
                message: 'This employee already exists'
            })
        }

        const data = await Employee.create({
            name, email, designation, empId
        })
        if (data) {
            return res.status(200).json({

                success: true,
                data: data,
                message: 'Employee created'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const empControllerUpdate = async (req, res) => {
    try {
        const { name, email, designation, empId } = req.body
        const id = Number(req.params.id)
        console.log('id', id)
        if (!id) {
            return res.status(404).json({
                success: true,
                message: 'id must be provided'
            })
        }
        const [affectedCount] = await Employee.update({ name, email, designation, empId }, { where: { id } })
        if (affectedCount === 0) {
            return res.status(404).send({ success: false, message: "Employee not found" });
        }
        return res.status(200).send({ success: true, message: "Employee updated " });
    } catch (error) {
        return res.status(500).json({

            success: false,
            message: error.message
        })
    }

}
const empControllerDelete = async (req, res) => {
    try {
        const id = Number(req.params.id)
        if (!id) {
            return res.status(404).json({
                success: true,
                msg: 'id must be provided'
            })
        }
        const deletedRecord = await Employee.destroy({
            where: { id }
        })
        if (deletedRecord === 0) {
            return res.status(404).json({ success: false, data: deletedRecord, message: "Employee Can't deleted" });
        }
        return res.status(200).json({ success: true, data: deletedRecord, message: "Employee has been deleted" });
    } catch (error) {
        return res.status(500).json({

            success: false,
            msg: error.message
        })
    }

}
export { empControllerList, empControllerCreate, empControllerUpdate, empControllerDelete }