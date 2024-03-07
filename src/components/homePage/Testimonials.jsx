import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const userTestimonials = [
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name: 'Jonathan W',
    occupation: 'Master of the Realm',
    testimonial:
    "As a veteran Dungeon Master, I've tried numerous tools, but none compare to this app! Its intuitive interface and customizable features have revolutionized the way I run my campaigns. Highly recommended!"  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
    name: 'Travis Howard',
    occupation: 'Dungeon Delver',
    testimonial:
    "I was skeptical at first, but this app exceeded my expectations! It's like having a virtual assistant for DMing. From tracking player stats to creating immersive worlds, it does it all. Thank you for making my life as a DM so much easier!"  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
    name: 'Cindy Baker',
    occupation: 'Story Weaver',
    testimonial:
    "This app is a game-changer for both novice and experienced DMs alike. Its user-friendly design helped me transition from paper-based campaigns to digital with ease. Now, I can focus more on storytelling and less on administrative tasks!"  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: 'Julia Stewart',
    occupation: 'Quest Conqueror',
    testimonial:
    "I've been using this app for months now, and I'm continually impressed by its versatility. Whether I'm running a one-shot adventure or a long-term campaign, it adapts to my needs seamlessly. Plus, the ability to save results has been a lifesaver!"  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: 'John Smith',
    occupation: 'Adventure Architect',
    testimonial:
    "Wow, just wow! This app has completely transformed the way I DM. It's like having a toolbox filled with all the tools I need to create unforgettable adventures. Plus, the donation feature allows me to give back to the DM community—a win-win!"  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: 'Daniel Wolf',
    occupation: 'Realm Ruler',
    testimonial:
    "I can't imagine DMing without this app now. It's become an essential part of my storytelling process. The customizable dashboards and player tracking features have elevated my campaigns to new heights. Thank you for such a fantastic tool!"  },
];



export default function Testimonials() {

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}