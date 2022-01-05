import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image, Skeleton } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import { artistsData } from "../prisma/songsData";
import { useMe } from "../lib/hooks";

const Home = () => {
  const { user, isLoading } = useMe();

  const dataLoading = () => {
    if (isLoading) {
      return <Skeleton height="25px" width="255px" marginBottom="15px"/>;
    }
  };

  return (
    <GradientLayout
      roundImage
      color="gray"
      subtitle="profile"
      title={isLoading ? dataLoading() : `${user?.firstName} ${user?.lastName}`}
      description={
        isLoading ? dataLoading() : `${user?.playlistsCount} public playlists`
      }
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="sm">only visible to you</Text>
        </Box>
        <Flex>
          {artistsData.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="15px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};
export default Home;
