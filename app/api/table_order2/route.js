import { query } from "@/lib/db";

export async function POST(request) {
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

