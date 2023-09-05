import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const contextValue = {
    isOpen,
    onClose,
    onOpen,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
