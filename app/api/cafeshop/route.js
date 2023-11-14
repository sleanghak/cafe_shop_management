import { query } from "@/lib/db";

export async function GET(request) {
  const getCafeshop = await query({
    query:
      "SELECT * FROM `cafeshop` ",
    values: [],
  });
  let data = JSON.stringify(getCafeshop);
  return new Response(data, {
    status: 200,
  });
}

export async function POST(request) {
  try {
    const { cs_id, cs_city, cs_address, date } =
      await request.json();
    const createCafeshop = await query({
      query:
        "INSERT INTO `cafeshop`(`cs_id`, `cs_city`, `cs_address`, `date`) VALUES (?,?,?,?)",
      values: [cs_id, cs_city, cs_address, date],
    });
    const result = createCafeshop.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      cs_id: cs_id,
      cs_city: cs_city,
      cs_address: cs_address,
      date: date,
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
    const { cs_id, cs_city, cs_address, date } =
      await request.json();
    const updateCafeshop = await query({

      query:
        "UPDATE `cafeshop` SET `cs_city`=?,`cs_address`=?,`date`=? WHERE cs_id=?",
      values: [cs_city, cs_address, date, cs_id],
    });
    const result = updateCafeshop.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      cs_city: cs_city,
      cs_address: cs_address,
      date: date,
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
        data: request,
      })
    );
  }
}


export async function DELETE(request) {
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

