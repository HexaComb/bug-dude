/** Owner-supplied field photos. Dimensions match the exported WebP files. */

export const fieldImageSize = { width: 1200, height: 1600 } as const;

export const ownerFieldPhotos = {
  truck: {
    src: "/field/owner-truck.webp",
    alt: "The Bug Dude standing beside the branded pest-control truck on a residential street",
    caption: "The truck you’ll see around Fresno-area homes and businesses.",
  },
  atWork: {
    src: "/field/owner-at-work.webp",
    alt: "The Bug Dude using a long pole duster on the upper exterior wall of a stucco home",
    caption: "Exterior work—clearing webs and treating the places pests actually use.",
  },
} as const;

export const pestFieldPhotos = [
  {
    src: "/field/wolf-spider.webp",
    alt: "Brown striped spider on a textured stucco wall",
    caption: "Spider on a home wall",
  },
  {
    src: "/field/widow-spider.webp",
    alt: "Glossy black spider hanging from silk under a plastic lid",
    caption: "Spider under outdoor cover",
  },
  {
    src: "/field/spider-egg-sacs.webp",
    alt: "Cluster of pale spider egg sacs on a dark textured surface",
    caption: "Spider egg sacs",
  },
  {
    src: "/field/german-roaches.webp",
    alt: "German cockroaches clustered along a wall seam next to an air vent",
    caption: "German cockroaches near a vent",
  },
  {
    src: "/field/cockroach-kitchen.webp",
    alt: "Cockroaches and droppings in the corner of a tiled kitchen floor",
    caption: "Cockroach activity in a kitchen corner",
  },
  {
    src: "/field/insects-doorway.webp",
    alt: "Small insects clustered along a door frame where stucco meets concrete",
    caption: "Insects at a door threshold",
  },
] as const;
