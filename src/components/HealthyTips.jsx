export default function HealthyTips() {
  const tips = [
    {
      id: 1,
      category: "Metabolism",
      title: "Top 5 Spices to Boost Metabolism",
      description: "Learn how common kitchen staples can aid your weight loss journey.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH4EXv7QVTHTHDFbkQ8BRSvVt2pN9uecO0FCwZbVQD-YFAivBlvW1jF0ztEQ-Q5oC815FflfNQvRWpAfQKk3E_28xAC3WrnoAhgRzCIYvkL4QWwkA0hhKnBeWWnnk7Yk84V38HCcuWmNZ7EpaeKJ4mUgjHDNs5l5uQ_QfLTsTRQXxE11spnGwL94H-xUQwP3vrVMJKd1qLaXCWfuWjPiTh5k81J8K4zWGi1OkTJLAwk480Tt5-vQfOrlpyKDR88UqNW0h35JDOaaW6",
    },
    {
      id: 2,
      category: "Efficiency",
      title: "Meal Prep Secrets for Busy Professionals",
      description: "Spend less time in the kitchen while maintaining your strict diet.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS0pLWyMjKI2WEU4yUlMR8Ag9YLRVyL8xzjyxdQXv9gGp4j3sinDlSgMz9IIxiMk9AbRUmg3gbqaOfjKHUKe6gzRRQXPs_2PnLuMPF1bR_Muqih8tzgA3ZVTjLiMIFFxlpeudmpDdSoOQJRLW4bAv8-a4KhflXVHep8X8d631YIB45npkM23o0h8VC4jcuXQ9XZpzFq6kmM0EtJNspMgOFSLFiFxxCTDqrgxTulRqXaMhoetZMtvaKP0x-q6-2aiOKv_796DCaZlM3",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-md text-headline-md text-on-surface">Healthy Tips</h2>
        <a className="text-primary font-label-md text-label-md hover:underline" href="#tips">
          View all
        </a>
      </div>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container transition-colors group cursor-pointer border border-outline-variant/10"
          >
            <div className="flex gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <img className="w-full h-full object-cover" alt={tip.title} src={tip.image} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-primary font-label-sm text-label-sm mb-1 uppercase tracking-wider">{tip.category}</span>
                <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{tip.title}</h4>
                <p className="text-on-surface-variant text-label-md font-label-md">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
