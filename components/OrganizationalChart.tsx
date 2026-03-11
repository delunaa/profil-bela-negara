import React from 'react';

const structure = {
  komandan: "Triana Ma'ratus Scholichah",
  wadan: "Reno Marcellino",
  sekretaris: ["Aulia Dinar Rahmawati", "Naila Rizky Oktavia", "Amiq Fahmi"],
  kabid: ["M. Billy Wahyu Aji", "Yudho Rahmat Jati"],
  bidang: {
    humas: [
      "M. Ihza Fernando S. R",
      "M. Yusrul Falah",
      "Ezar Raditya Al Faqih",
      "Rosa Dwy Oktavia",
      "Zahwa Zaina Zanuba",
      "Anggun Auliatul Laily"
    ],
    loghara: {
      logistik: [
        "Hendi Wijaya",
        "Satriya Bagus Rangga Kusuma",
        "Meisya Dwi Cahyani",
        "Nur Hasna Jinan Qotrunnada"
      ],
      bendahara: ["Virliana Nur Aisyah", "Meyla Shafira"]
    },
    operasi: [
      "Nayaka Argya Rohman",
      "Marcel Valentino",
      "Ifan Fahrizal Putra",
      "Ismi Novi Handyani"
    ]
  }
};

export default function OrganizationalChart() {
  return (
    <div className="border border-gray-200 rounded-xl p-4 md:p-6 bg-white/50 shadow-sm">
      <div className="relative flex flex-col items-center w-full">
        {/* KOMANDAN */}
        <div className="text-center">
          <div className="text-sm font-semibold text-navy mb-2">KOMANDAN</div>
          <div className="bg-white px-6 py-2 rounded-lg shadow-md border border-gray-300 min-w-[200px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5">
            {structure.komandan}
          </div>
        </div>

        {/* Garis vertikal ke WADAN */}
        <div className="w-0.5 h-8 bg-red my-2"></div>

        {/* WADAN */}
        <div className="text-center">
          <div className="text-sm font-semibold text-navy mb-2">WADAN</div>
          <div className="bg-white px-6 py-2 rounded-lg shadow-md border border-gray-300 min-w-[200px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5">
            {structure.wadan}
          </div>
        </div>

        {/* Garis vertikal ke SEKRETARIS */}
        <div className="w-0.5 h-8 bg-red my-2"></div>

        {/* SEKRETARIS */}
        <div className="text-center">
          <div className="text-sm font-semibold text-navy mb-2">SEKRETARIS</div>
          <div className="flex flex-col items-center space-y-2">
            {structure.sekretaris.map((nama, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 min-w-[200px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5"
              >
                {idx + 1}. {nama}
              </div>
            ))}
          </div>
        </div>

        {/* Garis vertikal ke KABID */}
        <div className="w-0.5 h-8 bg-red my-2"></div>

        {/* KABID */}
        <div className="text-center">
          <div className="text-sm font-semibold text-navy mb-2">KABID</div>
          <div className="flex flex-col items-center space-y-2">
            {structure.kabid.map((nama, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 min-w-[200px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5"
              >
                {idx + 1}. {nama}
              </div>
            ))}
          </div>
        </div>

        {/* Garis vertikal dari KABID ke percabangan */}
        <div className="w-0.5 h-6 bg-red my-2"></div>

        {/* Garis horizontal percabangan */}
        <div className="relative w-full max-w-6xl">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-red"></div>
          <div className="flex flex-wrap justify-around gap-4 pt-4">
            {/* BID HUMAS */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-red mb-2"></div>
              <div className="text-sm font-semibold text-navy mb-2">BID HUMAS</div>
              <div className="flex flex-col items-center space-y-2">
                {structure.bidang.humas.map((nama, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 min-w-[200px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5"
                  >
                    {idx + 1}. {nama}
                  </div>
                ))}
              </div>
            </div>

            {/* BID LOGHARA (dengan dua sub-kolom) */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-red mb-2"></div>
              <div className="text-sm font-semibold text-navy mb-2">BID LOGHARA</div>
              <div className="flex gap-4">
                {/* LOGISTIK */}
                <div className="flex flex-col items-center">
                  <div className="text-xs font-semibold text-navy mb-1">LOGISTIK</div>
                  <div className="flex flex-col items-center space-y-2">
                    {structure.bidang.loghara.logistik.map((nama, idx) => (
                      <div
                        key={idx}
                        className="bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 min-w-[180px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5"
                      >
                        {idx + 1}. {nama}
                      </div>
                    ))}
                  </div>
                </div>
                {/* BENDAHARA */}
                <div className="flex flex-col items-center">
                  <div className="text-xs font-semibold text-navy mb-1">BENDAHARA</div>
                  <div className="flex flex-col items-center space-y-2">
                    {structure.bidang.loghara.bendahara.map((nama, idx) => (
                      <div
                        key={idx}
                        className="bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 min-w-[180px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5"
                      >
                        {idx + 1}. {nama}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BID OPERASI */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-red mb-2"></div>
              <div className="text-sm font-semibold text-navy mb-2">BID OPERASI</div>
              <div className="flex flex-col items-center space-y-2">
                {structure.bidang.operasi.map((nama, idx) => (
                  <div
                    key={idx}
                    className="bg-white px-4 py-1 rounded-lg shadow-sm border border-gray-200 min-w-[200px] text-center transition-all duration-300 hover:shadow-lg hover:border-red/30 hover:-translate-y-0.5"
                  >
                    {idx + 1}. {nama}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}