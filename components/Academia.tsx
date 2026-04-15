"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";

const Academia = () => {
  return (
    <section
      id="academia"
      className="bg-zinc-50 text-zinc-900 py-24 border-t border-zinc-200"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-zinc-900 mb-6">
            Foundational Research
          </h2>
          <div className="flex items-center gap-6 p-6 rounded-2xl border border-zinc-200 bg-white w-fit shadow-sm">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-zinc-200">
              <Image
                src="/images/columbia_university_logo_125x100.avif"
                alt="Columbia University Logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium text-zinc-900">
                Ph.D. in Computer Science
              </p>
              <p className="text-zinc-500 font-light">
                Columbia University, NY
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link || "#"}
              className={`group block h-full no-underline ${!project.link ? "pointer-events-none" : ""}`}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden shadow-sm">
                <CardContent className="p-6">
                  <div className="bg-zinc-50 p-2 rounded-xl mb-6 aspect-video relative overflow-hidden border border-zinc-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-zinc-900 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-600 font-light text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-medium tracking-tight mb-8 text-zinc-900">
            Selected Publications
          </h3>
          <ul className="space-y-8 max-w-4xl">
            {publications.map((pub, index) => (
              <li
                key={index}
                className="group flex flex-col border-b border-zinc-200 pb-8 last:border-0"
              >
                <h4 className="text-lg font-medium text-zinc-800 mb-2 group-hover:text-zinc-900 transition-colors">
                  {pub.title}
                </h4>
                <p className="text-zinc-600 font-light text-sm mb-2">
                  {pub.authors}
                </p>
                <p className="text-xs text-zinc-400 uppercase tracking-wider mb-4">
                  {pub.venue}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="text-sm font-medium text-zinc-500 hover:text-indigo-600 transition-colors flex items-center gap-1 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export interface Project {
  title: string;
  image: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Fennec Fox",
    image: "/images/fennec_stack_states.avif",
    description:
      "Fennec Fox is a platform for low-power wireless embedded devices requiring dynamic network reconfiguration and communication service adaption. The platform consists of a four-layer network protocol stack, where at runtime various library modules may support each layer service.",
    link: "https://github.com/mszczodrak/fennec-fox/wiki",
  },
  {
    title: "Swift Fox",
    image: "/images/swift_fox_arch_small.avif",
    description:
      "Swift Fox is a programming language for runtime dynamic network reconfiguration of low-power wireless network running on the Fennec Fox platform. The compiler is written in C using Flex and Bison, generating nesC code.",
    link: "https://github.com/mszczodrak/swift-fox/wiki",
  },
  {
    title: "Hardware-Software-Network Codesign",
    image: "/images/hw_sw_net.avif",
    description:
      "Introduces a new development environment for wireless embedded devices consisting of a hardware platform simulator, embedded software, and wireless communication. Supports standalone simulation and hardware-in-the-loop testbed modes.",
    link: "",
  },
  {
    title: "GOALI Project",
    image: "/images/goali_idea_small.avif",
    description:
      "NSF sponsored project researching methods for network-enabled embedded monitoring and control for high-performance buildings, focusing on centralized and distributed occupancy estimation algorithms.",
    link: "",
  },
  {
    title: "Open Testbed Framework",
    image: "/images/testbed_user.avif",
    description:
      "The Open Testbed Framework (OTF) provides tools for rapid deployment of Low-Power Wireless Network (LPWN) testbeds, supporting Wireless Sensor Networks and Cyber-Physical Systems.",
    link: "https://github.com/mszczodrak/otf/wiki",
  },
  {
    title: "EnHANTs",
    image: "/images/enhants.avif",
    description:
      "Energy-Harvesting Active Networked Tags are small, flexible, and energetically self-reliant devices attachable to objects traditionally not networked, providing infrastructure for novel tracking applications.",
    link: "https://enhants.ee.columbia.edu/",
  },
];

export interface PublicationLink {
  label: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    title: "Modeling and Implementation of Energy Neutral Sensing Systems",
    authors: "Marcin K Szczodrak, Omprakash Gnawali and Luca P Carloni",
    venue: "Proc. of ENSSys Work., November, 2013",
    links: [
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2534211" },
      { label: "PDF", url: "papers/szczodrak_enssys13.pdf" },
    ],
  },
  {
    title:
      "An Open Framework to Deploy Heterogeneous Wireless Testbed for Cyber-Physical Systems",
    authors:
      "Marcin K Szczodrak, Yong Yang, Dave Cavalcanti and Luca P Carloni",
    venue: "Proc. of IEEE SIES Symp., June, 2013",
    links: [
      {
        label: "IEEE",
        url: "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6601494",
      },
      { label: "PDF", url: "papers/szczodrak_sies13.pdf" },
    ],
  },
  {
    title:
      "Dynamic Reconfiguration of Wireless Sensor Networks to Support Heterogeneous Applications",
    authors: "Marcin K Szczodrak, Omprakash Gnawali and Luca P Carloni",
    venue: "Proc. IEEE DCOSS Conf., May, 2013",
    links: [
      {
        label: "IEEE",
        url: "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6569409",
      },
      { label: "PDF", url: "papers/szczodrak_dcoss13.pdf" },
    ],
  },
  {
    title: "Prototyping Energy Harvesting Active Networked Tags (EnHANTs)",
    authors:
      "Maria Gorlatova, Robert Margolies, John Sarik, Gerald Stanje, Jianxun Zhu, Baradwaj Vigraham, Marcin K Szczodrak, Luca P Carloni, Peter Kinget, Ioannis Kymissis and Gil Zussman",
    venue: "Proc. IEEE INFOCOM'13 mini-conference, Turin, Italy, April, 2013",
    links: [
      {
        label: "IEEE",
        url: "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6566840",
      },
      { label: "PDF", url: "papers/gorlatova_infocom13.pdf" },
    ],
  },
  {
    title:
      "Demo: A Complete Framework for Programming Event Driven, Self-Reconfigurable Low Power Wireless Networks",
    authors: "Marcin K Szczodrak and Luca P Carloni",
    venue: "ACM SenSys11, Seattle, WA, November, 2011",
    links: [
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2071017" },
      { label: "PDF", url: "papers/szczodrak_sensys11.pdf" },
    ],
  },
  {
    title:
      "Demo: Organic Solar Cell-equipped Energy Harvesting Active Networked Tag (EnHANT) Prototypes",
    authors:
      "Gerald Stanje, Paul Miller, Jianxun Zhu, Alexander Smith, Olivia Winn, Robert Margolies, Maria Gorlatova, John Sarik, Marcin K Szczodrak, Baradwaj Vigraham, Luca P Carloni, Peter Kinget, Ioannis Kymissis and Gil Zussman",
    venue: "ACM SenSys11, Seattle, WA, November, 2011",
    links: [
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2071002" },
      { label: "PDF", url: "papers/stanje_sensys11.pdf" },
    ],
  },
  {
    title: "Demo: Prototyping UWB-Enabled EnHANTs",
    authors:
      "Jianxun Zhu, Gerald Stanje, Robert Margolies, Maria Gorlatova, John Sarik, Zainab Noorbhaiwala, Paul Miller, Marcin K Szczodrak, Baradwaj Vigraham, Luca P Carloni, Peter Kinget, Ioannis Kymissis and Gil Zussman",
    venue: "ACM MobiSys11, Washington, DC, June 2011",
    links: [
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2000048" },
      { label: "PDF", url: "papers/zhu_mobisys11.pdf" },
    ],
  },
  {
    title:
      "Prototyping Energy Harvesting Active Networked Tags: Phase II MICA Mote-based Devices",
    authors:
      "Maria Gorlatova, Zainad Noorbhaiwala, Abraham Skolnik, John Sarik, Marcin K Szczodrak, Jiasi Chen, Michael Zapas, Luca P Carloni, Peter Kinget, Ioannis Kymissis, Dan Rubenstein and Gil Zussman",
    venue: "ACM MobiCom'10, Chicago, IL, September 2010",
    links: [{ label: "PDF", url: "papers/gorlatova_mobicom10.pdf" }],
  },
  {
    title:
      "Tiered Architecture for On-line Detection, Isolation, and Repair of Faults in Wireless Sensor Networks",
    authors:
      "Sadaf Zahedi, Marcin K Szczodrak, Ping Ji, Dinkar Mylaraswamy, Mani B Srivastava and Robert Young",
    venue: "MILCOM, San Diego, CA, November 17-19, 2008",
    links: [
      {
        label: "IEEE",
        url: "http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=4753634",
      },
      { label: "PDF", url: "papers/zahedi_milcom08.pdf" },
    ],
  },
  {
    title:
      "Simulation Framework for QoI Characterization of Sensor Networks in the Presence of Faults",
    authors:
      "Marcin K Szczodrak, Sadaf Zahedi, Ping Ji, Dinkar Mylaraswamy, Mani B Srivastava and Robert Young",
    venue:
      "The Second Annual Conference of the International Technology Alliance, Imperial College London, UK, September 16-18, 2008",
    links: [{ label: "PDF", url: "papers/szczodrak_ita08.pdf" }],
  },
  {
    title: "Multivariate Model for Data Cleansing in Sensor Networks",
    authors: "Ping Ji and Marcin K Szczodrak",
    venue:
      "The Second Annual Conference of the International Technology Alliance, Imperial College London, UK, September 16-18, 2008",
    links: [{ label: "PDF", url: "papers/ji_ita08.pdf" }],
  },
  {
    title:
      "Two-Tier Framework for Sensor Fault Characterization in Sensor Networks",
    authors:
      "Sadaf Zahedi, Marcin K Szczodrak, Ping Ji, Dinkar Mylaraswamy, Mani B Srivastava and Robert Young",
    venue:
      "The Second Annual Conference of the International Technology Alliance, Imperial College London, UK, September 16-18, 2008",
    links: [{ label: "PDF", url: "papers/zahedi_ita08.pdf" }],
  },
  {
    title:
      "Two-Level ZigBee-4G Design for Secure and Efficient Communications in the Resources Constrained Military Environment",
    authors: "Marcin K Szczodrak, Jinwoo Kim and Yuncheol Baek",
    venue:
      "International Journal of Computer Science and Network Security, vol. 7 no.10, October 2007",
    links: [{ label: "PDF", url: "papers/na.html" }],
  },
  {
    title: "4G and MANET, Wireless Network of Future Battlefield",
    authors: "Marcin K Szczodrak and Jinwoo Kim",
    venue:
      "Proceedings of the 2007 International Conference on Security & Management, Las Vegas, Nevada, USA, June 25-28, 2007",
    links: [{ label: "PDF", url: "papers/na.html" }],
  },
  {
    title:
      "4GM@4GW: Implementing 4G in the Military Mobile Ad-Hoc Network Environment",
    authors: "Marcin K Szczodrak, Jinwoo Kim and Yuncheol Baek",
    venue:
      "International Journal of Computer Science and Network Security, vol.7 no.4, April 2007",
    links: [{ label: "PDF", url: "papers/na.html" }],
  },
];

export default Academia;
