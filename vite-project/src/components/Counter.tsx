import React, { useState, useEffect } from "react";
import { Container } from "./Container";
import { Button } from "./Button";

interface Product {
  title: string;
  description: string;
  price: string;
}

export const Counter: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { title: "Товар", description: "Описание", price: "9999" }
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<Product>({
    title: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    console.log("Товары обновлены:", products);
  }, [products]);

  const handleAddProduct = (): void => {
    if (newProduct.title.trim() && newProduct.price.trim()) {
      setProducts([...products, newProduct]);
      setNewProduct({ title: "", description: "", price: "" });
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Product): void => {
    setNewProduct({
      ...newProduct,
      [field]: e.target.value
    });
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
        <Button 
          color="secondary" 
          size="large" 
          title="Добавить товар"
          onClick={() => setIsModalOpen(true)}
        />

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-80">
              <h2 className="text-xl mb-4">Новый товар</h2>
              
              <input
                type="text"
                placeholder="Название"
                className="border p-2 w-full mb-2"
                value={newProduct.title}
                onChange={(e) => handleInputChange(e, 'title')}
              />
              
              <input
                type="text"
                placeholder="Описание"
                className="border p-2 w-full mb-2"
                value={newProduct.description}
                onChange={(e) => handleInputChange(e, 'description')}
              />
              
              <input
                type="text"
                placeholder="Цена"
                className="border p-2 w-full mb-4"
                value={newProduct.price}
                onChange={(e) => handleInputChange(e, 'price')}
              />

              <div className="flex gap-2">
                <Button
                  color="primary"
                  size="medium"
                  title="Добавить"
                  onClick={handleAddProduct}
                />
                <Button
                  color="danger"
                  size="medium"
                  title="Отмена"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          </div>
        )}

        <div className="w-full max-w-md">
          <h2 className="text-2xl mb-4 text-center">Список товаров</h2>
          <div className="space-y-3">
            {products.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h3 className="font-bold">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-green-500 font-semibold">{product.price} руб.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};