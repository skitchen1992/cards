interface IThumbnail {
  extension: string;
  path: string;
}
export interface ICharList {
  id: number;
  name: string;
  thumbnail: IThumbnail;
  description: string;
}

interface IData {
  results: ICharList[];
}

export interface IResponse {
  data: IData;
}
