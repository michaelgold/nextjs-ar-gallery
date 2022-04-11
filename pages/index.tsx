import { createElement } from "react";
import type { NextPage, GetStaticProps } from "next";
import CardModel from "../components/card-model";
import { loadData } from "../lib/load-data";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  propNames,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import * as FontAwesome from "react-icons/fa";
import { IconContext } from "react-icons";

const Models = (props: any) => {
  const models = props.data.models;
  // return <></>;
  const displayModels = models.map((model: any, idx: any) => (
    <CardModel key={idx} model={model}></CardModel>
  ));
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
      {displayModels}{" "}
    </SimpleGrid>
  );
};

const Social = (props: any) => {
  const social = props.social;
  console.log(social);
  const iconName: keyof typeof FontAwesome = social.icon;

  const icon = createElement(FontAwesome[iconName], null);

  return (
    <Box px={2}>
      <IconContext.Provider
        value={{ color: "#999999", className: "global-class-name" }}
      >
        <Link href={social.url}>
          <a>{icon}</a>
        </Link>
      </IconContext.Provider>
    </Box>
  );
};

export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Flex justify={"center"}>
      <Text fontSize="sm" color="subtle">
        <Link href={"https://github.com/michaelgold/nextjs-ar-gallery"}>
          <a>AR Example Template</a>
        </Link>{" "}
        -- MIT Licensed and &copy; {new Date().getFullYear()}{" "}
        <Link href="https://mike.gold">
          <a>Michael Gold</a>
        </Link>{" "}
      </Text>
    </Flex>
  </Container>
);

const Socials = (props: any) => {
  const socials = props.data.artist.socials;
  const displaySocials = socials.map((social: any, idx: any) => (
    <Social key={idx} social={social}></Social>
  ));
  return (
    <Flex py={2} justifyItems={"center"}>
      {displaySocials}
    </Flex>
  );
};

const Home: NextPage = (props: any) => {
  return (
    <>
      <Box className={styles.main} px={[4, 10]}>
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"2xl"}
            src={props.data.artist.avatar}
            // alt={"Author"}
            css={{
              border: "2px solid white"
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {props.data.artist.name}
            </Heading>
            <Text color={"gray.500"}>{props.data.artist.shortBio}</Text>
            <Socials data={props.data} />
          </Stack>
        </Box>
        <Stack>
          <Flex alignItems={"center"} justify={"center"}>
            <Heading as="h1" textAlign={"center"} size="4xl">
              {props.data.project.name}
            </Heading>
          </Flex>
        </Stack>

        <Models data={props.data} />
      </Box>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await loadData();
  return { props: { data } };
};

export default Home;
