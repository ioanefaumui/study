import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // return NextResponse.json(cms);
}

export async function POST(req: Request) {
  const data = await req.formData();

  const name = data.get("name");
  const email = data.get("email");

  const userDate = {
    name,
    email,
  };

  fs.writeFile("test.json", JSON.stringify(userDate), "utf-8", (err) => {
    if (err) {
      console.error("Error: ", err);
    } else {
      console.log("file saved");
    }
  });

  return NextResponse.json("hello");
}
