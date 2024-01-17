import { GetAllFaqData } from "@/lib/GetAllFaqData";

const FaqSection = async () => {
  const faqData = await GetAllFaqData();

  const faqDataContent = faqData.map((faq: any) => {
    return (
      <details
        key={faq.id}
        className="bg-[#4b4670] w-full md:w-[47%] p-4 open:w-full transition-all duration-500 ease-in-out flex-grow rounded-sm"
      >
        <summary className="text-lg">{faq.query}</summary>
        <p className="p-4 bg-[#332F4C] mt-4 rounded-sm">{faq.answer}</p>
      </details>
    );
  });

  return (
    <section className="py-10 px-4 md:px-6">
      <h2 className="text-4xl text-[#797DA5] py-4 text-center">FAQ</h2>
      <div className="flex flex-row gap-8 bg-[#332F4C] md:bg-transparent p-4 flex-wrap justify-center rounded-lg">
        {faqDataContent}
      </div>
    </section>
  );
};

export default FaqSection;
