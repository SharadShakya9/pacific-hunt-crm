"use client";

import React from "react";
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { formatDate } from "@/lib/dateHelper";

export interface Category {
  key: React.Key;
  serial: number;
  name: string;
  createdOn: string;
  spotlight: boolean;
  status: boolean;
};

export const columns: TableProps<Category>['columns'] = [
  {
    dataIndex: "serial",
    title: () => <div className="text-16-500 text-left text-dark-2">S.N</div>,
    render: (check, record) => (
        <p className="text-14-400 text-left text-dark-2">{record.serial}</p>
    )
  },
  {
    dataIndex: "name",
    title: () => (
      <div className="text-16-500 text-left text-dark-2">Categories Name</div>
    ),
    render: (check, record) => (
      <p className="text-14-400 text-left text-dark-2">
        {record.name}
      </p>
    ),
  },
  {
    dataIndex: "createdOn",
    title: () => (
      <div className="text-16-500 text-left text-dark-2">Created On</div>
    ),
    render: (check, record) => {
      return <p className="text-14-400 text-left text-dark-2">{formatDate(record.createdOn)}</p>;
    },
  },
  {
    dataIndex: "spotlight",
    title: () => (
      <div className="text-16-500 text-left text-dark-2">Spotlight</div>
    ),
    render: (check, record) => {
      return (
        <>
          <div className="flex justify-between">
            <div>
              {record.spotlight ? (
                <div className="rounded-[30px] bg-green-1 px-4 py-3">
                  <p className="text-14-500 text-green-2">Popular Categories</p>
                </div>
              ) : (
                <div className="flex h-[36px] w-[60px] items-start justify-center">
                  <p className="text-14-400 text-dark-2">N/A</p>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="popular"
                className="group flex gap-2 rounded border border-dark-7 px-[8px] py-[12px] has-[:checked]:border-blue-1 has-[:checked]:bg-light-3"
              >
                <input
                  id="popular"
                  type="checkbox"
                  className="peer appearance-none"
                  checked={record.spotlight}
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="hidden group-has-[:checked]:inline"
                    d="M5.14286 0C3.77889 0 2.47078 0.541835 1.50631 1.50631C0.541835 2.47078 0 3.77889 0 5.14286V18.8571C0 20.2211 0.541835 21.5292 1.50631 22.4937C2.47078 23.4582 3.77889 24 5.14286 24H18.8571C20.2211 24 21.5292 23.4582 22.4937 22.4937C23.4582 21.5292 24 20.2211 24 18.8571V5.14286C24 3.77889 23.4582 2.47078 22.4937 1.50631C21.5292 0.541835 20.2211 0 18.8571 0H5.14286ZM17.7497 9.17829L10.8926 16.0354C10.813 16.1153 10.7184 16.1786 10.6142 16.2218C10.5101 16.265 10.3985 16.2872 10.2857 16.2872C10.173 16.2872 10.0613 16.265 9.9572 16.2218C9.85307 16.1786 9.75848 16.1153 9.67886 16.0354L6.25029 12.6069C6.08934 12.4459 5.99892 12.2276 5.99892 12C5.99892 11.7724 6.08934 11.5541 6.25029 11.3931C6.41123 11.2322 6.62953 11.1418 6.85714 11.1418C7.08476 11.1418 7.30305 11.2322 7.464 11.3931L10.2857 14.2166L16.536 7.96457C16.6969 7.80362 16.9152 7.7132 17.1429 7.7132C17.3705 7.7132 17.5888 7.80362 17.7497 7.96457C17.9107 8.12552 18.0011 8.34381 18.0011 8.57143C18.0011 8.79904 17.9107 9.01734 17.7497 9.17829Z"
                    fill="#01A3E0"
                  />
                  <rect
                    className="group-has-[:checked]:hidden"
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="3.5"
                    stroke="#AFB0B1"
                  />
                </svg>

                <span className="text-16-400 text-dark-3 group-has-[:checked]:font-medium group-has-[:checked]:text-blue-1">
                  Marked as popular categories
                </span>
              </label>
            </div>
          </div>
        </>
      );
    },
  },
  {
    dataIndex: "status",
    title: "Action",
  },
];
