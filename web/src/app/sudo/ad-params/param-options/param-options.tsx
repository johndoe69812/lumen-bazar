"use client";

import { Button, Divider, Flex, Form, Popconfirm, Space, Table } from "antd";
import { getColumns } from "./get-columns";
import { FC, Key, useCallback, useMemo, useState } from "react";
import { useAllOptions } from "../../shared/queries/use-all-options";
import { ParamOptionSchema } from "@/api/__generated__/generated-api";
import EditModal from "./modals/edit-modal";
import APIService from "@/api/api-service";

const ParamOptions: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<number>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const { isLoading, data, refetch } = useAllOptions();

  const columns = useMemo(() => getColumns(), []);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setActiveId(undefined);
  }, []);

  const handleAddOptions = useCallback(
    async (name: string, { values }: { values: unknown }) => {
      try {
        await APIService.api.adsServiceCreateOptions(
          values as ParamOptionSchema
        );

        handleCloseModal();
        refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [refetch, handleCloseModal]
  );

  const handleDelete = useCallback(async () => {
    try {
      await APIService.api.adsServiceDeleteOptions({
        ids: selectedRowKeys as number[],
      });
      refetch();
      setSelectedRowKeys([]);
    } catch (e) {
      console.error(e);
    }
  }, [selectedRowKeys, refetch]);

  return (
    <Form.Provider onFormFinish={handleAddOptions}>
      <Flex gap={10} vertical>
        <Space>
          <Button type="primary" onClick={handleOpenModal}>
            Add new option
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title="Delete options"
            description="Are you sure to delete selected options?"
            onConfirm={handleDelete}
          >
            <Button disabled={selectedRowKeys.length === 0}>
              Delete selected
            </Button>
          </Popconfirm>
        </Space>
        <EditModal
          id={activeId}
          open={isModalOpen}
          onCancel={handleCloseModal}
        />
        <Table
          loading={isLoading}
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          dataSource={data}
          columns={columns}
          rowKey={(row) => row.id}
        />
      </Flex>
    </Form.Provider>
  );
};

export default ParamOptions;
