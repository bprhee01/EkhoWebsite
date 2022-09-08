import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme } from '@mantine/core';
import ProfileCard from './ProfileCards';

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function ProfileCardHolder() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        <ProfileCard avatar="https://i.imgur.com/qMPSjKd.jpg" name="Jason Clark" linkedin="https://www.linkedin.com/in/clarkjasonee/"github="https://github.com/clarkjasone" />
        <ProfileCard avatar="https://i.imgur.com/XD9MjUU.jpg" name="Ben Rhee" linkedin="https://www.linkedin.com/in/thebenrhee/" github="https://github.com/bprhee01"/>
        <ProfileCard avatar="https://i.imgur.com/3rzQrBd.jpg" name="Nick Krug" linkedin="https://www.linkedin.com/in/nicholas-e-krug/" github="https://github.com/nekrug"/>
        <ProfileCard avatar="https://i.imgur.com/XH3ZLSR.jpg" name="Alex Cheung" linkedin="https://www.linkedin.com/in/alexandercheung1213/" github="https://github.com/awcheung1213"/>
      </SimpleGrid>
    </Container>
  );
}