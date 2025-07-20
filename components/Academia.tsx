"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";

const Academia = () => {
  return (
    <section id="academia" className="text-white p-8">
      <h2 className="text-3xl font-orbitron mb-4">Academia</h2>
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-orbitron mr-4">
            Ph.D. in Computer Science from Columbia University, NY.
          </h2>
          <Image
            src="/images/columbia_university_logo_125x100.webp"
            alt="Columbia University Logo"
            width={125}
            height={100}
            className="rounded-full"

          />
        </div>
        <HoverEffect items={projects} />
        <div className="mt-12">
          <h3 className="text-2xl font-orbitron mb-6">Publications</h3>
          <ul className="space-y-6">
            {publications.map((pub, index) => (
              <li key={index} className="mb-4">
                <h4 className="font-bold mb-2">{pub.title}</h4>
                <p className="mb-2">{pub.authors}</p>
                <p className="text-sm text-gray-400 mb-2">{pub.venue}</p>
                <div className="flex gap-2 flex-wrap">
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="text-primary hover:text-primary/80 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ({link.label})
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

export const projects = [
  {
    title: "Fennec Fox",
    image: "/images/fennec_stack_states.webp",
    description:
      "Fennec Fox is a platform for low-power wireless embedded devices requiring \
        dynamic network reconfiguration and communication service adaption. Fennec Fox is a platform \
        providing network reconfiguration mechanism. The platform consists of a four-layer network \
        protocol stack, where at runtime various library module may support each layer service. \
        Fennec Fox also provides mechanisms ensuring that all nodes within a network are configured in the same way.",
    link: "https://github.com/mszczodrak/fennec-fox/wiki",
  },
  {
    title: "Swift Fox",
    image: "/images/swift_fox_arch_small.webp",
    description:
      "Swift Fox is a programming language for runtime dynamic network reconfiguration of low-power wireless network \
        running on Fennec Fox platform. Swift Fox compiler is written in C using Flex and Bison libraries. \
        Flex is a tool for generating lexical analyzers and it is an open version of lex. Bison is a parser generator \
        and it is a GNU version of yacc. The generated output of the Swift Fox program is nesC code.",
    link: "https://github.com/mszczodrak/swift-fox/wiki",
  },
  {
    title: "Hardware-Software-Network Codesign for Internet-of-Things",
    image: "/images/hw_sw_net.webp",
    description:
      "Hardware-Software-Network Codesign for Internet-of-Things introduces a new development \
        environment for wireless embedded devices that consists of hardware platform simulator, \
        embedded software running on the simulated instruction-accurate hardware, and wireless \
        communication. Our simulator supports two modes of operation: standalone with hardware, \
        software and network simulation running on a single machine, and testbed mode, with radio \
        hardware-in-the-loop replacing the simulated wireless communication.",
    link: "",
  },
  {
    title: "GOALI Project",
    image: "/images/goali_idea_small.webp",
    description:
      "GOALI Project is NSF sponsored project researching methods for network-enabled embedded \
      monitoring and control for high-performance buildings. Because building occupancy has \
      high-impact on building's energy consumption (HVAC, Light, etc) we focus on development of \
      centralized and distributed occupancy estimation algorithms and deployment of those algorithms \
      in buildings with supported cyber infrastructure, such as wireless networks of sensors and \
      actuators supported with cloud computing.",
    link: "",
  },
  {
    title: "Open Testbed Framework",
    image: "/images/testbed_user.webp",
    description:
      "Open Testbed Framework The Open Testbed Framework (OTF) consists of a set of tools for rapid \
        deployment of a Low-Power Wireless Network (LPWN) testbeds. The LPWN is the underlying \
        communication architecture for systems monitoring environment, such as Wireless Sensor Networks (WSN), \
        and systems interacting with the surrounding environment through sensors and actuators, referred \
        to as Cyber-Physical Systems (CPS).",
    link: "https://github.com/mszczodrak/otf/wiki",
  },
  {
    title: "EnHANTs",
    image: "/images/enhants.webp",
    description:
      "Energy-Harvesting Active Networked Tags (EnHANTs) are small, flexible, and energetically \
        self-reliant devices that can be attached to objects that are traditionally not networked \
        (e.g., books, furniture, walls, doors, toys, keys, clothing, and produce), thereby providing \
        the infrastructure for various novel tracking applications. Examples of these applications include \
        locating misplaced items, continuous monitoring of objects (items in a store, boxes in transit), \
        and determining locations of disaster survivors.",
    link: "https://enhants.ee.columbia.edu/",
  },
];

export const publications = [
  {
    title: "Modeling and Implementation of Energy Neutral Sensing Systems",
    authors: "Marcin K Szczodrak, Omprakash Gnawali and Luca P Carloni",
    venue: "Proc. of ENSSys Work., November, 2013",
    links: [
      {
        label: "PDF: ACM Author-Izer",
        url: "http://dl.acm.org/authorize?6969745",
      },
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2534211" },
      { label: "PDF", url: "papers/szczodrak_enssys13.pdf" },
      { label: "BibTex", url: "papers/szczodrak_enssys13.bib" },
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
      { label: "BibTex", url: "papers/szczodrak_sies13.bib" },
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
      { label: "BibTex", url: "papers/szczodrak_dcoss13.bib" },
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
      { label: "BibTex", url: "papers/gorlatova_infocom13.bib" },
    ],
  },

  {
    title:
      "Demo: A Complete Framework for Programming Event Driven, Self-Reconfigurable Low Power Wireless Networks",
    authors: "Marcin K Szczodrak and Luca P Carloni",
    venue: "ACM SenSys11, Seattle, WA, November, 2011",
    links: [
      {
        label: "PDF: ACM Author-Izer",
        url: "http://dl.acm.org/authorize?6503395",
      },
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2071017" },
      { label: "PDF", url: "papers/szczodrak_sensys11.pdf" },
      { label: "BibTex", url: "papers/szczodrak_sensys11.bib" },
    ],
  },
  {
    title:
      "Demo: Organic Solar Cell-equipped Energy Harvesting Active Networked Tag (EnHANT) Prototypes",
    authors:
      "Gerald Stanje, Paul Miller, Jianxun Zhu, Alexander Smith, Olivia Winn, Robert Margolies, Maria Gorlatova, John Sarik, Marcin K Szczodrak, Baradwaj Vigraham, Luca P Carloni, Peter Kinget, Ioannis Kymissis and Gil Zussman",
    venue: "ACM SenSys11, Seattle, WA, November, 2011",
    links: [
      {
        label: "PDF: ACM Author-Izer",
        url: "http://dl.acm.org/authorize?6503370",
      },
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2071002" },
      { label: "PDF", url: "papers/stanje_sensys11.pdf" },
      { label: "BibTex", url: "papers/stanje_sensys11.bib" },
    ],
  },
  {
    title: "Demo: Prototyping UWB-Enabled EnHANTs",
    authors:
      "Jianxun Zhu, Gerald Stanje, Robert Margolies, Maria Gorlatova, John Sarik, Zainab Noorbhaiwala, Paul Miller, Marcin K Szczodrak, Baradwaj Vigraham, Luca P Carloni, Peter Kinget, Ioannis Kymissis and Gil Zussman",
    venue: "ACM MobiSys11, Washington, DC, June 2011",
    links: [
      {
        label: "PDF: ACM Author-Izer",
        url: "http://dl.acm.org/authorize?446157",
      },
      { label: "ACM", url: "http://dl.acm.org/citation.cfm?id=2000048" },
      { label: "PDF", url: "papers/zhu_mobisys11.pdf" },
      { label: "BibTex", url: "papers/zhu_mobisys11.bib" },
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
