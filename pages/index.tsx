import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  Box,
  Button,
  Heading,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  return (
    <Box className={styles.main} px={[4, 10]}>
      <Heading as="h1" size="4xl">
        AR Gallery
      </Heading>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        width="100%"
        mt="12"
      ></Flex>
    </Box>
  );
};

export default Home
