import { ownerFieldPhotos } from "@/lib/field-media";
import { siteConfig } from "@/lib/site";

export type ServicePhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type FresnoServicePage = {
  path: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  overview: string;
  breadcrumbName: string;
  serviceName: string;
  serviceType: string;
  pestLabel: string;
  identificationPhoto: ServicePhoto;
  photos: readonly ServicePhoto[];
  signsHeading: string;
  signs: readonly { name: string; summary: string }[];
  localHeading: string;
  localCopy: readonly string[];
  visitHeading: string;
  visitIntro: string;
  visitSteps: readonly { name: string; summary: string }[];
  defaultPestIssue: string;
  faqs: readonly { question: string; answer: string }[];
};

const bedBugsMeta = siteConfig.pages.bedBugExterminatorFresno;
const rodentsMeta = siteConfig.pages.rodentControlFresno;
const roachesMeta = siteConfig.pages.roachControlFresno;

export const fresnoServicePages = {
  bedBugs: {
    path: bedBugsMeta.path,
    title: bedBugsMeta.title,
    description: bedBugsMeta.description,
    heading: "Bed bugs in Fresno mattresses, sofas, and rentals.",
    intro:
      "Bites after a night's sleep, blood spots on sheets, or a bug in a mattress seam? The Bug Dude treats bed bugs in Fresno-area homes, apartments, and businesses. Call or send what you're seeing.",
    overview:
      "Bed bugs hitch rides in luggage, used furniture, and multi-unit buildings. They hide in seams and cracks by day and feed at night. Heat in the Central Valley does not solve an indoor bed bug problem—air conditioning keeps rooms in the range they live in. Tell us the room, the furniture, and whether it started after travel, a new tenant, or a neighbor unit.",
    breadcrumbName: "Bed bug exterminator",
    serviceName: "Bed bug exterminator in Fresno",
    serviceType: "Bed bug exterminator",
    pestLabel: "Bed bugs",
    identificationPhoto: {
      src: "/pests/bed-bug.webp",
      alt: "Adult bed bug, oval and reddish brown, photographed from above on a light background",
      caption: "Bed bug, the insect we look for in seams and folds.",
    },
    photos: [
      {
        src: "/pests/bed-bug.webp",
        alt: "Adult bed bug, oval and reddish brown, photographed from above on a light background",
        caption: "Bed bug, the insect we look for in seams and folds.",
      },
      {
        src: ownerFieldPhotos.truck.src,
        alt: ownerFieldPhotos.truck.alt,
        caption: ownerFieldPhotos.truck.caption,
      },
    ],
    signsHeading: "Signs it may be bed bugs",
    signs: [
      {
        name: "Bites you notice in the morning",
        summary:
          "Itchy welts in a line or cluster, often on arms, shoulders, or the back, after sleeping in the same bed or on the same couch.",
      },
      {
        name: "Blood spots and stains on sheets",
        summary:
          "Small rusty or blood-colored dots on pillowcases, sheets, or mattress piping. Dark spots can be droppings along seams.",
      },
      {
        name: "Live bugs or shed skins in the bed",
        summary:
          "Flat, apple-seed-sized insects in mattress seams, box-spring corners, headboards, or the folds of a sofa that gets used as a bed.",
      },
      {
        name: "It started after travel or a unit turnover",
        summary:
          "A hotel stay, visiting guests, used furniture, or a new tenant in a Fresno rental are common ways bed bugs move from one room to another.",
      },
    ],
    localHeading: "Where Fresno homes and properties see them",
    localCopy: [
      "In Fresno and the rest of the Central Valley, bed bug calls usually come from bedrooms and living rooms—not yards. Apartments and small rentals see them because units share walls, hallways, and laundry. Hotels, short-term stays, and houses after a trip show up too.",
      "They hide close to where people sleep: mattress piping, the underside of a box spring, nightstand joints, couch seams, and baseboards behind the bed. A warm indoor room year-round is enough. Outdoor summer heat does not clear a mattress.",
      "If you manage a property, say so. One unit with bites or stains can mean we should talk about adjoining rooms, not just the first complaint.",
    ],
    visitHeading: "What to expect from a bed bug visit",
    visitIntro:
      "You do not need to diagnose every insect before you call. Name the room, what you saw, and how soon you need help. Same-day sometimes works if the schedule allows. One-time visits are fine.",
    visitSteps: [
      {
        name: "Tell us the sleep spots",
        summary:
          "Bed, sofa, guest room, or a rental turnover. Mention travel, a new tenant, or a neighboring unit if that is how it started.",
      },
      {
        name: "We inspect the hiding places",
        summary:
          "Seams, piping, headboards, nearby furniture, and baseboards—the spots bed bugs actually use during the day.",
      },
      {
        name: "Treat, then follow up if needed",
        summary:
          "We treat what is there and talk through what you should wash or bag. If you are not satisfied, we come back at no charge. No long-term contract required.",
      },
    ],
    defaultPestIssue: "Bed bugs in a Fresno home or rental.",
    faqs: [
      {
        question: "Do you treat bed bugs in Fresno apartments and homes?",
        answer:
          "Yes. Homes, rentals, and businesses. Tell us the room and what you saw—bites, stains, or a live bug—and we will follow up with estimate options.",
      },
      {
        question: "Can I get same-day bed bug service?",
        answer: `Sometimes, if the schedule allows. Call ${siteConfig.phoneDisplay} during ${siteConfig.hours.display} and we will check.`,
      },
      {
        question: "Do I have to sign a contract for bed bugs?",
        answer:
          "No. One-time visits and no-contract options are both fine. If you are not satisfied after service, we come back at no charge.",
      },
    ],
  },
  rodents: {
    path: rodentsMeta.path,
    title: rodentsMeta.title,
    description: rodentsMeta.description,
    heading: "Mice and rats in Fresno garages, kitchens, and warehouses.",
    intro:
      "Droppings in the garage, scratching in a ceiling at night, or chew marks on a food bag? The Bug Dude handles rodent control for Fresno homes, rentals, and businesses. Call or leave a note.",
    overview:
      "Mice and rats come in for food, water, and shelter. In the Central Valley that often means a garage, attic, warehouse aisle, or restaurant dumpster line—not just a kitchen. They squeeze through small gaps, nest in insulation or stored boxes, and chew what is in the way, including wiring and packaging. Tell us where you are seeing activity and whether it is a house, rental, or commercial site.",
    breadcrumbName: "Rodent control",
    serviceName: "Rodent control in Fresno",
    serviceType: "Rodent control",
    pestLabel: "Rodents",
    identificationPhoto: {
      src: "/pests/mouse.webp",
      alt: "House mouse, gray-brown with a long tail, standing on a light background",
      caption: "Mouse, the kind of rodent we get called about in garages and kitchens.",
    },
    photos: [
      {
        src: "/pests/mouse.webp",
        alt: "House mouse, gray-brown with a long tail, standing on a light background",
        caption: "Mouse, the kind of rodent we get called about in garages and kitchens.",
      },
      {
        src: ownerFieldPhotos.truck.src,
        alt: ownerFieldPhotos.truck.alt,
        caption: ownerFieldPhotos.truck.caption,
      },
    ],
    signsHeading: "Signs it may be rodents",
    signs: [
      {
        name: "Droppings in a trail",
        summary:
          "Small dark pellets along garage walls, in cabinets, under a sink, or on warehouse racking. Fresh droppings look darker and softer than old ones.",
      },
      {
        name: "Scratching or running at night",
        summary:
          "Sounds in a ceiling, wall, or attic after dark. Mice are noisy in voids; rats are heavier and often travel along fence lines or dumpsters too.",
      },
      {
        name: "Chew marks and torn packaging",
        summary:
          "Gnawed pet food, bird seed, cardboard, or plastic bins. Teeth marks on wood or wiring in a garage or storage room matter as well.",
      },
      {
        name: "Nests and grease rubs",
        summary:
          "Shredded paper, insulation, or fabric tucked behind stored items. Dark rub marks along a gap, pipe chase, or door sweep show a regular run.",
      },
    ],
    localHeading: "Where rodents show up around Fresno",
    localCopy: [
      "Fresno County and Madera County properties see mice in garages, attics, and laundry rooms, especially when nights cool off and they look for indoor shelter. Rats show up around outdoor food sources—dumpsters behind restaurants, pet food on a patio, and stored grain or seed in a workspace.",
      "Warehouses and shops get activity near receiving doors, break rooms, and cluttered storage. Homes get it along the garage-to-kitchen path: a gap under a side door, a pet-food bin, then cabinets. Irrigation, alleys, and older door sweeps give them easy edges to follow.",
      "Property managers usually call when tenants report scratching or droppings in more than one unit, or when a warehouse bay keeps showing chew marks. Say the building type and the spots. We will work out an estimate from that.",
    ],
    visitHeading: "What to expect from a rodent visit",
    visitIntro:
      "A short description is enough: droppings, chewing, or nighttime noise, and where. We will talk through a visit and a price. One-time service is fine if you do not want a plan.",
    visitSteps: [
      {
        name: "Point us to the activity",
        summary:
          "Garage, attic, kitchen, dumpster line, or a warehouse aisle. Note pet food, stored boxes, or a gap you already found.",
      },
      {
        name: "We look at travel and nest spots",
        summary:
          "Droppings, rub marks, chew points, and the openings they are using on that property—not a generic checklist.",
      },
      {
        name: "A plan for that building",
        summary:
          "We set a course for the activity you called about. Same-day sometimes works if the schedule allows. Not happy? We come back at no charge.",
      },
    ],
    defaultPestIssue: "Rodents (mice or rats) at a Fresno home or business.",
    faqs: [
      {
        question: "Do you handle mice and rats in Fresno?",
        answer:
          "Yes. Rodent control for homes, rentals, restaurants, warehouses, and other businesses. Tell us where you are seeing droppings, chewing, or noise.",
      },
      {
        question: "Is rodent control only for houses?",
        answer:
          "No. Facilities and property managers call about garages, units, receiving areas, and dumpster lines too. Describe the site and we will follow up.",
      },
      {
        question: "Do I need a long-term rodent contract?",
        answer:
          "No. One-time visits and no-contract options are both fine. If you are not satisfied, we come back at no charge.",
      },
    ],
  },
  roaches: {
    path: roachesMeta.path,
    title: roachesMeta.title,
    description: roachesMeta.description,
    heading: "Kitchen roaches in Fresno homes, apartments, and restaurants.",
    intro:
      "Roaches at night in the kitchen, pepper-like droppings behind a stove, or a sticky trap that filled up overnight? The Bug Dude treats roaches in Fresno homes and businesses. Call or request an estimate.",
    overview:
      "German roaches are the ones that take over kitchens and break rooms. They live in warm cracks—appliance sides, cabinet hinges, wall voids—and they move at night. The photos on this page are from real Fresno-area stops: clusters along a vent, droppings behind an appliance, a trap that caught activity, and a kitchen corner after a heavy infestation. Tell us if you are seeing them at home, in a rental, or in food service.",
    breadcrumbName: "Roach control",
    serviceName: "Roach control in Fresno",
    serviceType: "Roach control",
    pestLabel: "Roaches",
    identificationPhoto: {
      src: "/pests/german-roach.webp",
      alt: "German cockroach, tan with two dark stripes on the thorax, photographed from above",
      caption: "German cockroach, the kitchen roach we see most in indoor jobs.",
    },
    photos: [
      {
        src: "/pests/german-roach.webp",
        alt: "German cockroach, tan with two dark stripes on the thorax, photographed from above",
        caption: "German cockroach, the indoor kitchen roach we get called about.",
      },
      {
        src: "/field/german-roaches.webp",
        alt: "German cockroaches clustered along a wall seam next to an air vent",
        caption: "German cockroaches near a vent on a job.",
      },
      {
        src: "/field/cockroach-kitchen.webp",
        alt: "Cockroaches and debris along a tiled kitchen floor next to a cabinet and mop handle",
        caption: "Kitchen-floor activity on a service stop.",
      },
      {
        src: "/field/roach-droppings-behind-appliance.webp",
        alt: "Cockroach droppings along a tile floor behind a kitchen appliance",
        caption: "Droppings behind an appliance.",
      },
      {
        src: "/field/monitoring-trap-cockroaches.webp",
        alt: "Sticky monitoring trap with captured cockroaches",
        caption: "Monitoring trap that caught overnight activity.",
      },
    ],
    signsHeading: "Signs it may be roaches",
    signs: [
      {
        name: "Night sightings in the kitchen",
        summary:
          "A roach on the counter, in the sink, or on the floor when you turn on a light. German roaches scatter back toward appliances and cabinets.",
      },
      {
        name: "Droppings that look like pepper or coffee grounds",
        summary:
          "Tiny dark specks along a backsplash, drawer seam, or the floor behind the stove, dishwasher, or fridge.",
      },
      {
        name: "Egg cases and a musty smell",
        summary:
          "Brown capsule-shaped cases in corners or under appliances. A heavy German roach problem can add a stale, oily odor in the kitchen.",
      },
      {
        name: "Traps or glue boards filling up",
        summary:
          "A store-bought sticky trap that comes up with roaches after one night is a clear signal, especially in an apartment or restaurant kitchen.",
      },
    ],
    localHeading: "Where roaches show up in Fresno kitchens and businesses",
    localCopy: [
      "German roaches live indoors with food, water, and heat. In Fresno that is kitchens, break rooms, and dish pits—homes, apartments, and restaurants. Central Valley summers push people and pests into cooled indoor rooms; a leaky sink or a fridge drip is enough water.",
      "In houses we often start at the stove, fridge, and under-sink cabinet. In rentals, one unit can feed the next through shared plumbing chases. In food service, the call usually comes when staff see them after close or when a health-minded owner wants the kitchen checked before it gets worse.",
      "The field photos here are the real version of those calls: a vent seam packed with German roaches, droppings behind equipment, a trap that did its job. If that matches your floor or appliance gap, say so in the form or on the phone.",
    ],
    visitHeading: "What to expect from a roach visit",
    visitIntro:
      "German roaches hide in tight indoor cracks, so a visit is an inspection of those spots plus treatment. More than one trip is common for a kitchen that has been active for a while. We will say so up front. No contract required.",
    visitSteps: [
      {
        name: "Describe the kitchen activity",
        summary:
          "Night sightings, droppings, a trap with catches, home vs. restaurant vs. apartment. Mention if other units or a neighboring business are involved.",
      },
      {
        name: "We check the warm hiding spots",
        summary:
          "Appliance sides, cabinet hinges, wall seams, and the floor edges you can see in the job photos—then treat those harborage areas.",
      },
      {
        name: "Treat and monitor",
        summary:
          "We treat what we find and can use monitors to see what is still moving. If you are not satisfied, we come back at no charge.",
      },
    ],
    defaultPestIssue: "Roaches in a Fresno kitchen, apartment, or business.",
    faqs: [
      {
        question: "Do you treat German roaches in Fresno?",
        answer:
          "Yes. Kitchen and indoor roaches at homes, apartments, restaurants, and other businesses. Tell us where you are seeing them and we will follow up.",
      },
      {
        question: "Can you service a restaurant or rental kitchen?",
        answer:
          "Yes. Property type helps us plan the visit. Call or use the form and name the pest, the site, and how soon you need help.",
      },
      {
        question: "Will one visit take care of roaches?",
        answer:
          "Sometimes a light problem is a short job. German roaches that have been in a kitchen for a while often need follow-up. One-time and no-contract options are still fine, and we come back at no charge if you are not satisfied.",
      },
    ],
  },
} as const satisfies Record<string, FresnoServicePage>;

export function relatedFresnoServicePages(path: string): FresnoServicePage[] {
  return Object.values(fresnoServicePages).filter((page) => page.path !== path);
}
