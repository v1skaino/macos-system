import { Tooltip as ReactTooltip } from "react-tooltip";

export function Tooltip(props: typeof ReactTooltip.defaultProps) {
  return <ReactTooltip {...props} />;
}
