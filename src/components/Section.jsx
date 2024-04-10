export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>Learn more</h2>
      {children}
    </section>
  );
}
