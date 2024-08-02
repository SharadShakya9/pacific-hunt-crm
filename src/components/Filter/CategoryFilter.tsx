"use client";

import { DatePicker, Input, message, Select } from "antd";
import { Dayjs } from "dayjs";
import React from "react";
import { DropdownMenuRadioGroupDemo1 } from "../Dropdown1";
import { DropdownMenuRadioGroupDemo2 } from "../Dropdown2";

const { RangePicker } = DatePicker;

const handleChange = (value: number) => {
  console.log(`selected ${value}`);
};

// const handleMenuClick: MenuProps["onClick"] = (e) => {
//   message.info("Click on menu item.");
//   console.log("click", e);
// };

export type MenuProps = {
  label: string;
  key: string;
};

const spotlight: MenuProps[] = [
  {
    label: "All",
    key: "1",
  },
  {
    label: "Popular Categories",
    key: "2",
  },
];

const sortBy = [
  {
    label: "All",
    key: "1",
  },
  {
    label: "A-Z",
    key: "2",
  },
  {
    label: "Z-A",
    key: "2",
  },
];

const customFormat = (date: Dayjs | null): string => {
  if (!date) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.date();
  const month = months[date.month()];
  const year = date.year();

  return `${day} ${month}, ${year}`;
};

const CategoryFilter: React.FC = () => {
  return (
    <div className="mb-6 flex h-10 items-center justify-between">
      <div className="h-full">
        Show{" "}
        <Select
          defaultValue={10}
          options={[
            { value: 10, label: "10" },
            { value: 20, label: "20" },
            { value: 50, label: "50" },
            { value: 100, label: "100" },
          ]}
          onChange={handleChange}
        />{" "}
        per page
      </div>

      <div className="flex h-full gap-[14px]">
        <Input
          className="max-w-[140px]"
          prefix={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#6B6D6F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          placeholder="Search..."
        />

        <RangePicker
          className="h-full max-w-[260px] text-dark-2"
          separator={"to"}
          format={customFormat}
        />

        <DropdownMenuRadioGroupDemo1
          menuName="Spotlight"
          menuProps={spotlight}
        />

        <DropdownMenuRadioGroupDemo2 menuName="Sort By:" menuProps={sortBy} />
      </div>
    </div>
  );
};

export default CategoryFilter;
