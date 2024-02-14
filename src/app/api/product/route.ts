import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4927f3e2-b271-4255-844b-772b66ba9f66/air-max-1-mens-shoes-2C5sX2.png",
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: 50000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4927f3e2-b271-4255-844b-772b66ba9f66/air-max-1-mens-shoes-2C5sX2.png",
  },
  {
    id: 3,
    title: "Cosmic Unity 3",
    price: 2379000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f98689d-ddf7-4c59-9986-93c39849f571/cosmic-unity-3-basketball-shoes-hcwmW0.png",
  },
  {
    id: 4,
    title: "Cosmic Unity 4",
    price: 2379000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f98689d-ddf7-4c59-9986-93c39849f571/cosmic-unity-3-basketball-shoes-hcwmW0.png",
  },
  {
    id: 5,
    title: "Cosmic Unity 5",
    price: 2379000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f98689d-ddf7-4c59-9986-93c39849f571/cosmic-unity-3-basketball-shoes-hcwmW0.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
