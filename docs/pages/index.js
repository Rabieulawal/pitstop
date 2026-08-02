import { Badge, Box, Button, Card, Container, Flex, Grid, Heading, Link, Text } from 'theme-ui';
import Head from 'next/head'
import Meta from '@hackclub/meta'
import ColorSwitcher from '../components/color-switcher'
import Faq from '../components/faq'
import faqs from '../data/faq';

const RSVP_URL = 'https://rsvp.hackclub.community/pitstop'
const SLACK_URL = 'https://app.slack.com/client/E09V59WQY1E/C0BLRSUAWPR'
const extProps = { target: '_blank', rel: 'noopener noreferrer' }

const Img = ({ alt, src = 'https://up.alimad.co/f/w.webp', ratio = '16 / 9', sx }) => (
  <Box
    as="img"
    src={src}
    alt={alt}
    sx={{
      width: '100%',
      height: 'auto',
      aspectRatio: ratio,
      objectFit: 'cover',
      borderRadius: 'extra',
      boxShadow: 'elevated',
      ...sx
    }}
  />
)

const steps = [
  { n: '01', title: 'Build & Ship', body: 'Build a hardware or software project. A go-kart dashboard, telemetry rig, or anything you can imagine. Ship it.' },
  { n: '02', title: 'Earn your spot', body: 'The most impressive projects earn a place on the final crew flying out to Japan.' },
  { n: '03', title: 'Race', body: 'Team up with builders from around the world, build go-karts, and race them in Japan :D' }
]

export default function PitstopPage() {
  return (
    <>
      <Head>
        <Meta
          name="Pitstop"
          title="Hack up a project, Race in Japan"
          description="Pitstop is a Hack Club event where teens build hardware & automotive software to earn a spot building and racing real go-karts in Japan."
        />
      </Head>

      <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
        <Container sx={{ position: 'relative' }}>
          <Flex as="nav" sx={{ alignItems: 'center', justifyContent: 'space-between', py: 3 }}>
            <Flex sx={{ alignItems: 'center', gap: 2 }}>
              {/** we can have a logo here later whenever we have it :P */}
              <Heading as="p" variant="subheadline" sx={{ mb: 0, fontSize: 3 }}>
                <Link href="https://pitstop.alimad.co" {...extProps} sx={{ color: 'smoke' }}>Pitstop</Link>
              </Heading>
            </Flex>
          </Flex>
          <ColorSwitcher />
        </Container>

        <Container sx={{ py: [4, 5], textAlign: 'center' }}>
          <Badge variant="pill" bg="green" color="background" sx={{ mb: 3, textTransform: 'uppercase' }}>
            A Hack Club event
          </Badge>
          <Heading as="h1" variant="ultratitle">
            Hack up a project.
            <Text as="span" sx={t => ({ display: 'block', padding: "8px", ...t.util.gxText('green', 'blue') })}>
              Race in Japan.
            </Text>
          </Heading>
          <Text as="p" variant="lead" sx={{ maxWidth: 'copy', mx: 'auto', color: 'secondary' }}>
            Pitstop is an international Hack Club event where teenagers build hardware and automotive software to earn a spot building and racing real go-karts in Japan :D
          </Text>
          <Flex sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 3, mt: 4, mb: 2 }}>
            <Button as="a" variant="ctaLg" href={RSVP_URL} {...extProps}>RSVP Now</Button>
            <Button as="a" variant="outlineLg" href={SLACK_URL} {...extProps}>Join the Slack</Button>
          </Flex>
          <Text as="p" variant="caption" sx={{ mt: 3, mb: 0 }}>
            Free · Open to students and teenagers worldwide · More details coming soon :tm:
          </Text>
        </Container>
      </Box>

      <Box as="section" sx={{ bg: 'background', py: [4, 5] }}>
        <Container>
          <Grid columns={[1, '1.05fr 0.95fr']} gap={[4, 5]} sx={{ alignItems: 'center' }}>
            <Box>
              <Text as="p" variant="eyebrow" color="primary">About the event</Text>
              <Heading as="h2" variant="title" sx={{ mt: 1 }}>Build something awesome. Earn a ticket to Japan.</Heading>
              <Text as="p" variant="lead" sx={{ color: 'secondary', mb: 0 }}>
                Pitstop is a Hack Club’s go-kart challenge. Around the world, teenagers are building hardware projects and automotive software — dashboards, telemetry rigs, controllers, and everything in between — to earn a spot on the final crew.
              </Text>
              <Text as="p" variant="lead" sx={{ color: 'secondary', mt: 2, mb: 0 }}>
                Finalists fly to Japan, team up with builders from other countries, and build and race real go-karts together.
              </Text>
            </Box>
            <Img alt="Event photos & media" ratio={['4 / 3', '1 / 1']} sx={{ boxShadow: 'card' }} />
          </Grid>

          <Grid columns={[1, 3]} gap={3} sx={{ mt: [4, 5] }}>
            {steps.map(s => (
              <Card key={s.n} variant="interactive" sx={{ display: 'flex', flexDirection: 'column' }}>
                <Text as="p" variant="eyebrow" color="primary" sx={{ fontSize: 3, letterSpacing: 'headline' }}>{s.n}</Text>
                <Heading as="h3" variant="subheadline" sx={{ mt: 1, mb: 2 }}>{s.title}</Heading>
                <Text as="p" sx={{ color: 'secondary', my: 0 }}>{s.body}</Text>
              </Card>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box as="section" sx={{ bg: 'sunken', py: [4, 5] }}>
        <Container sx={{ maxWidth: 'copyPlus' }}>
          <Text as="p" variant="eyebrow" sx={{ textAlign: 'center', color: 'primary' }}>Questions</Text>
          <Heading as="h2" variant="title" sx={{ textAlign: 'center', mt: 1, mb: 4 }}>Frequently asked questions</Heading>
          <Faq items={faqs} />
        </Container>
      </Box>

      <Box as="footer" sx={{ bg: 'darker', color: 'snow' }}>
        <Container sx={{ py: [4, 5] }}>
          <Grid columns={[1, null, 3]} gap={[4, 5]}>
            <Box>
              <Heading as="p" variant="subheadline" color="white" sx={{ mb: 2 }}>Pitstop</Heading>
              <Text as="p" sx={{ color: 'muted', fontSize: 1, mb: 0 }}>
                A Hack Club event where teens build hardware & software to race real go-karts in Japan.
              </Text>
            </Box>
            <Box>
              <Heading as="p" variant="subheadline" color="white" sx={{ mb: 2 }}>Get involved</Heading>
              <Flex sx={{ flexDirection: 'column' }}>
                <Link href={RSVP_URL} {...extProps} sx={{ color: 'smoke', py: 1, fontSize: 1 }}>RSVP Now</Link>
                <Link href={SLACK_URL} {...extProps} sx={{ color: 'smoke', py: 1, fontSize: 1 }}>Join the Slack</Link>
              </Flex>
            </Box>
            <Box>
              <Heading as="p" variant="subheadline" color="white" sx={{ mb: 2 }}>
                <Link href="https://hackclub.com" {...extProps} sx={{ color: 'smoke' }}>HackClub</Link>
              </Heading>
              <Text as="p" sx={{ color: 'muted', fontSize: 1, mb: 0 }}>
                A worldwide nonprofit network of teen hackers & coding clubs.
              </Text>
            </Box>
          </Grid>
          <Text as="p" variant="caption" sx={{ mt: 5, mb: 0, textAlign: 'center', color: 'muted' }}>
            © {new Date().getFullYear()} Hack Club · Made by teens, for teens &gt;:)
          </Text>
        </Container>
      </Box>
    </>
  )
}