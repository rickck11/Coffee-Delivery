import { Trash } from "phosphor-react";
import { useContext } from "react";
import { AddRemove } from "../../../components/AddRemove";
import { CartContext } from "../../../contexts/CartContext";
import { formartNumberToCurrency } from "../../../utils/utils";
import { ProducOnCartContainer, RemoveItemButton, Separator } from "./styles";

interface ProductOnCartProps {
  id: string;
  amount: number;
  imageSrc: string;
  title: string;
  price: number;
}

export function ProductOnCart({
  id,
  amount,
  imageSrc,
  title,
  price,
}: ProductOnCartProps) {
  const { addNewProduct, deleteProduct } = useContext(CartContext);

  function handleAdd() {
    if (amount < 99) {
      addNewProduct({ id, amount: 1, price });
    }
  }

  function handleRemove() {
    if (amount > 1) {
      addNewProduct({ id, amount: -1, price });
    }
  }

  function handleDeleteProduct() {
    deleteProduct(id);
  }

  return (
    <ProducOnCartContainer>
      <div className="coffee-item">
        <img src={imageSrc} alt="" />
        <div className="coffee-options">
          <p>{title}</p>
          <div className="coffee-options-buttons">
            <AddRemove
              h={32}
              amount={amount}
              addOne={handleAdd}
              removeOne={handleRemove}
            />
            <RemoveItemButton onClick={handleDeleteProduct} type="button">
              <Trash size={18} />
              <p>REMOVER</p>
            </RemoveItemButton>
          </div>
        </div>
        <strong>{"R$ " + formartNumberToCurrency(price, "BR")}</strong>
      </div>
      <Separator />
    </ProducOnCartContainer>
  );
}
