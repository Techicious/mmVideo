import React from "react";
import { Box, Flex, Text } from "@100mslive/roomkit-react";
import PlaceholderBg from "../images/first_person.png";

export const FirstPersonDisplay = React.memo(() => {
  return (
    <Box
      css={{
        position: "relative",
        overflow: "hidden",
        w: "37.5rem",
        maxWidth: "80%",
        h: "100%",
        r: "$3",
        m: "0 auto",
        // backgroundImage: `url(${PlaceholderBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "@md": {
          w: "100%",
          maxWidth: "unset",
        },
      }}
      data-testid="first_person_img"
    >
      <Flex
        align="center"
        direction="column"
        css={{
          position: "absolute",
          w: "100%",
          top: "33.33%",
          left: 0,
          textAlign: "center",
        }}
      >
        <Text color="white" variant="h4" css={{ "@md": { fontSize: "$md" } }}>
          Welcome to Mind Meadow
        </Text>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$4", "@md": { fontSize: "$sm" } }}
        >
          {/* You’re the first one here. */}
        </Text>
        <Text
          color="white"
          variant="h6"
          css={{ mt: "$2", "@md": { fontSize: "$sm" } }}
        >
          Therapist will join shortly!
        </Text>
      </Flex>
    </Box>
  );
});
