import React, { useContext, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CartContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const PopOutMenu = () => {
  const { isOpen, onClose, onOpen } = useContext(CartContext);
  const [openAppeal, setOpenAppeal] = useState(false);

  const toggle = () => {
    setOpenAppeal(!openAppeal);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent mt={16} backgroundColor={"gray.200"}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Al-Musa3ada</DrawerHeader>
          <div className="">
            <div className="flex justify-between h-12 border-y-2 border-black items-center px-4 bg-gray-200">
              <Link to="/" className="" onClick={onClose}>
                Home
              </Link>
            </div>
            <div
              className="flex justify-between h-12 border-b-2 border-black items-center px-4 "
              onClick={toggle}
            >
              <h2>Projects</h2>
              {!openAppeal ? (
                <FaArrowRight className="text-gray-500" />
              ) : (
                <FaArrowDown />
              )}
            </div>
            {openAppeal && (
              <div className="flex flex-col text-white font-semibold">
                <Link
                  to="masjidProject"
                  className="border-b-2 pl-4 h-10 bg-gray-700 flex items-center"
                  onClick={onClose}
                >
                  Cairo Masjid
                </Link>
                <Link
                  to="libyaProject"
                  className="border-b-2 pl-4 h-10 bg-gray-700 flex items-center"
                  onClick={onClose}
                >
                  Libya
                </Link>
                <Link
                  to="congoProject"
                  className="border-b-2 pl-4 h-10 bg-gray-700 flex items-center"
                  onClick={onClose}
                >
                  Congo
                </Link>
                <Link
                  to="ramadhaanProject"
                  className="border-b-2 pl-4 h-10 bg-gray-700 flex items-center"
                  onClick={onClose}
                >
                  Ramadhaan
                </Link>
              </div>
            )}
            <div className="flex justify-between h-12 border-b-2 items-center px-4 border-black">
              <Link to="lessonsPage">Lessons</Link>
            </div>
            <div className="flex justify-between h-12 border-b-2 items-center px-4 border-black">
              <Link>About</Link>
            </div>
            <div className="flex justify-between h-12 border-b-2 items-center px-4">
              <Link to="contactPage" onClick={onClose}>
                Contact
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default PopOutMenu;
