import React from "react";
import { MdDelete } from "react-icons/md";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  useDisclosure,
  Card,
  CardBody,
  Button,
  Image,
} from "@nextui-org/react";
import { FiShoppingCart } from "react-icons/fi";

import { Link, Link as RouterLink } from "react-router-dom";
import { deleteFromCart } from "../app/features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value);
  const totalCost = cart.reduce(
    (total, cart) => total + cart.product.price * cart.quantity,
    0
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex items-center justify-center">
      <button onClick={onOpen}>
        <FiShoppingCart />
      </button>
      <Modal
        isDismissable={true}
        size="3xl"
        placement="center"
        className="max-h-[500px] pb-10 overflow-y-auto"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cart Item
              </ModalHeader>
              <ModalBody>
                {cart.map((el) => (
                 
                    <div className="grid grid-cols-12 gap-6 md:gap-4 items-start justify-start">
                      <div className="relative  col-span-4">
                        <Image
                          alt="Album cover"
                          className="object-cover aspect-square"
                          src={el.product.img_link}
                          radius="none"
                        />
                      </div>

                      <div className="flex flex-col justify-start col-span-8">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-0">
                            <h3 className="font-semibold text-foreground/90">
                              {el.product.name}
                            </h3>
                            <p className="text-small line-clamp-1 sm:line-clamp-2 text-foreground/80">
                              {el.product.description}
                            </p>
                            <h1 className="text-large font-medium mt-2">
                              Nrs. {el.product.price}
                            </h1>
                          </div>
                          <button
                            type="button"
                            className="flex text-orange-700 rounded-full text-xl p-2 hover:bg-orange-50"
                            onClick={() => {
                              dispatch(deleteFromCart(el.product.id));
                            }}
                          >
                            <MdDelete />
                          </button>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                          <div className="flex justify-between ">
                            <p className="text-small">{el.quantity} pcs</p>
                            <button
                              type="button"
                              onClick={() => {
                                onOpenChange();
                                  navigate(`/products/${el.product.id}`);
                                  console.log(el.product.id)
                              }}
                              className="rounded-full px-5 p-2 text-xs text-white  bg-black border border-black hover:text-black hover:bg-white transition "
                            >
                              view item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                ))}
                {cart.length === 0 && (
                  <div className="flex items-center  justify-center">
                    no cart item
                  </div>
                )}
                {cart.length !== 0 && (
                  <div className="flex items-center w-full mt-12 justify-between">
                    <h1>TOTAL</h1>
                    <h1>Nrs. {totalCost}</h1>
                  </div>
                )}
                {cart.length !== 0 && (
                  <div className="flex items-center w-full justify-center bg-black py-3 text-sm hover:opacity-90 text-white">
                    checkout
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CartComponent;
