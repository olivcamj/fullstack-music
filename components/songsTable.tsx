import { Box } from "@chakra-ui/layout";
import { Table, Thead, Td, Tr, Th, Tbody, IconButton } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle} from "react-icons/ai";

const SongTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="#fff">
      <Box padding="16px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            aria-label="play"
            icon={<BsFillPlayFill fontSize="30px" />}
            colorScheme="green"
            size="lg"
            isRound
          />
        </Box>
      </Box>
      <Table variant="unstyled">
        <Thead borderBottom="1px solid" borderColor="rgba(255,255,255, .2)">
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Date added</Th>
            <Th>
              <AiOutlineClockCircle />
            </Th>
          </Tr>
        </Thead>
      </Table>
    </Box>
  );
};

export default SongTable;
