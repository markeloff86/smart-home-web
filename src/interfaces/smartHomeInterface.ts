export interface IRecommendationItem {
    type: string;
    text: string;
    priority: number;
}

export interface IControl {
    name: string;
    data: IDataControl[];
}

interface IDataControl {
    name: string;
    value: string
}