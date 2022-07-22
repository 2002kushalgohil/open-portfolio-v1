export default function Layout({ children }) {
  return (
    <section className="mainDiv">
      <div className="mainDivChild">{children}</div>
    </section>
  );
}
