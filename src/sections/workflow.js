/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

const data = [
  {
    id: 1,
    title: "TRUCK FLEETS",
    text: "Monitor a truck's fleet cargo to ensure the ship is delivered to its destination safely and in good condition.",
  },
  {
    id: 2,
    title: "HEAVY EQUIPMENT",
    text: "Mitigate and reduce theft by tracking equipment in real time while keeping heavy equipments fleet maintained.",
  },
  {
    id: 3,
    title: "OIL AND GAS",
    text: "Remotely monitor the status and content level of oil & gas transportation equipment with fleet management software.",
  },
  {
    id: 4,
    title: "CONSTRUCTION",
    text: "Track a construction fleet vehicle's performance and vehicles location to help safeguard their vailable assets in real time.",
  },
  {
    id: 5,
    title: "PUBLIC SAFETY",
    text: "Knowing the location of every emergency vehicle asset at all times with Gps fleet tracking is critical in emergency response situations.",
  },
  {
    id: 6,
    title: "OTHER",
    text: "Monitor a variety of assets: Monile Service Providers, RVs , Executive fleets, Lawn care and landscaping.",
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: "section.workflow" }}>
      <Container>
        <SectionHeader
          title="Industries we serve"
          description="Our solutions can be found in light vehicle fleets, large trucks in commercial shipping, heavy equipment in construction, snow plows and street sweepers, public safety vehicles, and many others."
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
