import ButtonType from "./ButtonType";

export interface SectionType {
    title: string
    description: string
    subtitle?: string
    sectionButtons?: ButtonType[]
    image?: string
    svgIcon?: any
    children?: any
}