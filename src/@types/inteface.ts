export interface IImages {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    radius?: number;
}

export interface ISectionAbout {
    images: IImages | IImages[];
    title: string;
    description: string;
}
