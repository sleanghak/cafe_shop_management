import { query } from "@/lib/db";

export async function GET(request) {
    const getReport = await query({
        query:
            "SELECT * FROM `report` ",
        values: [],
    });
    let data = JSON.stringify(getReport);
    return new Response(data, {
        status: 200,
    });
   
}

export async function POST(request) {

    try {
        const { re_id, date, quantity, report_type, total_price } =
            await request.json();
        const createReport = await query({
            query:
                "INSERT INTO `report`(`re_id`, `date`, `quantity`, `report_type`, `total_price`) VALUES (?,?,?,?,?)",
            values: [re_id, date, quantity, report_type, total_price],
        });
        const result = createReport.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            re_id:re_id,
            date:date,
            quantity:quantity,
            report_type:report_type,
            total_price:total_price,

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
        const { re_id, date, quantity, report_type, total_price } =
            await request.json();
        const updateReport = await query({
            query:
                "UPDATE `report` SET `date`=?,`quantity`=?,`report_type`=?,`total_price`=? WHERE re_id=?",
            values: [ date, quantity, report_type, total_price,re_id],
        });
        let message = "";
        if (updateReport) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            
            date:date,
            quantity:quantity,
            report_type:report_type,
            total_price:total_price,
            re_id:re_id,
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

