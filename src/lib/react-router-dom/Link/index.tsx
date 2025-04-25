import { To } from "@/lib/history";
import useHistory from "@/lib/react-router/hooks/useHistory";

export default function Link({
  to,
  children,
  replace = false,
}: {
  to: To;
  children?: any;
  replace?: boolean;
}) {
  const history = useHistory();
  const jumpFn = replace ? history.replace : history.push;
  return (
    <a
      style={{ display: "block",cursor:'pointer' }}
      onClick={(e) => {
        e.preventDefault();
        jumpFn(to);
      }}
    >
      {children}
    </a>
  );
}
