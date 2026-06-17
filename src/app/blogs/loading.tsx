export default function ArticleLoading() {
  return (
    <article
      aria-busy="true"
      aria-label="Loading essay"
      style={{ maxWidth: "660px", margin: "0 auto" }}
    >
      <div className="j-skel" style={{ height: "15px", width: "90px", marginBottom: "34px" }} />
      <div className="j-skel" style={{ height: "12px", width: "60px", marginBottom: "16px" }} />
      <div className="j-skel" style={{ height: "44px", width: "85%" }} />
      <div className="j-skel" style={{ height: "44px", width: "55%", marginTop: "10px" }} />
      <div className="j-skel" style={{ height: "13px", width: "240px", marginTop: "22px" }} />

      <div style={{ height: "1px", background: "var(--border)", margin: "30px 0 36px" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        {[100, 96, 98, 70].map((w, i) => (
          <div key={i} className="j-skel" style={{ height: "16px", width: `${w}%` }} />
        ))}
      </div>

      <div
        className="j-skel"
        style={{ height: "320px", width: "100%", margin: "30px 0", borderRadius: "12px" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        {[100, 92, 97, 88, 60].map((w, i) => (
          <div key={i} className="j-skel" style={{ height: "16px", width: `${w}%` }} />
        ))}
      </div>
    </article>
  );
}
