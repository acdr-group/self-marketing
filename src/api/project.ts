// @ts-ignore
import projectPlaceholder from "../assets/project-thumbnail.png";
export interface Project {
    id: string
    name: string
    description: string
    technologiesUsed: string
    pages?: string[]
    packages?: string[]
    thumbnail: string
    taskId: string,
    previewUrl: string
}

export const getAllProjectsAPI = async (): Promise<Project[]> => {
    return Promise.resolve(projects)
}

export const getProjectByIdAPI = async (projectId: string): Promise<Project> => {
    return Promise.resolve(
        projects.find(project => project.id === projectId)!
    )
}

export const getProjectsByTaskId = async (taskId: string): Promise<Project[]> => {
    return Promise.resolve(
        projects.filter(project => project.taskId  === taskId)!
    )
}

const projects: Project[] = [
    {
        id: "58e92fac-93a2-4663-9b5a-c4a3743d1c23",
        name: "Projectname 1",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        technologiesUsed: "TypScript | TypeORM | Tech 3",
        taskId: "c3a0eb98-2994-4d16-b31e-80fd6cf91237",
        thumbnail: projectPlaceholder,
        previewUrl: "http://localhost:3000",
    },
    {
        id: "6f4b0b25-8d67-4e52-962f-ecba371f04c0",
        name: "Projectname 2",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        technologiesUsed: "Tech 1 | Tech 2",
        taskId: "c3a0eb98-2994-4d16-b31e-80fd6cf91237",
        thumbnail: projectPlaceholder,
        previewUrl: "http://localhost:3000",
    },
    {
        id: "b05d7424-f7a9-4cf8-8545-9ea655ce6c58",
        name: "Projectname 4",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        technologiesUsed: "Tech 1 | Tech 2",
        taskId: "c3a0eb98-2994-4d16-b31e-80fd6cf91237",
        thumbnail: projectPlaceholder,
        previewUrl: "http://localhost:3000",
    },
    {
        id: "b75d4ac9-b0df-4219-8154-2a69c3673209",
        name: "Projectname 5",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        technologiesUsed: "Tech 1 | Tech 2 | Tech 3",
        taskId: "c3a0eb98-2994-4d16-b31e-80fd6cf91237",
        thumbnail: projectPlaceholder,
        previewUrl: "http://localhost:3000",
    },
    {
        id: "123d4ac9-b0df-4219-8154-2a69c3673209",
        name: "Projectname 6",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        technologiesUsed: "Tech 1 | Tech 2 | Tech 3",
        taskId: "c3a0eb98-2994-4d16-b31e-80fd6cf91237",
        thumbnail: projectPlaceholder,
        previewUrl: "http://localhost:3000",
    },
]