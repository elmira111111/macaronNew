import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Добавление товара в корзину
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Увеличить количество товара
    const increaseQty = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Уменьшить количество товара (минимум 1)
    const decreaseQty = (id) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                )
                // Можно убрать фильтр, если не хочешь удалять товары при 0
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, increaseQty, decreaseQty }}
        >
            {children}
        </CartContext.Provider>
    );
};
