import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import ColorSwitcher from '../components/color-switcher'
import Faq from '../components/faq'
import faqs from '../data/faq'

const RSVP_URL = 'https://rsvp.hackclub.community/pitstop'
const SLACK_URL = 'https://app.slack.com/client/E09V59WQY1E/C0BLRSUAWPR'
const newTabProps = { target: '_blank', rel: 'noopener noreferrer' }

const ImagePlaceholder = ({ label, ratio = '16 / 9', ...props }) => (
  <Box
    role="img"
    aria-label={label}
    sx={{
      width: '100%',
      aspectRatio: ratio,
      '@supports not (aspect-ratio: 1)': {
        minHeight: [200, 280]
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 'extra',
      backgroundImage: t => t.util.gx('orange', 'red'),
      color: 'white',
      boxShadow: 'elevated',
      ...props.sx
    }}
  >
    <Text
      as="span"
      sx={{
        px: 3,
        fontSize: [1, 2],
        fontWeight: 'bold',
        letterSpacing: 'headline',
        textTransform: 'uppercase',
        opacity: 0.9
      }}
    >
      {label}
    </Text>
  </Box>
)

const steps = [
  {
    n: '01',
    title: 'Build',
    body: 'Dream up a hardware or automotive software project — a go-kart dashboard, telemetry rig, custom controller, anything you can imagine.'
  },
  {
    n: '02',
    title: 'Earn your spot',
    body: 'The most impressive builds earn a place on the final crew flying out to Japan.'
  },
  {
    n: '03',
    title: 'Build & race',
    body: 'Team up with builders from around the world, build real go-karts, and race them in Japan.'
  }
]

const PitstopPage = () => (
  <>
    <Head>
      <Meta
        name="Pitstop"
        title="Hack in Japan, Race Your Go-Kart"
        description="Pitstop is a Hack Club event where teens build hardware & automotive software to earn a spot building and racing real go-karts in Japan."
      />
    </Head>

    {/* Section 1: Hero */}
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
      <ImagePlaceholder
        label="Pitstop event banner — go-karts racing in Japan"
        ratio={['16 / 9', '21 / 9']}
        sx={{ borderRadius: 0, boxShadow: 'none' }}
      />
      <Container sx={{ position: 'relative' }}>
        <Flex
          as="nav"
          sx={{ alignItems: 'center', justifyContent: 'space-between', py: 3 }}
        >
          <Flex sx={{ alignItems: 'center', gap: 2 }}>
            <Text as="span" aria-hidden="true" sx={{ fontSize: 3 }}>
              🏎️
            </Text>
            <Heading as="p" variant="subheadline" sx={{ mb: 0, fontSize: 3 }}>
              Pitstop
            </Heading>
          </Flex>
        </Flex>
        <ColorSwitcher />
      </Container>
      <Container sx={{ pt: [4, 5], pb: [4, 5], textAlign: 'center' }}>
        <Badge
          variant="pill"
          bg="orange"
          color="background"
          sx={{ mb: 3, textTransform: 'uppercase' }}
        >
          A Hack Club event
        </Badge>
        <Heading as="h1" variant="ultratitle">
          Hack in Japan.
          <Text
            as="span"
            sx={t => ({ display: 'block', ...t.util.gxText('orange', 'red') })}
          >
            Race your go-kart.
          </Text>
        </Heading>
        <Text
          as="p"
          variant="lead"
          sx={{ maxWidth: 'copy', mx: 'auto', color: 'secondary' }}
        >
          Pitstop is an international Hack Club event where teenagers build
          hardware and automotive software to earn a spot building and racing
          real go-karts in Japan.
        </Text>
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            mt: 4,
            mb: 2
          }}
        >
          <Button as="a" variant="ctaLg" href={RSVP_URL} {...newTabProps}>
            RSVP Now
          </Button>
          <Button as="a" variant="outlineLg" href={SLACK_URL} {...newTabProps}>
            Join the Slack
          </Button>
        </Flex>
        <Text as="p" variant="caption" sx={{ mt: 3, mb: 0 }}>
          Free · Open to teens worldwide · More details coming soon
        </Text>
      </Container>
    </Box>

    {/* Section 2: About / Event concept */}
    <Box as="section" sx={{ bg: 'background', py: [4, 5] }}>
      <Container>
        <Grid
          columns={[1, '1.05fr 0.95fr']}
          gap={[4, 5]}
          sx={{ alignItems: 'center' }}
        >
          <Box>
            <Text as="p" variant="eyebrow" color="primary">
              About the event
            </Text>
            <Heading as="h2" variant="title" sx={{ mt: 1 }}>
              Build something awesome. Earn a ticket to Japan.
            </Heading>
            <Text as="p" variant="lead" sx={{ color: 'secondary', mb: 0 }}>
              Pitstop is Hack Club’s go-kart challenge. Around the world,
              teenagers are building hardware projects and automotive software —
              dashboards, telemetry rigs, controllers, and everything in between
              — to earn a spot on the final crew.
            </Text>
            <Text
              as="p"
              variant="lead"
              sx={{ color: 'secondary', mt: 2, mb: 0 }}
            >
              Finalists fly to Japan, team up with builders from other
              countries, and build and race real go-karts together.
            </Text>
          </Box>
          <ImagePlaceholder
            label="Event photos & media"
            ratio={['4 / 3', '1 / 1']}
            sx={{ boxShadow: 'card' }}
          />
        </Grid>
        <Grid columns={[1, 3]} gap={3} sx={{ mt: [4, 5] }}>
          {steps.map(step => (
            <Card
              key={step.n}
              variant="interactive"
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Text
                as="p"
                variant="eyebrow"
                color="primary"
                sx={{ fontSize: 3, letterSpacing: 'headline' }}
              >
                {step.n}
              </Text>
              <Heading as="h3" variant="subheadline" sx={{ mt: 1, mb: 2 }}>
                {step.title}
              </Heading>
              <Text as="p" sx={{ color: 'secondary', mt: 0, mb: 0 }}>
                {step.body}
              </Text>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Section 3: FAQ */}
    <Box as="section" sx={{ bg: 'sunken', py: [4, 5] }}>
      <Container sx={{ maxWidth: 'copyPlus' }}>
        <Text
          as="p"
          variant="eyebrow"
          sx={{ textAlign: 'center', color: 'primary' }}
        >
          Questions
        </Text>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', mt: 1, mb: 4 }}
        >
          Frequently asked questions
        </Heading>
        <Faq items={faqs} />
      </Container>
    </Box>

    {/* Section 4: Footer */}
    <Box as="footer" sx={{ bg: 'darker', color: 'snow' }}>
      <Container sx={{ py: [4, 5] }}>
        <Grid columns={[1, null, 3]} gap={[4, 5]}>
          <Box>
            <Heading as="p" variant="subheadline" color="white" sx={{ mb: 2 }}>
              🏎️ Pitstop
            </Heading>
            <Text as="p" sx={{ color: 'muted', fontSize: 1, mb: 0 }}>
              A Hack Club event where teens build hardware & software to race
              real go-karts in Japan.
            </Text>
          </Box>
          <Box>
            <Heading as="p" variant="subheadline" color="white" sx={{ mb: 2 }}>
              Get involved
            </Heading>
            <Flex sx={{ flexDirection: 'column' }}>
              <Link
                href={RSVP_URL}
                {...newTabProps}
                sx={{ color: 'smoke', py: 1, fontSize: 1 }}
              >
                RSVP Now
              </Link>
              <Link
                href={SLACK_URL}
                {...newTabProps}
                sx={{ color: 'smoke', py: 1, fontSize: 1 }}
              >
                Join the Slack
              </Link>
            </Flex>
          </Box>
          <Box>
            <Heading as="p" variant="subheadline" color="white" sx={{ mb: 2 }}>
              Hack Club
            </Heading>
            <Text as="p" sx={{ color: 'muted', fontSize: 1, mb: 0 }}>
              A worldwide nonprofit network of teen hackers & coding clubs.{' '}
              <Link
                href="https://hackclub.com"
                {...newTabProps}
                sx={{ color: 'smoke' }}
              >
                hackclub.com
              </Link>
            </Text>
          </Box>
        </Grid>
        <Text
          as="p"
          variant="caption"
          sx={{ mt: 5, mb: 0, textAlign: 'center', color: 'muted' }}
        >
          © {new Date().getFullYear()} Hack Club · Made with ❤ by teens, for
          teens
        </Text>
      </Container>
    </Box>
  </>
)

export default PitstopPage
