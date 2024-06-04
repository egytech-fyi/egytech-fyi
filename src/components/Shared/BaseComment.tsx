import { ReactNode } from "react";
import "@styles/BaseComment.styles.scss";
import classNames from "classnames";

type BaseCommentProps = {
    children?: ReactNode;
    hidden?: boolean;
};
export function BaseComment(props: BaseCommentProps) {
    const { children, hidden } = props;
    const className = classNames("comment", hidden ? "hiddenComment" : "");
    return <p className={className}>{children}</p>;
}

export function Nowrap(props: { children: ReactNode }) {
    return <span className="nowrap">{props.children}</span>;
}

export function Strong(props: { children: ReactNode }) {
    return (
        <strong className="strong">
            <Nowrap>{props.children}</Nowrap>
        </strong>
    );
}
