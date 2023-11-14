import { query } from "@/lib/db";

export async function GET(request) {
    const getEmployee = await query({
        query:
            "SELECT * FROM `employee` ",
        values: [],
    });
    let data = JSON.stringify(getEmployee);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {
    try {
        const { emp_id, name, gender, address, email, phone, birth_date, position, ma_id } =
            await request.json();
        const createEmployee = await query({
            query:
                "INSERT INTO `employee`(`emp_id`, `name`, `gender`, `address`, `email`, `phone`, `birth_date`, `position`, `ma_id`) VALUES (?,?,?,?,?,?,?,?,?)",
            values: [emp_id, name, gender, address, email, phone, birth_date, position, ma_id],
        });
        const result = createEmployee.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            emp_id: emp_id,
            name: name,
            gender: gender,
            address: address,
            email: email,
            phone: phone,
            birth_date: birth_date,
            position: position,
            ma_id: ma_id,
        };
        return new Response(
            JSON.stringify({
                message: message,
                status: 200,
                product: product,
            })
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 500,
                data: request,
            })
        );
    }
}



export async function PUT(request) {
    try {
        const { emp_id, name, gender, address, email, phone, birth_date, position, ma_id } =
            await request.json();
        const updateEmployee = await query({
            query:
                "UPDATE `employee` SET `name`=?,`gender`=?,`address`=?,`email`=?,`phone`=?,`birth_date`=?,`position`=?,`ma_id`=? WHERE emp_id=?",
            values: [name, gender, address, email, phone, birth_date, position, ma_id, emp_id],
        });
        const result = updateEmployee.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {

            name: name,
            gender: gender,
            address: address,
            email: email,
            phone: phone,
            birth_date: birth_date,
            position: position,
            ma_id: ma_id,
            emp_id: emp_id,
        };
        return new Response(
            JSON.stringify({
                message: message,
                status: 200,
                product: product,
            })
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 500,
                data: res,
            })
        );
    }
}



export async function DELETE(request) {
    try {
        const { emp_id } = await request.json();
        const deleteEmployee = await query({
            query: "DELETE FROM `employee` WHERE emp_id=?",
            values: [emp_id],
        });
        const result = deleteEmployee.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            emp_id: emp_id,
        };
        return new Response(
            JSON.stringify({
                message: message,
                status: 200,
                product: product,
            })
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                status: 500,
                data: res,
            })
        );
    }
}

