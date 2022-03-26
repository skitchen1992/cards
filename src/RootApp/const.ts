interface IThumbnail {
  extension: string;
  path: string;
}
export interface IChar {
  id: number;
  name: string;
  thumbnail: IThumbnail;
  description: string;
  isActive: boolean;
}

interface IData {
  results: IChar[];
}

export interface IResponse {
  data: IData;
}

export interface IActiveChar {
  index: number;
  isActive: boolean;
}

export interface IFiltersChar {
  isFilter: boolean;
}
