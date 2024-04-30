import "./index.css"
import { Space, Button, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

export default function DropDownMenuSort({propsMenu, nameMenu})
{

    return (
        <Space wrap>
            <Dropdown className="menu-style-sort" menu={propsMenu}>
                <Button className="button-in-menu">
                    <Space>
                        {nameMenu}
                        <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </Space>
  );
}