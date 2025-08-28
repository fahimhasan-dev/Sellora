// src/app/api/products/route.js
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return new Response(JSON.stringify(product), { status: 201 });
}

export async function GET() {
  await connectDB();
  const products = await Product.find({});
  return new Response(JSON.stringify(products), { status: 200 });
}
