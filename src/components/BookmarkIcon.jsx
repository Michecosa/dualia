export default function BookmarkIcon({ liked }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        filter: "drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <svg
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          fill="white"
          d="M 8.9999994,3 H 20.999999 c 1.108,0 1.999999,0.892 1.999999,2 l 2e-6,22.00001 -8,-6 -8,6 1e-7,-22 c 0,-1.108 0.892,-1.99989 1.9999999,-2 z"
        />
      </svg>

      {/* Cuore infame */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
          display: "flex",
        }}
      >
        <svg
          viewBox="0 0 16 16"
          fill={"rgb(227, 190, 133)"}
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: "all 0.2s ease" }}
        >
          {liked ? (
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          ) : (
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          )}
        </svg>
      </div>
    </div>
  );
}
