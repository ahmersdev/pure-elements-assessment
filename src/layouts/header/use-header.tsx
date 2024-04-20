import { RootState, useAppDispatch, useAppSelector } from "../../store";

export default function useHeader() {
  const cartModal = useAppSelector(
    (state: RootState) => state.cartModal.isOpen
  );

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);

  return { cartItems, dispatch, cartModal };
}
