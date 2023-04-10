import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectorSort: (sort: string) => void;
  selectorSortOrder: string;
}

const SortSelector = ({ onSelectorSort, selectorSortOrder }: Props) => {
  const sortItems = [
    {
      value: "",
      label: "Order by Relevance",
    },
    {
      value: "name",
      label: "name",
    },
    {
      value: "-added",
      label: "latest",
    },
    {
      value: "metacritic",
      label: "metacritic",
    },
    {
      value: "-rating",
      label: "average rating",
    },
  ];

  const currentSortOrder = sortItems.find(
    (sort) => sort.value === selectorSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button}>
        {currentSortOrder?.label || "Order by Relevance"}
      </MenuButton>
      <MenuList>
        {sortItems.map((sort) => (
          <MenuItem
            key={sort.label}
            value={sort.value}
            onClick={() => onSelectorSort(sort.value)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
