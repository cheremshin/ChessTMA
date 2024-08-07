export interface TagsDTO {
    themes: Tag[];
}

export interface Tag {
    id: string; 
    name: string;
    description?: string; 
}