import {
  Flex,
  VStack,
  Input,
  Image,
  FormControl,
  FormLabel,
  Icon,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface Props {
  onChange: (searchText: string) => void;
}

const Navbar = ({ onChange }: Props) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Flex h="4rem">
        <VStack h="full" p={0} alignItems="flex-start" w="4xs">
          <Image
            marginTop={1}
            boxSize="5rem"
            objectFit="cover"
            src="/vite.svg"
            alt="Game portal logo"
          />
        </VStack>
        <VStack h="full" w="full" p={5} alignItems="flex-start">
          <Input
            onChange={(evt) => {
              onChange(evt.target.value);
              console.log("--->", evt.target.value);
            }}
            p={2}
            placeholder="Search here"
            size="lg"
          />
        </VStack>
        <VStack h="full" p={5} alignItems="flex-start" w="xs">
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              <Icon as={MdDarkMode} /> / <Icon as={MdLightMode} />
            </FormLabel>
            <Switch onChange={toggleColorMode}></Switch>
          </FormControl>
        </VStack>
      </Flex>
    </>
  );
};

export default Navbar;
