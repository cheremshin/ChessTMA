import { TagDTO } from "./TagDTO";


export interface GetTagsResponse {
    tags: TagDTO[];
}

export interface CreateTagResponse {
    tag: TagDTO;
}

export interface GetTagResponse {
    tag: TagDTO;
}

export interface UpdateTagResponse {
    tag: TagDTO;
}
