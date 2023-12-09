/* eslint-disable react/prop-types */
import Button from "../../../../reusable-ui/Button";

export default function EmptyMenuAdmin({ OnReset }) {
  return (
    <div>
      <span>Pas de produits</span>
      <Button onClick={OnReset} label="Recharger les produits" />
    </div>
  );
}
