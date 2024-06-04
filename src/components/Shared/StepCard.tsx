import { ReactNode } from "react";
import "@styles/StepContainer.styles.scss";
import { Card, Space } from "antd";

interface StepCardProps {
    children?: ReactNode;
}

export const StepCard = ({ children }: StepCardProps) => {
    return (
        <Card className="step-container">
            <Space direction="vertical" className="step-content-container">
                {children}
            </Space>
        </Card>
    );
};
