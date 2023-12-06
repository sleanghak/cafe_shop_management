import { query } from "@/lib/db";

export async function POST(request) {
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

