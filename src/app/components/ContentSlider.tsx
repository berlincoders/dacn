// components/ContentSlider.tsx
import Image from 'next/image';

const sampleContent = [
  {
    title: 'Bournemouth - Fulham',
    subtitle: 'Premier League',
    label: 'LIVE',
    image: '/images/match1.jpg',
    href: '#',
  },
  {
    title: 'Falling down to come back stronger',
    subtitle: 'Código MotoGP',
    label: null,
    image: '/images/match2.jpg',
    href: '#',
  },
  {
    title: 'Real Madrid - Barcelona',
    subtitle: 'El Clásico',
    label: 'LIVE',
    image: '/images/match3.jpg',
    href: '#',
  },
  {
    title: 'Behind the Scenes: UFC',
    subtitle: 'Fight Night',
    label: null,
    image: '/images/match4.jpg',
    href: '#',
  },
];

export default function ContentSlider() {
  return (
    <section className="mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Best of DAZN</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
        {sampleContent.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="min-w-[266px] max-w-[266px] rounded-xl overflow-hidden bg-zinc-900 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative pb-[56.25%]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-t-xl object-cover"
              />
              {item.label && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                  {item.label}
                </span>
              )}
            </div>
            <div className="p-3">
              <h4 className="text-white text-sm font-semibold">{item.title}</h4>
              <p className="text-gray-400 text-xs">{item.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
