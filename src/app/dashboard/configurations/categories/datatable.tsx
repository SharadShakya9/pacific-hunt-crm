"use client";

import React, { useState } from "react";
import { Pagination, Select, Table } from "antd";
import type { TableProps } from "antd";
import { Category } from "@/app/dashboard/configurations/categories/columns";
import CategoryFilter from "@/components/Filter/CategoryFilter";

interface DataTableProps {
  columns: TableProps<Category>["columns"];
  data: Category[];
}

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const CategoryDataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Category> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  

  return (
    <>
      <CategoryFilter />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default CategoryDataTable;
