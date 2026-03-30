import { forwardRef } from "react";

const Group = forwardRef(({ children, classname }, ref) => {
    return <div ref={ref} className={classname}>{children}</div>;
});

Group.displayName = "Group";

export default Group;