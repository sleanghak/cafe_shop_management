import { query } from "@/lib/db";

export async function POST(request) {
    try {
        const { re_id } = await request.json();
        const deleteReport = await query({
            query: "DELETE FROM `report` WHERE re_id=?",
            values: [re_id],
        });
        const result = deleteReport.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
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
                data: res,
            })
        );
    }
}

