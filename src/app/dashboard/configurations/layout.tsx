"use client";

export default function ConfigurationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-24-700 text-dark-2 tracking-[-0.02rem]">Configurations</p>
          <p className="text-16-400 text-dark-3">
            Configure details from here.
          </p>
        </div>
        {children}
      </section>
    </>
  );
}
