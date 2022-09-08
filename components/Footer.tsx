import { createStyles, Anchor, Group, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[5]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function MyFooter() {
  const { classes } = useStyles();


  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group spacing="sm" position="left" noWrap>
            <a target="_blank" href="/"><img src="https://i.imgur.com/H3p6BsQ.png" title="source: imgur.com" /></a>
        </Group>


        <div> © 2022 Ekho | MIT License</div>

        <Group spacing="xs" position="right" noWrap>

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
      </div>
    </div>
  );
}

