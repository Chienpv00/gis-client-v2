import { requestTable } from "~/requestTable";

export const getUrl = (url: keyof typeof requestTable) => {
    return requestTable[url];
}