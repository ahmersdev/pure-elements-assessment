import { useGetProductsListQuery } from "../../services/products";
import { addItem } from "../../store/slices/cart-slice";
import { useAppDispatch } from "../../store";
import { openModal } from "../../store/slices/cart-modal-slice";
import { Product } from "../../interfaces/products";

export default function useHome() {
  const { data, isLoading, isFetching, isError } = useGetProductsListQuery({
    limit: 30,
  });

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product, size: string) => {
    const { id, title, sale_price, regular_price, cover_image, variants } =
      product;
    const selectedVariant = variants.find(
      (variant: any) => variant.size === size && variant.quantity > 0
    );

    if (!selectedVariant) {
      return;
    }

    dispatch(
      addItem({
        cart_id: `${id}-${size}`,
        title,
        coverImage: cover_image,
        price: regular_price,
        size,
        regular_price,
        sale_price,
        quantity: 1,
      })
    );

    dispatch(openModal());
  };

  return { isLoading, isFetching, isError, data, handleAddToCart };
}
