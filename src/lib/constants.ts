import { v4 as uuidv4 } from "uuid";

export const packingListItems = [
  { id: uuidv4(), name: "good mood", isPacked: true },
  { id: uuidv4(), name: "passport", isPacked: false },
  { id: uuidv4(), name: "charger", isPacked: false },
];

export const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];
