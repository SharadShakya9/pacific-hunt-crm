"use client";

import BlueButton from "@/components/ui/BlueButton";
import Link from "next/link";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Category, columns } from "./columns";
import CategoryDataTable from "./datatable";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/data";

const Categories = () => {
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => apiClient.get("category"),
  });

  return (
    <div>
      <div className="flex h-[48px] w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/configurations">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3739 8C19.3739 8.29837 19.2553 8.58451 19.0443 8.79549C18.8334 9.00647 18.5472 9.125 18.2489 9.125H4.46761L9.29573 13.9531C9.40061 14.0576 9.48383 14.1818 9.54061 14.3186C9.59739 14.4553 9.62662 14.6019 9.62662 14.75C9.62662 14.8981 9.59739 15.0447 9.54061 15.1814C9.48383 15.3182 9.40061 15.4424 9.29573 15.5469C9.08344 15.7564 8.79715 15.8739 8.49886 15.8739C8.20056 15.8739 7.91428 15.7564 7.70198 15.5469L0.951981 8.79687C0.847101 8.69236 0.763884 8.56816 0.707103 8.43142C0.650322 8.29467 0.621094 8.14806 0.621094 8C0.621094 7.85193 0.650322 7.70532 0.707103 7.56858C0.763884 7.43183 0.847101 7.30764 0.951981 7.20312L7.70198 0.453123C7.91333 0.241779 8.19997 0.123047 8.49886 0.123047C8.64685 0.123047 8.79339 0.152196 8.93012 0.208831C9.06685 0.265466 9.19108 0.348476 9.29573 0.453123C9.40038 0.557771 9.48339 0.682005 9.54002 0.818733C9.59666 0.955461 9.62581 1.10201 9.62581 1.25C9.62581 1.39799 9.59666 1.54454 9.54002 1.68126C9.48339 1.81799 9.40038 1.94223 9.29573 2.04687L4.46761 6.875H18.2489C18.5472 6.875 18.8334 6.99353 19.0443 7.2045C19.2553 7.41548 19.3739 7.70163 19.3739 8Z"
                fill="#3C3D3D"
              />
            </svg>
          </Link>

          <p className="text-18-600 text-dark-2">Categories</p>
        </div>

        <div className="flex gap-4">
          <BlueButton>
            <img src="/download.svg" alt="" />{" "}
            <span>Download .xlsx Sample</span>
          </BlueButton>
          <BlueButton>
            <img src="/import.svg" alt="" /> <span>Import .xlsx File</span>
          </BlueButton>

          <Dialog>
            <DialogTrigger asChild>
              <BlueButton>
                <img src="/add.svg" alt="" /> <span>Create Categories</span>
              </BlueButton>
            </DialogTrigger>
            <DialogContent className="h-[404px] rounded-md px-0">
              <DialogHeader className="border-b border-dark-7">
                <DialogTitle className="text-18-600 pb-[25px] text-dark-2">
                  Create Categories
                </DialogTitle>
              </DialogHeader>

              <div className="mx-[25px] mb-[80px] space-y-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <Label htmlFor="categoryname">
                    <p className="text-16-500 text-dark-2">Category Name</p>
                  </Label>
                  <Input
                    id="categoryname"
                    className="text-14-400 text-dark-2"
                    placeholder="Enter category name"
                  />
                </div>

                <label
                  htmlFor="popular"
                  className="group flex gap-2 rounded border border-dark-7 px-[8px] py-[12px] has-[:checked]:border-blue-1 has-[:checked]:bg-light-3"
                >
                  <input
                    id="popular"
                    type="checkbox"
                    className="peer appearance-none"
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
              <DialogFooter className="mx-[25px]">
                <BlueButton>Create</BlueButton>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-6 min-h-[1000px] rounded-lg bg-white px-5 py-6 shadow-datatable">
        <CategoryDataTable columns={columns} data={categories} />
      </div>
    </div>
  );
};

export default Categories;
