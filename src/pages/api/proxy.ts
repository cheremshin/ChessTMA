import type { NextApiRequest, NextApiResponse } from "next";
import { API_BASE_URL } from "../../../config/apiConfig";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { query } = req;

    const requestOptions: RequestInit = {
        method: req.method,
        headers: Object.fromEntries(Object.entries(req.headers).map(([key, value]) => [key.toLowerCase(), String(value)])),
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
        requestOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(`${API_BASE_URL}${query.path}`, requestOptions);

    const data = await response.text();

    res.status(response.status).send(data);
}
