import { ContentJson } from "./content-helpers";

export type CommonContent = {
  header: {
    title: string;
  };
}

export type CommonContentJson = ContentJson<CommonContent>;