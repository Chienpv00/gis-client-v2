import { requestTable } from "~/requestTable";

export const getUrl = (url: string) => {
    return requestTable[url];
}