import { query } from "@/lib/db";

export async function POST(request) {
    try {
      const { cs_id } = await request.json();
      const deleteCafeshop = await query({
        query: "DELETE FROM `cafeshop` WHERE cs_id=?",
        values: [cs_id],
      });
      const result = deleteCafeshop.affectedRows;
      let message = "";
      if (result) {
        message = "success";
      } else {
        message = "error";
      }
      const product = {
        cs_id: cs_id,
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