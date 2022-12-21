import { Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <div classname='appCard'>
      <box>
        <Image src={imageSrc} alt="Card Image"></Image>
        <box p={5}>
          <Stack>
          <text as="h2" fontWeight="normal" style={{fontWeight: 'bold'}}> {title}</text>
          <text> {description}</text>
          <a>
            Learn More 
          </a>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/> 
          </Stack>
        </box>
      </box>
    </div>
  )
};

export default Card;
