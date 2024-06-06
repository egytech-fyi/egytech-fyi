import {
    CodeOutlined,
    DatabaseOutlined,
    FormatPainterOutlined,
    GlobalOutlined,
    PieChartOutlined,
    SettingOutlined,
    TeamOutlined,
} from "@ant-design/icons";

type PositionType =
    | "backend"
    | "frontend"
    | "fullstack"
    | "hardware"
    | "ai_automation"
    | "embedded"
    | "mobile"
    | "security"
    | "devops_sre_platform"
    | "testing"
    | "crm"
    | "data_analytics"
    | "data_engineer"
    | "data_scientist"
    | "engineering_manager"
    | "executive"
    | "ui_ux"
    | "product_manager"
    | "product_owner"
    | "scrum"
    | "research"
    | "system_arch"
    | "technical_support";

type PositionCategory =
    | "engineer"
    | "developer"
    | "data"
    | "manager"
    | "designer"
    | "product"
    | "others";

export interface PositionOption {
    type: PositionType;
    positionName: string;
    category: PositionCategory;
    disabled?: boolean;
}

 
const PositionsIconsMap: Record<PositionCategory, unknown> = {
    designer: FormatPainterOutlined,
    engineer: SettingOutlined,
    manager: TeamOutlined,
    product: PieChartOutlined,
    data: DatabaseOutlined,
    developer: CodeOutlined,
    others: GlobalOutlined,
};

export function getPositionOptions(positionOptions: PositionOption[]) {
    return positionOptions.map((option) => {
        return {
            label: option.positionName,
            value: option.type,
            disabled: option.disabled,
            icon: PositionsIconsMap[option.category],
        };
    });
}
