export default function Reviews() {
  const reviews = [
    {
      name: "Sophia Ramirez",
      role: "CTO, InnovateX",
      review:
        "Nexra Tech transformed our operations with AI-driven automation. Their expertise and commitment to innovation are unmatched!",
      rating: 5,
    },
    {
      name: "Daniel Carter",
      role: "Founder, CloudSync",
      review:
        "The cloud solutions Nexra provided gave our business seamless scalability. Incredible performance and support!",
      rating: 5,
    },
    {
      name: "Elena Kovacs",
      role: "Head of IT, FutureWave",
      review:
        "Security and efficiency were our top concerns. Nexra delivered beyond expectations with their robust solutions!",
      rating: 5,
    },
    {
      name: "Liam Thompson",
      role: "Operations Manager, DataFlux",
      review:
        "Thanks to Nexra Tech, our workflow is now fully optimized. Their AI-powered insights revolutionized our decision-making.",
      rating: 4,
    },
  ];
  return (
    <section className="col-span-2 w-full py-16 bg-[#121230] text-white mb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#a29bfe] text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a40] to-[#3a0ca3] p-6 rounded-2xl shadow-lg border border-[#2a2a70] hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(review.rating)}
                </span>
              </div>
              <p className="text-lg text-gray-300">
                "{review.review}"
              </p>
              <div className="mt-4 text-[#a29bfe] font-semibold">
                {review.name}
              </div>
              <div className="text-sm text-gray-400">{review.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
