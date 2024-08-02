import BlueButton from "@/components/ui/BlueButton";
import Link from "next/link";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CompanyType = () => {
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

          <p className="text-18-600 text-dark-2">Company Type</p>
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
                <img src="/add.svg" alt="" /> <span>Company Type</span>
              </BlueButton>
            </DialogTrigger>
            <DialogContent className="rounded-md px-0 h-[404px]">
              <DialogHeader className="border-b border-dark-7">
                <DialogTitle className="text-18-600 pb-[25px] text-dark-2">
                  Create Company Type
                </DialogTitle>
              </DialogHeader>

              <div className="mx-[25px] mb-[80px] space-y-[20px]">
                <div className="flex flex-col gap-[8px]">
                  <Label htmlFor="companytype">
                    <p className="text-16-500 text-dark-2">Company Type</p>
                  </Label>
                  <Input
                    id="companytype"
                    className="text-14-400 text-dark-2"
                    placeholder="Enter company type"
                  />
                </div>

              </div>
              <DialogFooter className="mx-[25px]">
                <BlueButton>Create</BlueButton>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CompanyType;
