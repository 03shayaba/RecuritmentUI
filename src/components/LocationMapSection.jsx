export default function LocationMapSection() {
  return (
    <section aria-label="Office Location Map" className="w-full overflow-hidden">
      <div className="w-full h-64 sm:h-80 lg:h-[380px] bg-slate-100">
        <iframe
          title="IBA Consulting Worldwide — Gurugram, Haryana Location Map"
          src="https://maps.google.com/maps?ll=28.422601,76.990081&z=9&t=m&hl=en-US&gl=US&q=Gurugram+Haryana&output=embed"
          className="w-full h-full border-0 block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
