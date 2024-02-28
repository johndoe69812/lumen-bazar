"use client";

import { AdParamSchema } from "@/api";
import APIService from "@/api/api-service";
import { Form, Button, Table, Flex } from "antd";
import { Key, useCallback, useMemo, useState } from "react";
import { getColumns } from "./get-columns";
import EditModal from "./modals/edit-modal";
import { useAllParams } from "./use-all-params";

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: AdParamSchema[]) => {},
  getCheckboxProps: (record: AdParamSchema) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const AllParameters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<number>();

  const { isLoading, error, data, refetch } = useAllParams();

  const handleAddParam = useCallback(
    async (name: string, category: number) => {
      if (activeId) {
        await APIService.api.adsServiceUpdateAdParameter(activeId, {
          name,
          categoryId: category,
        });
      } else {
        await APIService.api.adsServiceCreateParam({
          name,
          categories: [category],
        });
      }

      refetch();
    },
    [activeId, refetch]
  );

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setActiveId(undefined);
  }, []);

  const handleDelete = useCallback(
    async (id: Key) => {
      try {
        APIService.api.adsServiceDeleteAdParameter(id as number);
        refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [refetch]
  );

  const handleEdit = useCallback(async (id: Key) => {
    setIsModalOpen(true);

    setActiveId(id as number);
  }, []);

  const columns = useMemo(
    () => getColumns({ onEdit: handleEdit, onDelete: handleDelete }),
    [handleEdit, handleDelete]
  );

  return (
    <Form.Provider
      onFormFinish={async (name, { values, forms }) => {
        if (name !== "adParam") return;

        try {
          await handleAddParam(values["name"], values["category"]);
          handleCloseModal();
        } catch (e) {
          console.error(e);
        }
      }}
    >
      <Flex gap={10} vertical>
        <div>
          <Button type="primary" onClick={handleOpenModal}>
            Add new parameter
          </Button>
        </div>
        <EditModal
          id={activeId}
          open={isModalOpen}
          onCancel={handleCloseModal}
        />
        <Table
          loading={isLoading}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          dataSource={data}
          columns={columns}
        />
      </Flex>
    </Form.Provider>
  );
};

export default AllParameters;
