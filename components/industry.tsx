import {
  Component,
  Cpu,
  CreditCard,
  MapPinHouse,
  Microchip,
  ShoppingBag,
} from "lucide-react";

export default function Industry() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
              Tailored for your industry
            </h2>
          </div>
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-300 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-300 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <Cpu color="#3b82f6" size={16} />
                <span>Technology</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Ideal for the tech products, providing instant lead
                qualification, appointment setting, and CRM-based customer
                engagement.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <CreditCard color="#3b82f6" size={16} />
                <span>Financial Services</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                RingConnect qualifies prospects, processing applications,
                collecting debt, and handling service requests in a scalable,
                auditable, and compliant manner.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" />
                </svg>
                <span>Consumer</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                RingConnect helps consumer-focused businesses manage inquiries,
                schedule appointments, and conduct satisfaction check-ins in
                over 30 languages.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <ShoppingBag size={16} stroke="#3b82f6" />

                <span>Retail</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Converts product inquiries into sales, follows up consistently,
                and keeps your pipeline full.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <MapPinHouse size={16} color="#3b82f6" />
                <span>Real Estate</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Qualifies property inquiries, schedules viewings, and maintains
                prospect engagement.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <Component size={16} fill="#3b82f6" stroke="#3b82f6" />
                <span>Service Providers</span>
              </h3>
              <p className="text-[15px] text-gray-600">
                Unlimited coverage for services businesses, whether you’re
                screening candidates, running a call centre, or managing client
                relationships.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
