/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

const data = [
  {
    id: 1,
    title: "XT-4900",
    text: (
      <div>
        <p>* Solar powered</p>
        <p>* Integrated GPS receiver for tracking applications</p>
        <p>* Configurable, periodic reporting to extend battery charge</p>
        <p>* Over-the-air application firmware upgrade</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "XT-2400",
    text: (
      <div>
        <p>* Bluetooth interface for configurations</p>
        <p>* Solar powered with satellite communications</p>
        <p>* IP69K and MIL-STD-810G standards</p>
        <p>* Multiple mounting options available</p>
      </div>
    ),
  },
];

export default function WorkFlow() {
  return (
    <section
      style={{ backgroundColor: "white", marginBottom: "100px" }}
      sx={{ variant: "section.workflow" }}
    >
      <Container>
        <SectionHeader
          title="Satellite & GPS Tracking"
          description="Pepplo satellite and solar powered GPS tracking devices provide extended battery life, so you can still meet your location tracking needs while drastically reducing the amount of time and money spent on battery maintenance."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: "text.heading" }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, "left"],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: "special",
    color: "heading",
    lineHeight: 1,
    letterSpacing: "heading",
    mr: ["auto", null, 0, 4, null, null, null, 5],
    ml: ["auto", null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    description: {
      fontSize: [1, 2],
      fontWeight: "body",
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
