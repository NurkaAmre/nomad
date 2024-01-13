import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export const GET = async (req: Request, context: any) => {
  const { params } = context;
  if (!params || !params.catName) {
    return NextResponse.json({ error: "catName is required" }, { status: 400 });
  }
  try {
    const todoData: Place[] =
      await client.fetch(`*[_type == "places" && category == "${params.catName}"][0...5]{
        "id": _id,
        title,
        "image": image.asset->url,
        description,
        category
      }`);
    return NextResponse.json({ data: todoData });
  } catch (error) {
    return NextResponse.json({ error: "404 page not found!" }, { status: 404 });
  }
};
