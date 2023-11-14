import { query } from "@/lib/db";

export async function GET(request) {
    const getManager = await query({
        query:
            "SELECT * FROM `manager` ",
        values: [],
    });
    let data = JSON.stringify(getManager);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {

    try {
        const { ma_id, name, gender, address, email, phone, birth_date } =
            await request.json();
        const createManager = await query({
            query:
                "INSERT INTO `manager`(`ma_id`, `name`, `gender`, `address`, `email`, `phone`, `birth_date`) VALUES (?,?,?,?,?,?,?)",
            values: [ma_id, name, gender, address, email, phone, birth_date],
        });
        const result = createManager.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            ma_id: ma_id,
            name: name,
            gender: gender,
            address: address,
            email: email,
            phone: phone,
            birth_date: birth_date,

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
        const { ma_id, name, gender, address, email, phone, birth_date } =
            await request.json();
        const updateManager = await query({
            query:
                "UPDATE `manager` SET `name`=?,`gender`=?,`address`=?,`email`=?,`phone`=?,`birth_date`=? WHERE ma_id=?",
            values: [name, gender, address, email, phone, birth_date,ma_id],
        });
        const result = updateManager.affectedRows;
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
                data: res,
            })
        );
    }
}



export async function DELETE(request) {
    try {
        const { ma_id } = await request.json();
        const deleteManager = await query({
            query: "DELETE FROM `manager` WHERE ma_id=?",
            values: [ma_id],
        });
        const result = deleteManager.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
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
                data: res,
            })
        );
    }
}

