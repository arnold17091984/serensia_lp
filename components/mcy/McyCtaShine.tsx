/** Shared, non-interactive light sweep; reduced motion is handled in CSS. */
export default function McyCtaShine() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <span className="mcy-shine absolute inset-y-[-30%] left-0 w-[42%]" />
      <span className="absolute inset-x-[3px] top-[2px] h-[20%] rounded-[inherit] bg-gradient-to-b from-white/5 to-transparent" />
    </span>
  );
}
