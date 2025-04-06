import { create } from "zustand";
import { initialPackingListItems } from "../lib/constants";
import { PackingListItemType } from "../lib/types";
import { v4 as uuidv4 } from "uuid";

type PackingListItemsState = {
  packingListItems: PackingListItemType[];
  addItem: (newItemName: string) => void;
  deleteItem: (id: string) => void;
  toggleItemPacked: (id: string) => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  resetToInitial: () => void;
  removeAllItems: () => void;
};

export const usePackingListItemsStore = create<PackingListItemsState>()(
  (set) => ({
    packingListItems: initialPackingListItems,
    addItem: (newItemName) =>
      set((state) => ({
        packingListItems: [
          ...state.packingListItems,
          { id: uuidv4(), name: newItemName, isPacked: false },
        ],
      })),
    deleteItem: (id: string) =>
      set((state) => ({
        packingListItems: state.packingListItems.filter(
          (item) => item.id !== id
        ),
      })),
    toggleItemPacked: (id: string) =>
      set((state) => ({
        packingListItems: state.packingListItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isPacked: !item.isPacked,
            };
          }

          return item;
        }),
      })),
    markAllAsComplete: () =>
      set((state) => ({
        packingListItems: state.packingListItems.map((item) => ({
          ...item,
          isPacked: true,
        })),
      })),
    markAllAsIncomplete: () =>
      set((state) => ({
        packingListItems: state.packingListItems.map((item) => ({
          ...item,
          isPacked: false,
        })),
      })),
    resetToInitial: () =>
      set(() => ({
        packingListItems: initialPackingListItems,
      })),
    removeAllItems: () =>
      set(() => ({
        packingListItems: [],
      })),
  })
);
