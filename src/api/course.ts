// @ts-ignore
import {v4 as uuidV4} from "uuid";
// @ts-ignore
import placeholderImage from "../assets/placeholder.svg";
export interface Course {
    id: string;
    codeName: string;
    name: string;
    description?: string;
    tasksDescription?: string;
    thumbnailUrl?: any
}

export const getAllCoursesAPI = async (): Promise<Course[]> => {
    return Promise.resolve(courses)
}

export const getCourseByIdAPI = async (courseId: string): Promise<Course> => {
    const courseFound: Course = courses.find(course => course.id === courseId)!
    return Promise.resolve(courseFound)
}

const courses: Course[] = [
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf97d95",
        codeName: "swe",
        name: "Softwareentwicklung",
        description: "Alle Aufgaben zu SWE und alle Projekte über TypeScript, JavaScript, Angular, Bootstrap, ReactJS, Angular Material, RxJS, Sass, ESLint, SonarQube, Prettier und stylelint...",
        tasksDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        thumbnailUrl: "../assets/placeholder.svg"
    },
    {
        id: "c3a0eb98-2994-4d16-b31e-80fd6cf91234",
        codeName: "swa",
        name: "Softwarearchitecture",
        description: "Alle Aufgaben zu SWA und Projekte zu Java, Kotlin, Gradle, Spring Boot, JSON, Domain Driven Design(DDD), Testing, SCRUM, Docker, PlanUML, Jenkins und Meilensteinen...",
        tasksDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
        thumbnailUrl: "../assets/placeholder.svg"
    }
]

