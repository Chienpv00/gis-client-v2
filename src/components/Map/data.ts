import { getUrl } from "../../helper/index";
import { DefaultColors } from "./styled";

export const data = [
    {
        url: getUrl("getStairAPI"),
        size: 0.15,
        color: DefaultColors.White,
    },
    {
        url: getUrl("getDataCol2API"),
        size: 0.5,
        color: DefaultColors.Black,
    },
    {
        url: getUrl("getTang123API"),
        size: 6,
        color: DefaultColors.White,
    },
];
