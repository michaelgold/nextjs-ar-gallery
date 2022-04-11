import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
const Model = dynamic(() => import("../components/model"), { ssr: false });

const Attribute = (props: any) => {
  const attribute = props.attribute;
  const trait_type = attribute.trait_type;
  const value = attribute.value;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"2"}
      shadow={"md"}
      //   border={"1px solid"}
      //   borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel
        textTransform={"uppercase"}
        fontWeight={"medium"}
        fontSize={"xx-small"}
        isTruncated
      >
        {trait_type}
      </StatLabel>
      <StatNumber
        textTransform={"capitalize"}
        mt={"-1.5"}
        fontSize={"2xl"}
        fontWeight={"medium"}
      >
        {value}
      </StatNumber>
    </Stat>
  );
};

const AttributeList = (props: any) => {
  const attributes = props.attributes;
  const displayAttributes = attributes.map((attribute: any, idx: any) => (
    <Attribute key={idx} attribute={attribute}></Attribute>
  ));
  return (
    <SimpleGrid columns={{ base: 2 }} spacing={{ base: 5, lg: 8 }}>
      {displayAttributes}
    </SimpleGrid>
  );
};

export default function CardModel(props: any) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} pos={"relative"}>
          <Model
            w={"full"}
            h={"full"}
            glbFile={props.model.glbFile}
            usdzFile={props.model.usdzFile}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          {/* <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack> */}
          <AttributeList attributes={props.model.attributes} />
        </Stack>
      </Box>
    </Center>
  );
}
