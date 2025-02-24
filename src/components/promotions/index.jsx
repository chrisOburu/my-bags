import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useRef, useState } from "react";

const messages = [
  "Free Shipping on all orders over $100",
  "Save 20% on your first order",
  "Get 10% off your next purchase",
];

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    let timeout;
    const cycleMessages = () => {
      setShow(false);
      timeout = setTimeout(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setShow(true);
      }, 1000); // Ensures animation completes before changing message
    };

    const interval = setInterval(cycleMessages, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide direction={show ? "left" : "right"} in={show} timeout={{ enter: 500, exit: 100}} container={containerRef.current}>
        <Box>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
