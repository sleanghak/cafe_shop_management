import { query } from "@/lib/db";

export async function GET(request) {
    const getOrder = await query({
        query:
            "SELECT * FROM `table_order` ",
        values: [],
    });
    let data = JSON.stringify(getOrder);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {

    try {
        const { or_id, name, quantity, price, date, total_price, re_id } =
            await request.json();
        const createOrder = await query({
            query:
                "INSERT INTO `table_order`(`or_id`, `name`, `quantity`, `price`, `date`, `total_price`, `re_id`) VALUES (?,?,?,?,?,?,?)",
            values: [or_id, name, quantity, price, date, total_price, re_id],
        });
        const result = createOrder.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            or_id: or_id,
            name: name,
            quantity: quantity,
            price: price,
            date: date,
            total_price: total_price,
            re_id: re_id,
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
        const { or_id, name, quantity, price, date, total_price, re_id } =
            await request.json();
        const updateOrder = await query({
            query:
                "UPDATE `table_order` SET `name`=?,`quantity`=?,`price`=?,`date`=?,`total_price`=?,`re_id`=? WHERE or_id=?",
            values: [ name, quantity, price, date, total_price, re_id,or_id],
        });
        let message = "";
        if (updateOrder) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
           
            name: name,
            quantity: quantity,
            price: price,
            date: date,
            total_price: total_price,
            re_id: re_id,
            or_id: or_id,
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
        const { or_id } = await request.json();
        const deleteOrder = await query({
            query: "DELETE FROM `table_order` WHERE or_id=?",
            values: [or_id],
        });
        const result = deleteOrder.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            or_id: or_id,
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

