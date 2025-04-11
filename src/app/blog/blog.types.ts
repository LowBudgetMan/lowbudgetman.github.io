import {ReactElement} from "react";

export interface BlogPreview {
    name: string;
    date: Date;
    slug: string;
    previewParagraph: ReactElement;
}