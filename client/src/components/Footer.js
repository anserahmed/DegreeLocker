import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whipurplepha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whipurplepha.200"),
            }}
            target="_blank"
            rel="noopener noreferrer"
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("purple.50", "purple.900")}
            color={useColorModeValue("purple.700", "purple.200")}
        >
            
            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("purple.200", "purple.700")}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text> Creators: Anser Ahmed , Rahul Kumar and Vishu Verma</Text>
                    <Stack direction={"row"} spacing={6}>
                        {/* <SocialButton label={"Github"} href={"https://github.com/DevelopersLeague/EtherDocs"}> */}
                            {/* <FaGithub /> */}
                        {/* </SocialButton> */}
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
