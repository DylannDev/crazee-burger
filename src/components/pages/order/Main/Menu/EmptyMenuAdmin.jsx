/* eslint-disable react/prop-types */
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

export default function EmptyMenuAdmin({ OnReset }) {
  return (
    <div>
      <span>Pas de produits</span>
      <PrimaryButton onClick={OnReset} label="Recharger les produits" />
    </div>
  );
}
