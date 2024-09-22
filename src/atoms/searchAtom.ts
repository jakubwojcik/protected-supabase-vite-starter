import { atom } from "jotai";
import { SearchResultSchema } from "@/types";

export const searchTermAtom = atom("");

const searchResultsAtomInitialValue: SearchResultSchema = {
  testObjects: [],
};

export const searchResultsAtom = atom<SearchResultSchema>(
  searchResultsAtomInitialValue,
);
