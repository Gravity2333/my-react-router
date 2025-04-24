import useOutlet, { OutletContextTypes } from "../hooks/useOutlet";

export default function Outlet(props: OutletContextTypes) {
  const outlet = useOutlet(props);
  return outlet
}
