export interface PictureInfo {
    id: string;
    picUrl: string;
    title: string;
    temperament: string;
    description: string;
    selected: boolean;
}
export interface CatsData {
    id: string;
    url: string;
    breeds: Breed[];
    selected: boolean;
}
interface Breed {
    name: string;
    temperament?: string;
    description?: string;
}