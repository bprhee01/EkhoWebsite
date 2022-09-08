import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link'


const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function MyHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

 

  return (
    <Header height={56} mb={60}>
      <Container className={classes.inner}>
    
        <Group spacing={"sm"}  position="left" noWrap>
              <a className={classes.link} href={"/"}> Home </a>
              <a className={classes.link} href={"/docs"}> Docs </a>
        </Group>

        <Group position="middle"><a target="_blank" href="/" ><img src="https://i.imgur.com/H3p6BsQ.png" title="source: imgur.com" /></a> </Group>

       <Group spacing="sm" position="right" noWrap>

        <Link target="_blank" href="https://twitter.com/Ekho_MS?lang=en" passHref>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
        </Link>

        <Link target="_blank" href="https://github.com/oslabs-beta/Ekho" passHref>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/company/ekho-ms/" passHref>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Link>

        </Group>

      </Container>
    </Header>
    
  )}