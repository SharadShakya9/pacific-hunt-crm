"use client";

import React from "react";
import Layout from "antd/es/layout/layout";
import { Avatar, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

const items = [
  {
    key: 1,
    label: (
      <Link href="/dashboard/jobseeker">
        <span className="text-16-500 text-light-3">Jobseeker</span>
      </Link>
    ),
    icon: (
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 14V17C0 17.5523 0.44772 18 1 18H15C15.5523 18 16 17.5523 16 17V14C16 11.7909 14.2091 10 12 10H4C1.79086 10 0 11.7909 0 14ZM17.9839 17.3118C17.9485 17.655 18.1912 18 18.5363 18H21C21.5522 18 22 17.5523 22 17V14C22 11.7909 20.2091 10 18 10H17.0314C16.8153 10 16.6967 10.2597 16.8253 10.4334C17.5635 11.4304 18 12.6642 18 14V17C18 17.1053 17.9945 17.2093 17.9839 17.3118ZM12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4ZM13.3509 7.9476C13.0101 7.892 12.894 7.4893 13.0782 7.1973C13.6622 6.2717 14.0001 5.17531 14.0001 4C14.0001 2.82469 13.6622 1.7283 13.0782 0.80271C12.894 0.51073 13.0101 0.10804 13.3509 0.0524199C13.5622 0.0179299 13.7791 0 14.0001 0C16.2093 0 18.0001 1.79086 18.0001 4C18.0001 6.20914 16.2093 8 14.0001 8C13.7791 8 13.5622 7.9821 13.3509 7.9476Z"
          fill="#EFFAFF"
        />
      </svg>
    ),
  },
  {
    key: 2,
    label: (
      <Link href="/dashboard/employer">
        <span className="text-16-500 text-light-3">Employer</span>
      </Link>
    ),
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.81219 2.19691V3.70748L2.96211 3.85429C2.32652 3.90411 1.72643 4.16008 1.2578 4.58125C0.789164 5.00243 0.479044 5.5645 0.377024 6.1776C0.332246 6.45205 0.289653 6.72651 0.25252 7.00203C0.24368 7.06865 0.256792 7.13628 0.289965 7.19517C0.323138 7.25405 0.374657 7.30116 0.437091 7.32968L0.521186 7.36798C6.45039 10.1019 13.5504 10.1019 19.4785 7.36798L19.5626 7.32968C19.6248 7.30099 19.6761 7.25382 19.7091 7.19494C19.742 7.13607 19.755 7.06853 19.7461 7.00203C19.7091 6.72665 19.6679 6.45181 19.6226 6.1776C19.5206 5.5645 19.2105 5.00243 18.7419 4.58125C18.2732 4.16008 17.6732 3.90411 17.0376 3.85429L15.1875 3.70855V2.19797C15.1876 1.75208 15.0234 1.32097 14.7248 0.983037C14.4261 0.645104 14.0129 0.422798 13.5602 0.356553L12.2278 0.16188C10.7508 -0.0539599 9.24892 -0.0539599 7.77188 0.16188L6.43947 0.356553C5.98697 0.422771 5.57388 0.644922 5.27526 0.982634C4.97665 1.32035 4.81234 1.7512 4.81219 2.19691ZM11.9842 1.73948C10.6687 1.54728 9.33101 1.54728 8.01542 1.73948L6.68302 1.93415C6.61837 1.94357 6.55934 1.97527 6.51666 2.02349C6.47397 2.0717 6.45046 2.13324 6.45039 2.19691V3.59579C8.81475 3.46386 11.1849 3.46386 13.5493 3.59579V2.19691C13.5492 2.13324 13.5257 2.0717 13.483 2.02349C13.4403 1.97527 13.3813 1.94357 13.3167 1.93415L11.9842 1.73948Z"
          fill="#EFFAFF"
        />
        <path
          d="M19.9579 9.22748C19.9558 9.19308 19.9451 9.15972 19.9267 9.13025C19.9084 9.10078 19.883 9.07609 19.8527 9.0583C19.8224 9.04051 19.7881 9.03015 19.7528 9.02812C19.7175 9.02609 19.6822 9.03244 19.65 9.04663C13.5657 11.671 6.43401 11.671 0.34972 9.04663C0.317484 9.03244 0.282191 9.02609 0.246877 9.02812C0.211562 9.03015 0.177282 9.04051 0.146986 9.0583C0.116689 9.07609 0.0912813 9.10078 0.0729481 9.13025C0.0546149 9.15972 0.0439044 9.19308 0.041738 9.22748C-0.0698763 11.2641 0.0425252 13.3065 0.377024 15.3198C0.478822 15.9331 0.788845 16.4954 1.2575 16.9168C1.72616 17.3382 2.32636 17.5943 2.96211 17.6442L5.00659 17.8037C8.32996 18.0654 11.6686 18.0654 14.9931 17.8037L17.0376 17.6442C17.6733 17.5943 18.2735 17.3382 18.7422 16.9168C19.2108 16.4954 19.5209 15.9331 19.6226 15.3198C19.9568 13.3039 20.0704 11.2614 19.9579 9.22854"
          fill="#EFFAFF"
        />
      </svg>
    ),
  },
  {
    key: 3,
    label: (
      <Link href="/dashboard/configurations">
        <span className="text-16-500 text-light-3">Configurations</span>
      </Link>
    ),
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0112 0C10.7952 0.00820536 11.576 0.0953873 12.3419 0.259494C12.5048 0.294418 12.6523 0.377347 12.7638 0.496691C12.8752 0.616036 12.9451 0.765834 12.9636 0.925154L13.1451 2.49135C13.1708 2.71216 13.25 2.92411 13.3765 3.11014C13.503 3.29618 13.6732 3.4511 13.8735 3.56245C14.0737 3.67379 14.2983 3.73846 14.5293 3.75123C14.7603 3.76401 14.9912 3.72454 15.2034 3.636L16.6988 3.00521C16.8508 2.94095 17.0198 2.92361 17.1824 2.95558C17.3451 2.98755 17.4933 3.06726 17.6068 3.18368C18.688 4.29244 19.4933 5.62224 19.962 7.07302C20.011 7.22557 20.0094 7.38899 19.9573 7.54061C19.9053 7.69223 19.8054 7.82454 19.6715 7.91919L18.3459 8.85871C18.1592 8.99017 18.0073 9.16203 17.9026 9.36036C17.7979 9.55869 17.7433 9.77792 17.7433 10.0003C17.7433 10.2226 17.7979 10.4419 17.9026 10.6402C18.0073 10.8385 18.1592 11.0104 18.3459 11.1418L19.6736 12.0803C19.8077 12.1751 19.9077 12.3075 19.9598 12.4594C20.0119 12.6112 20.0134 12.7748 19.9641 12.9275C19.4956 14.3782 18.6907 15.7079 17.61 16.8169C17.4967 16.9333 17.3487 17.013 17.1863 17.0452C17.0238 17.0773 16.855 17.0603 16.7031 16.9964L15.2013 16.3635C14.9894 16.2743 14.7586 16.2342 14.5275 16.2466C14.2965 16.2589 14.0717 16.3233 13.8714 16.4346C13.6711 16.5458 13.5008 16.7008 13.3745 16.887C13.2481 17.0731 13.1692 17.2852 13.1441 17.5061L12.9625 19.0713C12.9444 19.2288 12.876 19.377 12.7669 19.4958C12.6577 19.6145 12.513 19.6981 12.3526 19.7349C10.8054 20.0884 9.1935 20.0884 7.64635 19.7349C7.48571 19.6982 7.34078 19.6148 7.23142 19.496C7.12205 19.3772 7.05358 19.2289 7.03538 19.0713L6.85486 17.5082C6.82864 17.288 6.74901 17.0767 6.62236 16.8915C6.49572 16.7062 6.32559 16.552 6.12563 16.4412C5.92568 16.3305 5.70148 16.2664 5.47102 16.254C5.24057 16.2415 5.0103 16.2812 4.79869 16.3697L3.29689 17.0015C3.14484 17.0656 2.9758 17.0828 2.81315 17.0507C2.65049 17.0185 2.50226 16.9386 2.38897 16.822C1.30808 15.7118 0.50353 14.3805 0.0358544 12.9286C-0.0133908 12.7759 -0.011874 12.6122 0.0401939 12.4604C0.0922618 12.3086 0.192294 12.1761 0.326388 12.0814L1.65409 11.1418C1.84085 11.0104 1.99273 10.8385 2.09742 10.6402C2.20211 10.4419 2.25666 10.2226 2.25666 10.0003C2.25666 9.77792 2.20211 9.55869 2.09742 9.36036C1.99273 9.16203 1.84085 8.99017 1.65409 8.85871L0.326388 7.92125C0.192294 7.82652 0.0922618 7.69404 0.0401939 7.54221C-0.011874 7.39038 -0.0133908 7.22674 0.0358544 7.07404C0.504573 5.62327 1.30985 4.29346 2.3911 3.1847C2.50452 3.06829 2.65281 2.98858 2.81546 2.95661C2.97811 2.92464 3.14708 2.94198 3.29902 3.00624L4.79442 3.63702C5.007 3.72551 5.23823 3.76489 5.46953 3.75199C5.70084 3.73909 5.92577 3.67428 6.12625 3.56276C6.32674 3.45124 6.49719 3.29613 6.62392 3.10987C6.75064 2.92362 6.83011 2.71142 6.85593 2.49033L7.03751 0.925154C7.05584 0.765513 7.12575 0.615385 7.23743 0.495823C7.3491 0.376262 7.49695 0.293264 7.66024 0.258469C8.4325 0.0945799 9.22036 0.00796115 10.0112 0ZM9.9984 6.92327C9.14853 6.92327 8.33348 7.24745 7.73253 7.8245C7.13158 8.40156 6.79398 9.18421 6.79398 10.0003C6.79398 10.8164 7.13158 11.599 7.73253 12.1761C8.33348 12.7531 9.14853 13.0773 9.9984 13.0773C10.8483 13.0773 11.6633 12.7531 12.2643 12.1761C12.8652 11.599 13.2028 10.8164 13.2028 10.0003C13.2028 9.18421 12.8652 8.40156 12.2643 7.8245C11.6633 7.24745 10.8483 6.92327 9.9984 6.92327Z"
          fill="#EFFAFF"
        />
      </svg>
    ),
  },
  {
    key: 4,
    label: (
      <Link href="/dashboard/managers">
        <span className="text-16-500 text-light-3">Register Managers</span>
      </Link>
    ),
    icon: (
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C11.4734 0 12.8865 0.579463 13.9284 1.61091C14.9702 2.64236 15.5556 4.04131 15.5556 5.5C15.5556 6.95869 14.9702 8.35764 13.9284 9.38909C12.8865 10.4205 11.4734 11 10 11C8.52658 11 7.1135 10.4205 6.07163 9.38909C5.02976 8.35764 4.44444 6.95869 4.44444 5.5C4.44444 4.04131 5.02976 2.64236 6.07163 1.61091C7.1135 0.579463 8.52658 0 10 0Z"
          fill="#EFFAFF"
        />
        <path
          d="M2.22222 22C1.63285 22 1.06762 21.7682 0.650874 21.3556C0.234126 20.9431 0 20.3835 0 19.8V18.7C0 17.2413 0.585316 15.8424 1.62718 14.8109C2.66905 13.7795 4.08213 13.2 5.55556 13.2H9.83333C10.2729 13.2 10.5199 13.7504 10.2977 14.1297C8.83415 16.628 9.94849 19.7846 10.6064 21.2226C10.7673 21.5743 10.5125 22 10.1258 22H2.22222Z"
          fill="#EFFAFF"
        />
        <path
          d="M16.4 22.8C17.8322 22.8 19.2057 22.2311 20.2184 21.2184C21.2311 20.2057 21.8 18.8322 21.8 17.4C21.8 15.9678 21.2311 14.5943 20.2184 13.5816C19.2057 12.5689 17.8322 12 16.4 12C14.9678 12 13.5943 12.5689 12.5816 13.5816C11.5689 14.5943 11 15.9678 11 17.4C11 18.8322 11.5689 20.2057 12.5816 21.2184C13.5943 22.2311 14.9678 22.8 16.4 22.8ZM16.4 14.4C16.5591 14.4 16.7117 14.4632 16.8243 14.5757C16.9368 14.6883 17 14.8409 17 15V16.8H18.8C18.9591 16.8 19.1117 16.8632 19.2243 16.9757C19.3368 17.0883 19.4 17.2409 19.4 17.4C19.4 17.5591 19.3368 17.7117 19.2243 17.8243C19.1117 17.9368 18.9591 18 18.8 18H17V19.8C17 19.9591 16.9368 20.1117 16.8243 20.2243C16.7117 20.3368 16.5591 20.4 16.4 20.4C16.2409 20.4 16.0883 20.3368 15.9757 20.2243C15.8632 20.1117 15.8 19.9591 15.8 19.8V18H14C13.8409 18 13.6883 17.9368 13.5757 17.8243C13.4632 17.7117 13.4 17.5591 13.4 17.4C13.4 17.2409 13.4632 17.0883 13.5757 16.9757C13.6883 16.8632 13.8409 16.8 14 16.8H15.8V15C15.8 14.8409 15.8632 14.6883 15.9757 14.5757C16.0883 14.4632 16.2409 14.4 16.4 14.4Z"
          fill="#EFFAFF"
        />
      </svg>
    ),
  },
];

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen min-w-screen bg-light-2">
      <div className="relative w-60 bg-blue-2">
        <img
          className="m-[32px]"
          src="/logo pacific 1.png"
          alt="pacific hunt logo"
        />

        <Layout className="bg-transparent">
          <Sider className="bg-transparent" width={240}>
            <Menu
              className="flex flex-col gap-2 bg-transparent"
              items={items}
            />
          </Sider>
        </Layout>

        <div className="mx-1 mt-[200px] flex cursor-pointer items-center gap-3 p-[16px]">
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8125 0H3.1875C1.38125 0 0 1.3 0 3V9H9.1375L6.69375 6.7C6.26875 6.3 6.26875 5.7 6.69375 5.3C7.11875 4.9 7.75625 4.9 8.18125 5.3L12.4312 9.3C12.8562 9.7 12.8562 10.3 12.4312 10.7L8.18125 14.7C7.75625 15.1 7.11875 15.1 6.69375 14.7C6.26875 14.3 6.26875 13.7 6.69375 13.3L9.1375 11H0V17C0 18.7 1.38125 20 3.1875 20H13.8125C15.6187 20 17 18.7 17 17V3C17 1.3 15.6187 0 13.8125 0Z"
              fill="#EFFAFF"
            />
          </svg>

          <p className="text-16-500 text-light-3">Log Out</p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex h-[80px] items-center justify-end bg-blue-2 pr-[50px]">
          <div className="flex h-full items-center gap-3 text-center">
            <img src="/bellwithred.svg" alt="" />
            <div className="text-16-400 flex items-center gap-2 text-light-2">
              <Avatar style={{ background: "purple", color: "white" }}>
                P
              </Avatar>
              Prabodh
            </div>
          </div>
        </div>

        <div className="px-6 py-8">{children}</div>
      </div>
    </main>
  );
};

export default Sidebar;
