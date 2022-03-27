import { IChar } from '../RootApp/const';

export const transformCharacter = (charList: IChar[]) =>
  charList.map((item) => ({
    id: item.id,
    name: item.name,
    thumbnail: item.thumbnail,
    description: item.description,
    isActive: false,
  }));
