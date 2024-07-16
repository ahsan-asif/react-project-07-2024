import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortSelector: (sort: string) => void;
  sortOrder: string;
}

const SortSelector = ({ sortOrder, onSortSelector }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find((sort) => sort.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => onSortSelector(sort.value)}
          >
            {" "}
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
