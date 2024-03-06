import { AdCategorySchema } from "@/api";
import { useDeleteCategory } from "@/app/sudo/shared/queries/categories/use-delete-category";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Button, Flex, Popconfirm, Tooltip, notification } from "antd";

type Props = AdCategorySchema;

const CategoryTreeItem = (props: Props) => {
  const { title, id, subCategories } = props;

  const { mutate } = useDeleteCategory();

  const handleConfirmDelete = () => {
    if (!subCategories) mutate(id);
    else
      notification.warning({
        message: "Category can't be deleted",
        description: "Please remove all subcategories first",
      });
  };

  return (
    <Flex
      gap={4}
      align="center"
      justify="space-between"
      style={{ height: 50, fontWeight: 500, padding: "0 20px" }}
    >
      <span>{title}</span>
      <Flex gap={8}>
        <Tooltip title="Update creating form for this category">
          <Button
            size="small"
            icon={<FormOutlined />}
            href={`/sudo/form-constructor/${id}`}
          />
        </Tooltip>
        <Tooltip title="Delete this category">
          <Popconfirm
            title="Delete category"
            description="Are you sure to delete selected category?"
            onConfirm={handleConfirmDelete}
          >
            <Button size="small" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default CategoryTreeItem;
