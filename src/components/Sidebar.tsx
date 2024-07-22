"use client";

import React from "react";
import Layout from "antd/es/layout/layout";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

const items = ["1", "2", "3"].map((item) => {
  const key = item;

  return {
    key: key,
    label: "Configuration",
  };
});

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-screen bg-light-2">
      <div className="w-60 bg-blue-2">
        <img
          className="m-[32px]"
          src="/logo pacific 1.png"
          alt="pacific hunt logo"
        />

        <Layout>
          <Sider>
            <Menu items={items} />
          </Sider>
        </Layout>
      </div>

      <div className="flex-grow">
        <div className="flex h-[80px] justify-end bg-blue-2"></div>

        <div>{children}</div>
      </div>
    </main>
  );
};

export default Sidebar;
