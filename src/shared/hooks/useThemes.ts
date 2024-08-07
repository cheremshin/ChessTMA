import { useFetch } from "@/shared/hooks/useFetch";
import { Tag, TagsDTO } from "../types/api/themes/TagDTO";
import { useEffect } from "react";


export const useThemes = () => {
    const { data, fetchData, isLoading } = useFetch<TagsDTO, Tag[]>("/themes");

    useEffect(() => {
        fetchData((object: TagsDTO) => object.themes).then()
    }, [])

    return data;
}