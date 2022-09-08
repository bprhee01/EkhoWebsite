import { createStyles, Box, Text, Group } from '@mantine/core';
import { IconListSearch } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.sm,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    fontWeight: 500,
    borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
}));

interface TableOfContentsProps {
}

export default function Sidebar() {
  const { classes, cx } = useStyles();


  return (
    <div>
      <Group mb="md">
        <IconListSearch size={18} stroke={1.5} />
        <Text>Table of contents</Text>
      </Group>
      <Box<'a'> component="a" href={"/"} onClick={(event) => event.preventDefault()} className={cx(classes.link)} sx={(theme) => ({ paddingLeft: theme.spacing.md })}>
      What is Ekho?
      </Box>
      <Box<'a'> component="a" href={"/"} onClick={(event) => event.preventDefault()} className={cx(classes.link)} sx={(theme) => ({ paddingLeft: theme.spacing.md })}>
      Core Features
      </Box>
      <Box<'a'> component="a" href={"/"} onClick={(event) => event.preventDefault()} className={cx(classes.link)} sx={(theme) => ({ paddingLeft: theme.spacing.md })}>
      Get Started
      </Box>
    </div>
  );
}