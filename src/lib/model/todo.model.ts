import { Document, model, Model, Schema, models } from "mongoose";

export interface ITodo extends Document {
  todo: string;
}

export const todoSchema: Schema<ITodo> = new Schema({
  todo: {
    type: String,
    required: true,
  },
});

const TodoModel: Model<ITodo> =
  models?.Todo || model<ITodo>("Todo", todoSchema);

export default TodoModel;
