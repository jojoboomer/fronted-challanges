import datajson from "@data/shop-data.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Item {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

export interface ItemOnCart {
    name: string;
    img: string;
    price: number;
    quantity: number;
    total: number
}

type ItemEntry = {
    name: string;
    price: number;
    img: string;
}

type Cart = ItemOnCart[];
type ProductsList = Item[];

export interface State {
    products: ProductsList;
    cart: Cart;
    count: number;
    total: number;
    addCount: (item: ItemEntry) => void;
    deleteCount: (item: { name: string, price: number }) => void;
    clearCart: () => void;
    removeItem: (name: string) => void;
    updateTotal: (count: number, price: number) => void;
}

const initialState: State = {
    products: datajson,
    cart: [],
    count: 0,
    total: 0,
    addCount: () => { },
    deleteCount: () => { },
    clearCart: () => { },
    removeItem: () => { },
    updateTotal: () => { },
};

const useCartStore = create<State>()(
    persist(
        (set, get) => ({
            ...initialState,
            addCount: (newItem: ItemEntry) =>
                set((state) => {
                    const { updateTotal } = get();
                    const { name, price, img } = newItem
                    const item = state.cart.find((item) => item.name === name);
                    updateTotal(1, price)

                    if (item) {
                        item.quantity++;
                        item.total = item.quantity * item.price
                        return { cart: state.cart };
                    }
                    else {
                        state.cart.push({ name, price, quantity: 1, total: price, img });
                        return { cart: state.cart };
                    }
                }),
            deleteCount: (newItem) =>
                set((state) => {
                    const { updateTotal } = get();
                    const { name, price } = newItem
                    const item = state.cart.find((item) => item.name === name);
                    updateTotal(-1, price)


                    if (item && item.quantity == 1) {
                        return { cart: state.cart.filter((items) => items.name !== name) }
                    } else if (item) {
                        item.quantity--;
                        item.total = item.quantity * item.price
                        return { cart: state.cart };
                    }
                    return { cart: state.cart };

                }),
            removeItem: (name: string) =>
                set((state) => {
                    const { updateTotal } = get();
                    const item = state.cart.find((item) => item.name === name);

                    if (!item) return { cart: state.cart }

                    const price = item.price
                    const quantity = item.quantity * -1
                    updateTotal(quantity, price)

                    return {
                        cart: state.cart.filter((items) => items.name !== name),
                    }
                }),
            updateTotal: (count: number, price: number) =>
                set((state) => {
                    const priceToAdd = count * price
                    const newTotal = state.total + priceToAdd
                    const newCount = state.count + count
                    return { total: newTotal, count: newCount }
                })
        }),
        {
            name: "cart",
        }
    )
);

export default useCartStore;
