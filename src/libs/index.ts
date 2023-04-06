import { TECHS } from './constants';

export const getTechById = (id: number) => {
  return TECHS.find((tech) => tech.id === id);
};
