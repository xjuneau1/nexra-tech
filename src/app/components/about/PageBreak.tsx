export default function PageBreak() {
  return (
    <div className="absolute w-screen -z-10">
      <svg
        width="100%"
        height="180"
        viewBox="0 0 1200 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C300,-30 900,130 1200,60 V100 C1000,90 700,120 400,100 C200,85 100,90 0,100 Z"
          fill="#1F2937"
        />

        <path
          d="M0,60 C300,0 900,100 1200,70 V100 C1000,95 700,110 400,95 C200,80 100,85 0,95 Z"
          fill="#374151"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
