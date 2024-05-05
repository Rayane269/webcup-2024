import { create } from 'zustand'

type State = {
  selectedIds: Set<number>,
  addId: (id: number) => void
  removeId: (id: number) => void
}

export const useStoreOrder = create<State>((set) => ({
  selectedIds: new Set(),
  addId: (id) => {
    set((state) => {
      const selectedIds = new Set([...state.selectedIds, id])
      return {selectedIds}
    })
  },
  removeId: (id) => {
    set(state => {
      const selectedIds = new Set(state.selectedIds)
      selectedIds.delete(id)
      return { selectedIds }
    })
  }
}))
