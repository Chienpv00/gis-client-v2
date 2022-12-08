import { getUrl } from "~/helper";
import { DefaultColors } from "./styled";

export const data = [
    {
        url: getUrl("getStairAPI"),
        size: 0.15,
        color: DefaultColors.White,
    },
    {
        url: "http://localhost:8080/api/datacol2",
        size: 0.5,
        color: DefaultColors.Black,
    },
    {
        url: "http://localhost:8080/api/tang123",
        size: 6,
        color: DefaultColors.White,
    },
];
