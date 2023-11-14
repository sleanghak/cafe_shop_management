import { query } from "@/lib/db";

export async function GET(request) {
    const getDrink = await query({
        query:
            "SELECT * FROM `drink` ",
        values: [],
    });
    let data = JSON.stringify(getDrink);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {
    try {
        const { dr_id, name, category, price, or_id, emp_id } =
            await request.json();
        const createDrink = await query({
            query:
                "INSERT INTO `drink`(`dr_id`, `name`, `category`, `price`, `or_id`, `emp_id`) VALUES (?,?,?,?,?,?)",
            values: [dr_id, name, category, price, or_id, emp_id],
        });
        const result = createDrink.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            dr_id: dr_id,
            name: name,
            category: category,
            price: price,
            or_id: or_id,
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
                data: request,
            })
        );
    }
}

export async function PUT(request) {
    try {
        const { dr_id, name, category, price, or_id, emp_id } =
            await request.json();
        const updateDrink = await query({

            query:
                "UPDATE `drink` SET `name`=?,`category`=?,`price`=?,`or_id`=?,`emp_id`=? WHERE dr_id=?",
            values: [, name, category, price, or_id, emp_id, dr_id],
        });
        const result = updateDrink.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            name: name,
            category: category,
            price: price,
            or_id: or_id,
            emp_id: emp_id,
            dr_id: dr_id,
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


export async function DELETE(request) {
    try {
        const { dr_id } = await request.json();
        const deleteDrink = await query({
            query: "DELETE FROM `drink` WHERE dr_id=?",
            values: [dr_id],
        });
        const result = deleteDrink.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            dr_id: dr_id,
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

