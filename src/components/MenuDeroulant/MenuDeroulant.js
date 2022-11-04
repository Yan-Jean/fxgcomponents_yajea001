import { Button, Dropdown, Menu } from "antd";
import React from "react";
import PropTypes from "prop-types";

export const MenuDeroulant = ({item1, item2, item3, placement}) => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              {item1}
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              {item2}
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              {item3}
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <>
      <Dropdown overlay={menu} placement={placement} arrow>
        <Button>MENU</Button>
      </Dropdown>
      
    </>
  );
};

MenuDeroulant.PropTypes = {
    item1: PropTypes.string, 
    item2: PropTypes.string, 
    item3: PropTypes.string,
    placement: PropTypes.string, 
};


