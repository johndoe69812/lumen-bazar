"use client";

import { CreateAdParamDTO } from "@/api";
import APIService from "@/api/api-service";
import { Form, Button, Table, Flex } from "antd";
import { FC, Key, useCallback, useMemo, useState } from "react";
import { getColumns } from "./get-columns";
import EditModal from "./modals/edit-modal/edit-modal";
import { useAllParams } from "../../shared/queries/use-all-params";

const AllParameters: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<number>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const { isLoading, data, refetch } = useAllParams();

  const handleAddParam = useCallback(
    async (values: CreateAdParamDTO) => {
      if (activeId) {
        await APIService.api.adsServiceUpdateAdParameter(activeId, values);
      } else {
        await APIService.api.adsServiceCreateParam(values);
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
      onFormFinish={async (_, { values }) => {
        try {
          await handleAddParam(values as CreateAdParamDTO);
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
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          dataSource={data}
          columns={columns}
        />
      </Flex>
    </Form.Provider>
  );
};

export default AllParameters;
