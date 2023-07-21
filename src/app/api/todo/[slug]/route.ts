import dbConnect from "@/lib/dbConnect";
import TodoModel, { ITodo } from "@/lib/model/todo.model";
import { ResponseData } from "../route";
import { NextResponse } from "next/server";
import { TodoType } from "@/components/TodoList";
import { log } from "console";

export async function PUT(
  req: Request,
  { params }: { params: { slug: TodoType } }
) {
  try {
    dbConnect();
    const { todo } = await req.json();
    const id = params.slug;

    await TodoModel.updateOne({ _id: id }, { todo });

    const data: ITodo[] = await TodoModel.find();
    const responseData: ResponseData = {
      message: "성공입니다!!",
      data,
    };
    return new NextResponse(JSON.stringify({}), { status: 200 });
  } catch (error) {
    console.error("에러!!", error);
    const responsData: ResponseData = {
      message: "Internal Server Error",
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    dbConnect();
    const id = params.slug;

    await TodoModel.deleteOne({ _id: id });

    const data: ITodo[] = await TodoModel.find();
    const responseData: ResponseData = {
      message: "성공입니다!!",
      data,
    };
    return new NextResponse(JSON.stringify({}), { status: 200 });
  } catch (error) {
    console.error("에러!!", error);
    const responsData: ResponseData = {
      message: "Internal Server Error",
      data: null,
    };
    return new NextResponse(JSON.stringify(responsData), { status: 500 });
  }
}
