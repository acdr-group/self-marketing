import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import CenteredSectionComponent from "../components/shared/CenteredSectionComponent";
import {getAllTasksAPI, Task} from "../api/task";
import TaskListComponent from "../components/shared/TaskListComponent";
import LoadingComponent from "../components/shared/LoadingComponent";
import {mainSection} from "../data/taskListPage";

const TaskListPageComponent: React.FC = () => {

    const [tasks, setTasks] = useState<Task[] | undefined>(undefined);

    useEffect(() => {
        getAllTasksAPI().then(data => setTasks(data));
    }, [])

    if (tasks === undefined) {
        return (
            <LoadingComponent
                text={"Loading task..."}
                sx={{
                    mt: "var(--space-13)",
                }}
            />
        )
    }

    return (
        <Box>
            <CenteredSectionComponent title={mainSection.title} description={mainSection.description}>
                <TaskListComponent tasks={tasks} />
            </CenteredSectionComponent>
        </Box>
    )
}
export default TaskListPageComponent
