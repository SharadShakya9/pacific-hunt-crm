import { css } from "styled-components"

export const antdSidebar = css`
    .ant-menu-item {
        width: 100% !important;
        height: 56px !important;
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
    }

    .ant-menu-light .ant-menu-item-selected {
        position: relative;
        background-color: #EFFAFF !important;
        margin-left: 0 !important;
        padding-right: 10px;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 12px;
            height: 100%;
            background-color: #01A3E0; /* Match the background color */
            border-right: 6px solid #01A3E0 !important;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
            transform: translateX(6px); /* Adjust to move the curve inward */
            pointer-events: none;
        }
    }

    .ant-menu .ant-menu-item, .ant-menu .ant-menu-submenu, .ant-menu .ant-menu-submenu-title {
        border-radius: 0px !important;
    }

    .ant-menu-item-selected .text-light-3 {
        color: #01A3E0 !important;
    }

    .ant-menu-item-selected path {
        fill: #01A3E0;
    }

`