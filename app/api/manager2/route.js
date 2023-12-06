import { query } from "@/lib/db";

export async function POST(request) {
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

