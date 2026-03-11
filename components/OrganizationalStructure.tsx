interface StructureItem {
  title: string;
  names: string[];
}

const structureData: StructureItem[] = [
  { title: 'Pelatih', names: ['Yunior Purba', 'Hadi Suwignyo'] },
  { title: 'Komandan', names: ['Icha'] },
  { title: 'Wakil Komandan', names: ['Reno'] },
  { title: 'Sekretaris', names: ['Aulia', 'Naila', 'Amiq'] },
  { title: 'Kabid', names: ['Billy', 'Yudho'] },
  { title: 'Bidang Loghara', names: ['Hendi', 'Satriya', 'Meisya', 'Alya'] },
  { title: 'Bidang Humas', names: ['Ihza', 'Yusrul', 'Ezar', 'Rossa',  'Anggun','Zahwa'] },
  { title: 'Bidang Operasi', names: ['Nayaka', 'Marcel', 'Ifan', 'Ismi'] },
  { title: 'Bendahara', names: ['Virli', 'Meyla'] },
];

export default function OrganizationalStructure() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {structureData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-bold text-navy mb-3 border-b-2 border-red pb-2">
            {item.title}
          </h3>
          <ul className="space-y-2 text-slate">
            {item.names.map((name, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red rounded-full" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}