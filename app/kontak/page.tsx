import ContactCard from '@/components/ContactCard';

export default function Kontak() {
  return (
    <>
      <ContactCard
        whatsapp="+62 858-5011-7601"
        instagram="gmpskadaku_"   
        location="Jl. Rejosari, Desa Rejosari, Kec. Dawe, Kab. Kudus, Jawa Tengah."
        mapsUrl="https://maps.app.goo.gl/your-actual-link"
      />
      {/* pliss lah kasih credit buat maker yawh */}
      <div className="text-center py-6 text-sm text-slate border-t border-gray-200 max-w-3xl mx-auto">
        Website dikembangkan oleh{' '}
        <a
          href="https://www.instagram.com/piannacota/"
          target="_blank"
          rel="noopener"
          className="text-red hover:underline font-medium"
        >
          @piannacota
        </a>
      </div>
    </>
  );
}