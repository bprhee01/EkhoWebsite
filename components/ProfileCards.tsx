import { createStyles, Card, Avatar, Text, Group, Button } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    paddingRight: "5px",
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

interface UserCardImageProps {
  avatar: string;
  name: string;
  linkedin: string;
  github: string;
}

export default function ProfileCard({avatar, name, linkedin, github}: UserCardImageProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ height: 60 }} />
      <Avatar src={avatar} size={100} radius={100} mx="auto" mt={-30} className={classes.avatar} />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        Software Engineer
      </Text>
      <Link href={linkedin} passHref>
        <Button fullWidth radius="md" mt="xl" size="md" color={theme.colorScheme === 'light' ? undefined : 'dark'} >
            LinkedIn  <IconBrandLinkedin size={18} stroke={1.5} />
        </Button>
      </Link>
      <Link href={github} passHref>
        <Button fullWidth radius="md" mt="xl" size="md" color={theme.colorScheme === 'dark' ? undefined : 'dark'} >
            Github  <IconBrandGithub size={18} stroke={1.5} />
        </Button>
      </Link>
    </Card>
  );
}
