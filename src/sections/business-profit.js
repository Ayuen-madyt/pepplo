/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import mobileImage from "assets/images/mobileImage.png";
import ProfitThumb from "assets/images/business-profit.png";
import DrawingArrow from "assets/drawing-arrow.svg";

const data = {
  title: "Benefits of using Pepplo web API for fleet and assets tracking",
  description:
    "Pepplo's Web API allows broad control of Pepplo suite of vehicle tracking features from most programming environments. This allows anything from automated scripting of common tasks to seamless integration into customer user interfaces alongside other business-specific tools.",
  btnName: "Explore Details",
  btnURL: "#",
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Device Modification",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Position Updates",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Customized Notifications",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Messaging",
    },
  ],
};

export default function BusinessProfit() {
  return (
    <section sx={{ variant: "section.profit" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={mobileImage} alt="Thumbnail" width="700" height="565" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: "flex",
    order: [2, null, null, 0],
    mx: ["auto", 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 350, 400, "470px"],
    pb: [7, null, null, 0],
    ".btn__link": {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: "absolute",
    bottom: -185,
    left: "33%",
    display: ["none", null, null, null, null, null, null, "block"],
  },
};
