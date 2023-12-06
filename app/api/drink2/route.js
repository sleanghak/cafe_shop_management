import { query } from "@/lib/db";
export async function POST(request) {
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

