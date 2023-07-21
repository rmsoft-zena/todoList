import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import TodoModel, { ITodo } from "@/lib/model/todo.model";

export type ResponseData = {
  message: string;
  data: ITodo[] | null;
};

export async function GET() {
  try {
    dbConnect();
    const data = await TodoModel.find();
    const responseData: ResponseData = {
      message: "성공!",
      data,
    };
    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("에러!!", error);
    const responsData: ResponseData = {
      message: "Internal Server Error",
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    dbConnect();
    const res = await req.json();
    const newTodo = {
      todo: res,
    };
    TodoModel.insertMany(newTodo);
    const data: ITodo[] = await TodoModel.find();
    const responseData: ResponseData = {
      message: "성공입니다!!",
      data,
    };
    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("에러!!", error);
    const responsData: ResponseData = {
      message: "Internal Server Error",
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
}
