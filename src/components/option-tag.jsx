import { Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";

const OptionTag = ({ icon, label, ...props }) => {
  return (
    <Tag {...props}>
      {icon && <TagLeftIcon as={icon} />}
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
};
export default OptionTag;

OptionTag.displayName = "OptionTag";
