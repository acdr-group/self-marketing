import React from 'react';
import { Task } from "../../api/task";
import {CardsContainer} from "../../sharedStyles";
import TaskComponent from "./TaskComponent";
import Box from "@mui/material/Box";

type Props = {
    tasks: Task[]
}

const TaskListComponent: React.FC<Props> = (props: Props) => {
  return (
      <Box sx={CardsContainer}>
          {props.tasks.map((task, idx) =>
              <TaskComponent
                  key={idx}
                  task={task}
              />
          )}
      </Box>
  )
}

export default TaskListComponent
