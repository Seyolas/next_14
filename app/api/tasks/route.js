import db from "@/utils/db";
export const GET = async () => {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
};
export const POST = async (request) => {
  const data = await request.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });

  return Response.json({ data });
};
