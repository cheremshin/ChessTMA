import { TagsDTO } from "./TagDTO";


export interface GetTagsResponse {
    tags: TagsDTO[];
}

export interface CreateTagResponse {
    tag: TagsDTO;
}

export interface GetTagResponse {
    tag: TagsDTO;
}

export interface UpdateTagResponse {
    tag: TagsDTO;
}
