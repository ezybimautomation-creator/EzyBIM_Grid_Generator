import { Tag, Database, Activity, LayoutGrid } from "lucide-react";
import autoTaggerImg from "../assets/auto-tagger.png";
import dataSyncImg from "../assets/data-sync.png";
import clashResolverImg from "../assets/clash-resolver.png";
import gridGenIcon from "../assets/grid-generator-icon.png";
import rebarGenIcon from "../assets/rebar-generator-icon.png";

// Showcase Images
import fullUI from "../assets/product-details/grid-generator/full-ui.png";
import interactiveCanvas from "../assets/product-details/grid-generator/interactive-canvas.png";
import bulkGenerator from "../assets/product-details/grid-generator/bulk-generator.png";
import precisionAlignment from "../assets/product-details/grid-generator/precision-alignment.png";
import flexibleNaming from "../assets/product-details/grid-generator/flexible-naming.png";
import smartSettings from "../assets/product-details/grid-generator/smart-settings.png";

export interface FeatureDetail {
  title: string;
  description: string;
}

export interface ShowcaseItem {
  title: string;
  description: string;
  image: string;
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
  showcase?: ShowcaseItem[];
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
    ],
    showcase: [
      {
        title: "The Blueprint Experience",
        description: "Experience the ultimate Revit precision with a high-performance, dark-mode canvas. Visualizing your grid architecture has never been this intuitive.",
        image: fullUI
      },
      {
        title: "Magnetic Snapping & Automated Dimensions",
        description: "Stop guessing distances. EzyGrid's magnetic snapping system locks onto Revit’s Internal Origin and Project Base Points while providing real-time, CAD-accurate dimensioning as you draw.",
        image: interactiveCanvas
      },
      {
        title: "Rapid Mass-Automation System",
        description: "Why place 50 grids manually when you can do it in two seconds? Our Bulk Generator allows you to specify complex orthogonal systems with precise spacing and labels instantly.",
        image: bulkGenerator
      },
      {
        title: "Align A-1 to Project Base Point",
        description: "Alignment is no longer a chore. With one click, surgically align your grid intersection A-1 to the Project Base Point or Internal Origin—ensuring total coordinate model health.",
        image: precisionAlignment
      },
      {
        title: "Universal Naming Logic & Order Control",
        description: "Switch between Numeric (123) and Alphabetic (ABC) labeling instantly. Need to reverse the flow? Our intelligent flip system handles every single naming possibility automatically.",
        image: flexibleNaming
      },
      {
        title: "Smart Visibility & Extension Controls",
        description: "Control your model's aesthetic with granular bubble visibility toggles. Set free-length extensions and toggle bubble starts/ends for vertical and horizontal axes independently.",
        image: smartSettings
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
