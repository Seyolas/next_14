import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "banana",
      completed: true,
    },
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text7-xl">prisma exampel</h1>
      {tasks.map((item) => {
        return <h2>{item?.content}</h2>;
      })}
    </div>
  );
};

export default PrismaExample;
