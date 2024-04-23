import InquiryForm from '@/components/InquiryForm.vue'
import { text } from 'stream/consumers'

export const messages = {
  en: {
    menubar: {
      products: 'Products and services',
      career: 'Career',
      contact: 'Contact',
      about: 'About us',
    },
    footerLinks: {
      company: 'Company',
      contactUs: 'Contact us',
      changeLang: 'Change language',
      news: 'News',
      references: 'References',
    },
    products: {
      label: {
        l1: 'Panel Boards Manufacturing',
        l2: 'Technological Electromontage',
        l3: 'Photovoltaics',
        l4: 'Our Other Activities',
      },
    },
    about: {
      gallery: 'Gallery',
      certificate: 'Certificates',
      sertificateName_1: 'Quality management system',
      sertificateName_2: 'Quality policy',
      about_1:
        'Our company, based in Ostrava, focuses on manufacturing activities and services in the field of electrotechnics. The main area of our operation is the production of panel boards and technological electromontage.',
      about_2:
        'We participate in projects within the Moravian-Silesian Region and throughout the Czech Republic, as well as collaborate with international partners. Our products, solutions, and assemblies are applied in various industrial sectors - in metallurgy, energy, food industry, chemical industry, and other fields.',
      about_3:
        'We have been operating in the market since 1998. In 2019, we became part of the international Ingeteam Group, which also has representation in the Czech Republic. Throughout the existence of our company, fundamental values for us are respect and responsibility towards the customer - whether large-scale or small-scale, integrity of our actions, fairness, and honesty.',
      about_4:
        'Production takes place in a modern environment of a new operational building using technical means for digitization and streamlining of production processes. The quality of our products and the professionalism of our technical and production team are a guarantee of your satisfaction with us.',
    },
    contact: {
      department_1: 'Company management',
      department_2: 'Photovoltaics',
      department_3: 'Technological electromontage',
      department_4: 'Panel boards manufacturing',
      position_1: 'Head of sales department',
      position_2: 'Sales department',
      position_3: 'Technical sales manager',
      position_4: 'Panel boards broduction manager',
      position_5: 'Head of purchasing',
      position_6: 'Managing director',
      position_7: 'Quality management',
    },
    baner: {
      row1: 'Professional',
      row2: 'Services in the field of',
      row3: 'Electrotechnologies',
      row4: 'The main focus of our operation is the production of panel boards and technological electromontage.',
    },
    home: {
      text1: 'Who we are and what we do',
      text2:
        'Our company, based in Ostrava, focuses on manufacturing activities and services in the field of electrotechnics. We participate in projects within the Moravian-Silesian Region and throughout the Czech Republic, as well as collaborate with international partners. Our products, solutions, and assemblies are applied in various industrial sectors - in metallurgy, energy, food industry, chemical industry, and other fields.',
      text3: 'Partners',
      item1: 'Completed projects',
      item2: 'Find your place!',
      item3: 'Under the hood',
      item4: 'Contact us!',
      item5: '',
    },
    career: {
      btn_detail: 'Position details',
      btn_download: 'Download as PDF',
      hr1: 'For any inquiries, interest, or anything else, please contact our HR:',
      hr2: 'HR manager',
      position1: 'Assembly electromechanic',
      position1_descr_1:
        'You will be involved in the production of electrical panel boards in new manufacturing facilities with modern equipment',
      position1_descr_2: 'You will be involved in ensuring electrical assembly work',
      position1_descr_3:
        'You will have a range of benefits - 5 weeks of vacation, single-shift operation, meal vouchers, monthly and annual bonuses, etc.',
      position1_descr_4:
        'We would appreciate if you have education in the field of electrical engineering (vocational school, high school)',
    },
    news: {
      news1_title: 'Offer of Photovoltaic Power Plant Implementation',
      news1_text:
        'Are you considering a photovoltaic power plant? Our company ELPROM SERVICE s.r.o. offers: Turnkey residential photovoltaic power plant Battery storage, energy backup in case of grid failure Processing of application with the distributor Processing of NZÚ subsidy program In case...',
      news2_title: 'Cylinders Vítkovice Control System for the Rolling Mill',
      news2_text:
        'For the general contractor of the technology, we supplied switchboards with a control system for controlling and operating the rolling mill technology.',
      news3_title: 'Synthos Kralupy',
      news3_text:
        'We have successfully completed a project to implement servo drive for damper valves for Synthos Kralupy.',
      news4_title: 'Switchboards for Photovoltaic Power Plants ranging from 100 to 500 kW - IKEA Brno',
      news4_text:
        'In cooperation with the technology supplier, we provided AC switchboards for powering the technology and DC boxes including protective devices for individual strings and inverters.',
      news5_title: 'Switchboards for Hydraulic Shears - Phase 1',
      news5_text:
        'For the technology general contractor, we participated in the assembly and production of DC inverter switchboards for controlling and operating trimming (double-sided) shears.',
      news6_title: 'Electromobility Brno',
      news6_text:
        'As part of expanding the customer portfolio, we participated in the production of switchboards for newly built charging stations for electric vehicle mobility. Our goal is to establish ourselves in this industry in the future.',
    },
    switchboard: {
      text1:
        'We manufacture standard switchboards for various industrial segments, taking into account the specific conditions of individual operations. All supplied solutions are tested in authorized laboratories.',
      text2:
        'The supply of equipment is designed with regard to the connection conditions of the transformer, with the possibility of power supply from multiple sources, with the alternative use of busbars, and with the design of reactive power compensation solutions. Based on your order, we will prepare manufacturing documentation that defines layout requirements, technology and instrumentation requirements, and is prepared in accordance with project documentation.',
      text3:
        'Our switchboards are used by customers in many countries around the world, including Japan, India, Russia, and Turkey.',
    },
    installation: {
      text1:
        'We provide all electrical installation work related to residential and industrial electrical installations - LV, HV, MaR, and low-voltage distribution.',
      text2:
        'We install and commission industrial lines, distribution system technologies, and electrical installations for industrial hall equipment. Additionally, industrial boiler and power source applications, building wiring, lighting, substation installation, high-voltage distribution up to 230kV, and last but not least, customer service and maintenance.',
      text3:
        'We offer electrical installation work from the very beginning, from project documentation development to completion, including inspection reports.',
    },
    photovoltaic: {
      text1:
        'Our company has been operating in the Photovoltaic Systems market since 2009. We install photovoltaics not only on family houses but also on industrial halls, public buildings, and ground installations.',
      text2: 'If you have decided to implement photovoltaics on your family house, we offer you:',
      text3: 'We guarantee backup of the entire house in case of grid failure',
      text4: 'We will install a charging station for your car',
      text5: 'We will set up the utilization of surpluses into a heat pump or storage tanks',
      text6: 'We will process applications for you with the distributor',
      text7: 'We will process subsidies from the New Green Savings subsidy program',
      text8:
        "We meet the conditions of the New Green Savings 'Ten Commandments for Choosing Photovoltaics' issued by the Association of Accumulation and Photovoltaics",
      text9: 'Turnkey photovoltaic power plant including battery storage',
      text10: 'When implementing large photovoltaic power plants on industrial halls, public buildings, and land',
      text11: 'We will design the best turnkey solution:',
      text12: 'based on verified components',
      text13: 'prepare documentation for building permits',
      text14: 'provide a structural assessment and fire safety solution for the building',
      text15: 'Or supply:',
      text16: 'component supplies - panels, inverters, structures, cabling',
      text17: 'manufacturing of switchboards',
      text18: 'If you are interested, please write to',
      text19: 'or use the inquiry form.',
    },
    productNext: {
      text1: 'Specification and supply of assembly materials',
      text2: 'Supply and installation of cables',
      text3: 'Supply and installation of cable trays',
      text4: 'Installation of switchboards',
      text5: 'Connection of MaR devices',
      text6: 'Installation and control of lighting technologies and buildings',
      text7: 'Cable termination, measurement',
      text8: 'Electrical inspection',
      text9: 'Dismantling work',
      text10: 'Site equipment and material handling',
    },
  },

  cz: {
    menubar: {
      products: 'Produkty a služby',
      career: 'Kariéra',
      contact: 'Kontakt',
      about: 'O nás',
    },
    footerLinks: {
      company: 'Společnost',
      contactUs: 'Kontaktujte nás',
      changLng: 'Změnit jazyk',
      news: 'Aktuality',
      references: 'Reference',
    },
    products: {
      label: {
        l1: 'Výroba rozvaděčů',
        l2: 'Technologické elektromontáže',
        l3: 'Fotovoltaika',
        l4: 'Naše další činnosti',
      },
    },
    about: {
      gallery: 'Galerie',
      certificate: 'Certifikáty',
      sertificateName_1: 'Systém managementu kvality',
      sertificateName_2: 'Politika kvality',
      about_1:
        'Naše společnost sídlící v Ostravě se zaměřuje na výrobní činnosti a služby v elektrotechnice. Hlavním oborem  naší působnosti je výroba rozvaděčů a technologické elektromontáže.',
      about_2:
        'Podílíme se na projektech v rámci Moravskoslezského kraje i celé České republiky, spolupracujeme i se zahraničními partnery. Naše výrobky, řešení a montáže jsou aplikovány v mnoha různých průmyslových odvětvích – v hutnictví, energetice, potravinářství, v chemickém průmyslu a dalších oborech.',
      about_3:
        'Na trhu působíme od roku 1998, v roce 2019 jsme se stali součástí mezinárodní skupiny Ingeteam Group, která má zastoupení i v České republice. Po celou dobu existence naší společnosti jsou pro nás zásadními hodnotami respekt a odpovědnost k zákazníkovi – k velkoodběrateli nebo maloodběrateli, integrita našeho jednání, férovost  a čestnost.',
      about_4:
        'Výroba probíhá v moderním prostředí nové provozní budovy s využitím technických prostředků pro digitalizaci a zefektivnění výrobních procesů. Kvalita našich výrobků a profesionalita našeho technického a výrobního týmu je garancí Vaší spokojenosti s námi.',
    },
    contact: {
      department_1: 'Vedení společnosti',
      department_2: 'Fotovoltaika',
      department_3: 'Technologické elektromontáže',
      department_4: 'Výroba rozvaděčů',
      position_1: 'Vedoucí obchodního oddělení',
      position_2: 'Obchodní oddělení',
      position_3: 'Technicko-obchodní manažer',
      position_4: 'Vedoucí výroby rozvaděčů',
      position_5: 'Vedoucí nákupu',
      position_6: 'Jednatel',
      position_7: 'Řízení jakosti',
    },
    baner: {
      row1: 'Profesionální',
      row2: 'Služby v oblasti',
      row3: 'Elektrotechnologií',
      row4: 'Hlavním oborem naší působnosti je výroba rozvaděčů a technologické elektromontáže.',
    },
    home: {
      text1: 'Kdo jsme a co děláme',
      text2:
        'Naše společnost sídlící v Ostravě se zaměřuje na výrobní činnosti a služby v elektrotechnice. Podílíme se na projektech v rámci Moravskoslezského kraje i celé České republiky, spolupracujeme i se zahraničními partnery. Naše výrobky, řešení a montáže jsou aplikovány v mnoha různých průmyslových odvětvích – v hutnictví, energetice, potravinářství, v chemickém průmyslu a dalších oborech.',
      text3: 'Partneři',
      item1: 'Realizované projekty',
      item2: 'Najdi si své místo!',
      item3: 'Pod pokličkou',
      item4: 'Napište nám!',
      item5: '',
    },
    career: {
      btn_detail: 'Detail pozice',
      btn_download: 'Stáhnout jako PDF',
      hr1: 'V případě jakýchkoli dotazů, zájmu či čehokoli jiného, obraťte se prosím na naše HR:',
      hr2: 'HR manažerka',
      position1: 'Montážní elektromechanik',
      position1_descr_1:
        'Budeš se podílet na výrobě elektro rozvaděčů v nových výrobních prostorách s moderním vybavením',
      position1_descr_2: 'Budeš se podílet na zajištění elektromontážních prací',
      position1_descr_3:
        'Budeš mít celou řadu benefitů – 5 týdnu dovolené, jednosměnný provoz, stravenkový paušál, měsíční a roční odměny apod',
      position1_descr_4: 'Budeme rádi, když budou mít vzdělání v oboru elektro (odborné učiliště, střední škola)',
    },
    news: {
      news1_title: 'Nabídka realizace fotovoltaické elektrárny',
      news1_text:
        'Přemýšlíte o fotovoltaické elektrárně? Naše společnost ELPROM SERVICE s.r.o. nabízí: Domovní fotovoltaickou elektrárnu na klíč Bateriové úložiště, zálohování energie pro případ výpadku sítě Vyřízení žádosti u distributora Vyřízení dotačního programu NZÚ V případě...',
      news2_title: 'Cylinders vítkovice řídicí systém protlačovny',
      news2_text:
        'Pro generálního dodavatele technologie jsme dodali rozvaděče s řídícím systémem k řízení a ovládání technologie protlačovny.',
      news3_title: 'Synthos kralupy',
      news3_text: 'Úspěsně jsme dokončili projekt na realizaci servopohonu šoupátek pro firmu Synthos Kralupy.',
      news4_title: 'Rozvaděče pro fotovoltaické elektrárny v rozsahu od 100 do 500kw – IKEA Brno',
      news4_text:
        'Ve spolupráci s dodavatelem technologie jsme dodali rozvaděče AC pro napájení technologie a boxy DC včetně ochranných prvků jednotlivých stringů a  střídačů. ',
      news5_title: 'Rozvaděče pro hydraulické nůžky – 1. etapa',
      news5_text:
        'Pro generálního dodavatele technologií jsme se podíleli na montáži a výrobě DC měničových rozvaděčů k řízení a ovládání okrajovacích (oboustranných) nůžek.',
      news6_title: 'Elektromobilita Brno',
      news6_text:
        'V rámci rozšíření portfolia zákazníků jsme se podíleli výrobou rozvaděčů pro nově vybudované nabíjecí stanice pro mobilitu elektrických vozů. Našim cílem je v tomto odvětví se profilovat i do budoucna.',
    },
    switchboard: {
      text1:
        'Vyrábíme typové rozvaděče pro různé průmyslové segmenty s ohledem na specifičnost podmínek konkrétních provozů. Veškerá dodávaná řešení prověřujeme v autorizovaných zkušebnách.',
      text2:
        'Dodávka zařízení je koncipována s ohledem na připojovací podmínky transformátoru s případnou možností napájení z několika zdrojů, s alternativou použití propojovacích mostů a s návrhem řešení kompenzace jalového výkonu. Na základě Vaší objednávky vypracujeme výrobní dokumentaci, která definuje dispoziční požadavky, požadavky na technologii a instrumentaci a která je zpracována v souladu s projektovou dokumentací.',
      text3:
        'Naše rozvaděče využívají zákazníci v mnoha zemích světa, mimo jiné v Japonsku, v Indii, v Rusku nebo Turecku.',
    },
    installation: {
      text1:
        'Zajišťujeme veškeré elektroinstalační práce spojené s bytovou a průmyslovou elektroinstalací – oblast NN, VN, MaR a slaboproudé rozvody.',
      text2:
        'Provádíme montáž a uvádíme do provozu průmyslové linky, technologie distribuční soustavy a elektromontáže pro vybavení průmyslových hal. Dále pak průmyslové aplikace kotlů a energetických zdrojů, rozvody v budovách, osvětlení, montáž trafostanic a rozvoden vysoké napětí do 230kV a v neposlední řadě servis a údržba přímo u zákazníka.',
      text3:
        'Nabízíme provedení elektroinstalačních prací od samotného počátku, vypracování projektové dokumentace až po dokončení, vč. revizní zprávy.',
    },
    photovoltaic: {
      text1:
        'Naše společnost působí na trhu Fotovoltaických systémů již od roku 2009. Instalujeme fotovoltaiku nejen na rodinné domy, ale také na průmyslové haly, veřejné budovy a pozemní instalace.',
      text2: 'Pokud jste se rozhodli pro realizaci fotovoltaiky i na Vašem rodinném domě, nabízíme Vám:',
      text3: 'Garantujeme zálohování celého domu pro případ výpadku sítě',
      text4: 'Nainstalujeme Vám dobíjecí stanici pro automobil',
      text5: 'Nastavíme využití přebytků do tepelného čerpadla nebo akumulačních nádob',
      text6: 'Vyřídíme za Vás žádosti u distributora',
      text7: 'Vyřídíme dotace z dotačního programu Nová Zelená Úsporám',
      text8: 'Splňujeme podmínky NZÚ „Desatero pro výběr fotovoltaiky“, které vydal Cech akumulace a fotovoltaiky',
      text9: 'Fotovoltaickou elektrárnu na klíč včetně bateriové úložiště',
      text10:
        'Při realizaci velkých fotovoltaických elektráren na průmyslových halách, veřejných budovách a na pozemcích',
      text11: 'Navrhneme nejlepší řešení na klíč:',
      text12: 'na základě ověřených komponent',
      text13: 'připravíme podklady pro stavební povolení',
      text14: 'zajistíme statický posudek a požárně bezpečnostní řešení stavby',
      text15: 'Nebo dodavatelsky:',
      text16: 'dodávky komponent – panely, střídače, konstrukce, kabeláž',
      text17: 'výroba rozvaděčů',
      text18: 'V případě zájmu prosím pište na ',
      text19: 'nebo využijte poptávkový formulář.',
    },
    productNext: {
      text1: 'Specifikace a dodávka montážního materiálu',
      text2: 'Dodávka a montáž kabelů',
      text3: 'Dodávka a montáž kabelových tras',
      text4: 'Instalace rozvaděčů',
      text5: 'Zapojení prostředků MaR',
      text6: 'Montáž a řízení osvětlení technologií a budov',
      text7: 'Zakončení kabelů, měření',
      text8: 'Revize elektro',
      text9: 'Demontážní práce',
      text10: 'Zajištění vybavení staveniště a manipulace s materiálem',
    },
    inquiryForm: 'Poptávkový formulář',
    inquiryFormIn: {
      header: 'Nezávazná poptávka na projekt fotovoltaiky',
      text1:
        'Prosíme o vyplnění několika údajů o Vás, abychom se s Vámi mohli spojit a věděli o jakou lokalitu se jedná.',
      name: 'Jméno a příjmení',
      phone: 'Telefon',
      email: 'E-mail',
      street: 'Ulice',
      number: 'Číslo popisné nebo číslo parcelní',
      psc: 'PSČ',
      region: 'Obec',
      consump: 'Vaše roční spotřeba elektřiny v MWh',
      square: 'Celková plochy střechy',
      radio1: 'Soukromá osoba',
      radio2: 'Firma',
      textarea: 'Poznámka / dotaz',
      btnSend:'Odeslat',
      btnCancel:'Zrušit'
    },
  },
}
