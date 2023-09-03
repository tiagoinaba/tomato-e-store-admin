import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, categoryId, imageUrl } = body;

    if (!name) return new NextResponse("Nome obrigatório", { status: 400 });
    if (!description)
      return new NextResponse("Descrição obrigatória", { status: 400 });
    if (!price) return new NextResponse("Preço obrigatório", { status: 400 });

    const product = await prismadb.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
        imageUrl: JSON.stringify(imageUrl),
      },
    });

    return NextResponse.json(product);
  } catch (err) {
    console.log("[PRODUCTS_POST]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await prismadb.product.findMany();

    return NextResponse.json(data);
  } catch (err) {
    console.log("[PRODUCTS_GET]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
