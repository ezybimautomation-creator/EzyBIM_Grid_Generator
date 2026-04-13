import { Tag, Database, Activity, LayoutGrid } from "lucide-react";
import autoTaggerImg from "../assets/auto-tagger.png";
import dataSyncImg from "../assets/data-sync.png";
import clashResolverImg from "../assets/clash-resolver.png";
import gridGenIcon from "../assets/grid-generator-icon.png";
import rebarGenIcon from "../assets/rebar-generator-icon.png";

export interface FeatureDetail {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: any;
  image: string;
  price: string;
  isFree: boolean;
  features: string[];
  fullFeatures: FeatureDetail[];
}

export const products: Product[] = [
  {
    id: "grid-generator",
    name: "EzyGrid",
    tagline: "EzyBIM Grid Generator",
    description: "Rapidly generate complex Revit grid systems with an interactive blueprint canvas and origin targeting.",
    longDescription: "Engineered for speed and surgical precision, the Grid Generator eliminates the tedious manual placement of Revit grids. With an interactive blueprint-style canvas, users can visualize their entire grid system before committing to the model. Whether you are creating a simple residential layout or a massive enterprise-scale industrial project, the EzyBIM Grid Generator ensures your foundation is perfect from the start.",
    icon: LayoutGrid,
    image: gridGenIcon,
    price: "FREE",
    isFree: true,
    features: ["Interactive Canvas", "Bulk Generation", "Origin Alignment", "Smart Dimensions"],
    fullFeatures: [
      {
        title: "Blueprint Drawing Canvas",
        description: "Draft your entire grid system in a zero-lag, blueprint-style workspace that syncs instantly with Revit."
      },
      {
        title: "Intelligent Bulk Generation",
        description: "Input counts and spacing for both X and Y axes to generate complete systems in a single click."
      },
      {
        title: "Origin & Base Point Snap",
        description: "Automatically align your grid intersection A-1 to the Project Base Point or Internal Origin."
      },
      {
        title: "Granular Visibility Controls",
        description: "Toggle bubble start/end points independently for horizontal and vertical grids."
      }
    ]
  },
  {
    id: "rebar-generator",
    name: "EzyRebar",
    tagline: "EzyBIM Rebar Generator",
    description: "Multi-element rebar modeling for Beams, Columns, and Footings with intelligent confinement and continuity logic.",
    longDescription: "The EzyBIM Rebar Generator is a comprehensive structural engineering tool that automates the placement of reinforcement according to international design standards. It features dedicated modules for various structural elements, providing granular control over main bars, stirrups, and starter bars. With built-in intelligence for Lap Splices, Cranking, and Confinement zones, it transforms hours of manual modeling into minutes of surgical accuracy.",
    icon: LayoutGrid,
    image: rebarGenIcon,
    price: "Coming Soon",
    isFree: false,
    features: ["Full Element Suite", "Intelligent Confinement", "Splice & Lap Logic", "Automated Sectioning"],
    fullFeatures: [
      {
        title: "Multi-Module Support",
        description: "Dedicated workflows for Beams (continuous/single), Columns (confinement logic), and Footings (top/bottom mats)."
      },
      {
        title: "Advanced Splice Logic",
        description: "Automated Lap Splice calculation with Crank (offset bend) support for vertical reinforcement."
      },
      {
        title: "Confinement Awareness",
        description: "Intelligent stirrup spacing that distinguishes between end-zones (high shear) and mid-span regions."
      },
      {
        title: "Automated View Creation",
        description: "Generate structural sections at critical locations with automatic dimensioning and annotation."
      }
    ]
  }
];
