export interface CreateTagRequest {
    name: string;
    description: string;
}

export interface UpdateTagRequest extends CreateTagRequest {}
