export default function WritingLoading() {
  return (
    <main aria-busy="true" aria-label="Loading writing">
      <div style={{ marginBottom: "18px" }}>
        <div className="j-skel" style={{ height: "58px", width: "min(340px, 70%)" }} />
        <div
          className="j-skel"
          style={{ height: "17px", width: "min(440px, 90%)", marginTop: "20px" }}
        />
      </div>

      <div>
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              borderTop: "1px solid var(--border)",
              padding: "26px 0",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                className="j-skel"
                style={{ height: "21px", width: `${60 - i * 14}%`, maxWidth: "360px" }}
              />
              <div
                className="j-skel"
                style={{ height: "15px", width: "min(300px, 80%)", marginTop: "12px" }}
              />
            </div>
            <div className="j-skel" style={{ height: "18px", width: "18px", flexShrink: 0 }} />
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </main>
  );
}
