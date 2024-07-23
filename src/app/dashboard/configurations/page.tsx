import Link from "next/link";
import React from "react";

const configurationdetails = [
  {
    key: 1,
    label: "Categories",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 2,
    label: "Profession",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 3,
    label: "Company Type",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 4,
    label: "Skill",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 5,
    label: "Social Media",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 6,
    label: "Job Type",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 7,
    label: "Education level",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 8,
    label: "Experience level",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 9,
    label: "Work location",
    link: "/dashboard/configurations/categories",
  },
  {
    key: 10,
    label: "Company Type",
    link: "/dashboard/configurations/categories",
  },
];

const Configuration = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {configurationdetails.map((item) => (
        <Link href={item.link}>
          <div
            key={item.key}
            className="flex h-[88px] cursor-pointer items-center justify-between rounded-md bg-white px-6 shadow-card"
          >
            <p className="text-16-600 text-dark-2">{item.label}</p>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Configuration;
