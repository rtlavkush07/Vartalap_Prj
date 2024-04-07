import { Tooltip } from "@chakra-ui/tooltip";
import {Box} from "@chakra-ui/layout"
import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/button";


const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box>
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i class="fas fa-search"></i>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
