import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/action";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <div>
      <EditForm task={task} />
    </div>
  );
};

export default SingleTaskPage;
