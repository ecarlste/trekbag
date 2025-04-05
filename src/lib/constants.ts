import { v4 as uuidv4 } from "uuid";
import { PackingListItemType } from "./types";

export const initialPackingListItems: PackingListItemType[] = [
  { id: uuidv4(), name: "good mood", isPacked: true },
  { id: uuidv4(), name: "passport", isPacked: false },
  { id: uuidv4(), name: "charger", isPacked: false },
];
