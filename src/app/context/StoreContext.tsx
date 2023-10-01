import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
    basket: Basket | null;
    setBasket: (basket: Basket) => void;
    deleteItem: (productId: string, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function useStoreContext() {
    const context = useContext(StoreContext)
    if (context === undefined) {
        throw Error("context not seem to be inside the provider.");
    }
    return context;
}

//anything that's inside our stored provider when we use this is going to be children.
export function StoreProvider({ children }: PropsWithChildren<any>) {
    const [basket, setBasket] = useState<Basket | null>(null);

    function deleteItem(productId: string, quantity: number) {
        if (!basket) {
            return;
        }

        const items = [...basket.items];
        const itemIndex = items.findIndex(item => item.id === productId)
        if (itemIndex >= 0) {
            items[itemIndex].quantity -= quantity;
            if (items[itemIndex].quantity === 0) {
                items.splice(itemIndex, 1);
                setBasket(preState => {
                    return { ...preState!, items }
                })
            }
        }
    }

    return (
        <StoreContext.Provider value={{ basket, setBasket, deleteItem }}>
            {children}
        </StoreContext.Provider>
    )
}