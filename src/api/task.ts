// @ts-ignore
import {v4 as uuidV4} from "uuid";

export interface Task {
    id: string
    courseId: string
    title: string
    subtitle?: string
    description?: string
}

export const getAllTasksAPI = async (): Promise<Task[]> => {
    return Promise.resolve(tasks)
}

export const getTaskByIdAPI = async (taskId: string): Promise<Task> => {
    return Promise.resolve(
        tasks.find(task => task.id === taskId)!
    )
}

export const getMultipleTasksByIdAPI = async (taskIds: Set<string>): Promise<Task[]> => {
    return Promise.resolve(
        Array.from(taskIds).map(taskId => {
            return tasks.find(task => task.id === taskId)!
        })
    )
}

export const getTasksByCourseIdAPI = async (courseId: string): Promise<Task[]> => {
    return Promise.resolve(
        tasks.filter(task => task.courseId === courseId)!
    )
}


const tasks: Task[] = [
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91231",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        title: "1. Meilenstein",
        subtitle: "Desc 1 | Desc 2 | Desc 3",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91232",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        title: "2. Meilenstein",
        subtitle: "Desc 1 | Desc 2",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91233",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        title: "3. Meilenstein",
        subtitle: "Desc 1 | Desc 2 | Desc 3",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        title: "4. Meilenstein",
        subtitle: "Desc 1",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91235",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        title: "5. Meilenstein",
        subtitle: "Desc 1 | Desc 2 | Desc 3 | Desc 4",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91236",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        title: "6. Meilenstein",
        subtitle: "Desc 1 | Desc 2",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91237",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf97d95",
        title: "NestJS",
        subtitle: "TypeScript | TypeORM | Postgres",
        description: "NestJS ist ein progressives Node.js-Framework für die Erstellung serverseitiger Anwendungen. Es kombiniert Elemente aus traditionellen MVC-Frameworks mit modernen Architekturmustern.",
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91238",
        courseId: "c3a0eb98-2994-4d16-b31e-80fd6cf97d95",
        title: "Angular",
        subtitle: "REST | Routing | Angular Material",
        description: "Angular ist ein Framework für die Entwicklung von Single-Page-Anwendungen (SPAs) und wird in Kombination mit Technologien wie RxJS, Routing, Guards, Services und Sass verwendet.",
    }
]