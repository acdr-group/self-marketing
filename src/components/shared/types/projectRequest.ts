export type ProjectRequestType = {
    appName: string
    entity: string
    properties: Property[]
    pages: Set<Page>
}
export interface Property {
    id: string
    name: string
    value: DataType
}

export enum DataType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ARRAY_OF_STRINGS = "Array<string>",
}
export enum Page {
    HOMEPAGE = "homepage",
    ENTITY_LIST_PAGE = "entity_list_page",
    ENTITY_VIEW_PAGE = "entity_view_page",
}