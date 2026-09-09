/** Shared, non-interactive light sweep; reduced motion is handled in CSS. */
export default function McyCtaShine() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <span className="mcy-shine absolute inset-y-[-30%] left-0 w-[42%]" />
    </span>
  );
}
