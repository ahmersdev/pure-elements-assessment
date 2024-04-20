import { closeModal } from "../../../store/slices/cart-modal-slice";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../store/slices/cart-slice";

export default function useCheckout() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  const cartModal = useAppSelector(
    (state: RootState) => state.cartModal.isOpen
  );

  const onClose = () => {
    dispatch(closeModal());
  };

  const handleRemoveItem = (cart_id: string) => {
    dispatch(removeItem(cart_id));
  };

  const handleIncrementQuantity = (cart_id: string) => {
    dispatch(incrementQuantity(cart_id));
  };

  const handleDecrementQuantity = (cart_id: string) => {
    dispatch(decrementQuantity(cart_id));
  };

  const subtotal = cartItems.reduce((total: any, item: any) => {
    return total + item.price * item.quantity;
  }, 0);

  return {
    cartModal,
    onClose,
    cartItems,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleRemoveItem,
    subtotal,
  };
}
