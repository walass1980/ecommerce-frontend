import { CartStoreActionsType, CartStoreStateType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


const UseCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],
            hasHydreted: false,
            addToCart: (product) => 
                set((state) => {
                    const existingIndex = state.cart.findIndex(
                        (p) => 
                            p.id == product.id &&
                        p.selectedSize === product.selectedSize &&
                        p.selectedColor === product.selectedColor
                    )
                })
        })
    )
)