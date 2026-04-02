type Props = {
  label: string;
};

export function BackToTop({ label }: Props) {
  return (
    <a className="back-to-top" href="#top" aria-label={label}>
      ↑
    </a>
  );
}
