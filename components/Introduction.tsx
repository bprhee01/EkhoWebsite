import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { IconCheck, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';
import image from './image.svg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 3,

    [theme.fn.smallerThan('md')]: {
       display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function Intro() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Introducing <br /> Ekho
            </Title>
            <Text color="dimmed" mt="md">
              A monitoring tool to integrate Monolith Code to the Microservice Architecture
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Install Ekho</b> – Simply download our npm package and follow the <br/> <b>Get Started</b> page in the Docs.
              </List.Item>
              <List.Item>
                <b>Integrate your Codebase</b> – Use our wrapper function to surround your legacy module and follow the results in Ekho's UI
              </List.Item>
              <List.Item>
                <b>Free and Open-Source</b> – Anyone can use Ekho! Feel free to contribute to Ekho on our Github Page.
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="/docs" passHref>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              </Link>
              <Link href="https://github.com/oslabs-beta/Ekho" passHref>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Github <IconBrandGithub size={18} stroke={1.5} />
              </Button>
              </Link>
            </Group>
          </div>
          <Image src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg" className={classes.image} width={"100%"} />
        </div>
      </Container>
    </div>
  )}